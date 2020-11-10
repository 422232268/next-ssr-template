import Image from 'next/image'

interface ZImageInterface {
  src: string
  alt?: string
  width: number
  height: number
}

const ZImage = (props: ZImageInterface) => {
  return <Image {...props} />
}

export default ZImage
