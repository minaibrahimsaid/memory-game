import Image from "next/image";
import styles from "../styles/card.module.css";

const Card = ({ url, flip, onFlip, id, hidden }) => {
  return (
    <div
      className={styles.scene}
      onClick={() => {
        if (hidden) return;
        onFlip(id);
      }}
    >
      <div
        className={`${styles.card} ${!flip && !hidden ? styles.isFlipped : ""}`}
      >
        <div className={`${styles.card__face} ${styles.card__face__front}`}>
          {!hidden && (
            <Image src={url} layout="fill" width="100%" height="100%" style={{borderRadius:5}}/>
          )}
        </div>
        <div className={`${styles.card__face} ${styles.card__face__back}`} />
      </div>
    </div>
  );
};

export default Card;
