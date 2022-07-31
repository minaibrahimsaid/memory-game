import { useState, useEffect } from 'react'
import axios from 'axios'
import { shuffle } from 'lodash'

const useImages = ({ count = 4 }) => {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)

  const fetchImages = async () => {
    setLoading(true)
    try {
      const { data: images } = await axios.get('/api/images', {
        params: {
          count,
        },
      })
      const finalImages = [
        ...images.images,
        ...images.images,
      ].map(({ url }, index) => ({ url, id: index + 1, hidden: false }))
      setData(shuffle(finalImages))
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchImages()
  }, [count])

  const removeImages = (url) => {
    const newImages = data.map((img) => {
      if (img.url === url) {
        return { ...img, hidden: true }
      }
      return img
    })
    setData([...newImages])
  }



  const createNewGame = ()=> fetchImages()
  return { data, isLoading, removeImages , createNewGame }
}

export default useImages
