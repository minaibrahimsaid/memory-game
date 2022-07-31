import Head from "next/head";
import { useState } from "react";
import Card from "../components/card";
import useImages from "../hooks/useImages";
import styles from "../styles/Home.module.css";
import { Button, Typography, Slider } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

const IMAGE_NUMBER = 4;

export default function Home() {
  const [selectedImage, setSelectedImage] = useState([]);
  const [count, setCount] = useState(IMAGE_NUMBER);

  const { data, removeImages, createNewGame } = useImages({ count });

  const onFlip = (id) => {
    const image = data.find((img) => img.id === id);
    const ifExist = selectedImage.some((_) => _.id === id);
    if (selectedImage.length === 0 || selectedImage.length === 2) {
      setSelectedImage([image]);
    }

    if (selectedImage.length === 1) {
      const alreadySelected = selectedImage.find(
        (img) => img.url === image.url
      );
      if (alreadySelected && id !== alreadySelected.id) {
        return removeImages(image.url);
      }
      setSelectedImage(ifExist ? selectedImage : [...selectedImage, image]);
    }
  };

  const resetGame = () => {
    setSelectedImage([]);
    createNewGame();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Match the Images</title>
        <meta name="description" content="Match the images game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.control}>
        No of images :{" "}
        <Slider
          defaultValue={IMAGE_NUMBER}
          onAfterChange={(n) => {
            setSelectedImage([]);

            setCount(n);
          }}
          className={styles.slider}
          max={20}
        />
        <Button type="primary" onClick={resetGame}>
          New Game
        </Button>
        <Typography.Title level={3}>
          you solved :{" "}
          <strong>{data.filter(({ hidden }) => hidden).length / 2}</strong>
        </Typography.Title>
      </div>

      <div className={styles.gameContainer}>
        {!!data.length &&
          data.map((image) => {
            return (
              <Card
                key={image.id}
                {...image}
                onFlip={onFlip}
                flip={selectedImage.some((img) => img.id === image.id)}
              />
            );
          })}
      </div>
    </div>
  );
}
