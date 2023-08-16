import { useEffect, useState } from 'react'

interface Props {
  imagePath: string
}
function Avatar({ imagePath }: Props) {
  const [image, setImage] = useState<string | null>(null)

  useEffect(() => {
    const loadImage = async () => {
      const result: unknown = await import(imagePath)
      const path: string = (result as { default: string }).default
      setImage(path)
    }
    loadImage()
  }, [])

  return <div>{image ? <img src={image} alt="" className='avatar__image' /> : null}</div>
}

export default Avatar
