import { createApi } from 'unsplash-js'
import fetch from 'node-fetch'
import { shuffle } from 'lodash'

const images = [
  { url: 'https://picsum.photos/500?image=30' },
  { url: 'https://picsum.photos/500?image=31' },
  { url: 'https://picsum.photos/500?image=32' },
  { url: 'https://picsum.photos/500?image=33' },
  { url: 'https://picsum.photos/500?image=34' },
  { url: 'https://picsum.photos/500?image=35' },
  { url: 'https://picsum.photos/500?image=36' },
  { url: 'https://picsum.photos/500?image=37' },
  { url: 'https://picsum.photos/500?image=38' },
  { url: 'https://picsum.photos/500?image=39' },
  { url: 'https://picsum.photos/500?image=40' },
  { url: 'https://picsum.photos/500?image=41' },
  { url: 'https://picsum.photos/500?image=42' },
  { url: 'https://picsum.photos/500?image=43' },
  { url: 'https://picsum.photos/500?image=44' },
  { url: 'https://picsum.photos/500?image=45' },
  { url: 'https://picsum.photos/500?image=46' },
  { url: 'https://picsum.photos/500?image=47' },
  { url: 'https://picsum.photos/500?image=48' },
  { url: 'https://picsum.photos/500?image=49' },
  { url: 'https://picsum.photos/500?image=50' },
  { url: 'https://picsum.photos/500?image=51' },
  { url: 'https://picsum.photos/500?image=52' },
  { url: 'https://picsum.photos/500?image=53' },
  { url: 'https://picsum.photos/500?image=54' },
  { url: 'https://picsum.photos/500?image=55' },
  { url: 'https://picsum.photos/500?image=56' },
  { url: 'https://picsum.photos/500?image=57' },
  { url: 'https://picsum.photos/500?image=58' },
  { url: 'https://picsum.photos/500?image=59' },
  { url: 'https://picsum.photos/500?image=60' },
  { url: 'https://picsum.photos/500?image=61' },
  { url: 'https://picsum.photos/500?image=62' },
]
// const unsplash = createApi({
//   accessKey: process.env.MY_ACCESS_KEY,
//   fetch,
// })

const handler = async (req, res) => {
  try {
    // const { response: images } = await unsplash.photos.getRandom({ count: 10 })
    const query = req.query
    const { count } = query
    const randomImages = shuffle(images)
    const response = randomImages.splice(0, count)
    res.status(200).json({ images: response })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error })
  }
}

export default handler
