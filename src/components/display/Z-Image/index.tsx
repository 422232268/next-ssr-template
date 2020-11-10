import Image from 'next/image'

export interface ZImageProps {
  src: string
  alt?: string
  width: number
  height: number
}

export const ZImage = (props: ZImageProps) => {
  return <Image {...props} />
}

export const ZSimpleImage = (props: ZImageProps) => {
  return <img {...props} />
}

export default ZSimpleImage
