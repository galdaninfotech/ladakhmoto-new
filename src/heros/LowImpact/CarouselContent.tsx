'use client'

import { useCarousel } from './Carousel'
import Image from 'next/image'

export type SlideContentProps = {
  image: {
    src: string
    alt: string
    title: string
    description: string
  }
  index: number
}

const SlideContent: React.FC<SlideContentProps> = ({ image, index }) => {
  useCarousel()

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <Image
        src={image.src || "/placeholder.svg"}
        alt={image.alt}
        fill
        className="object-cover"
        sizes="100vw"
        priority={index === 0}
        fetchPriority={index === 0 ? "high" : "auto"}
      />
      <div className="absolute inset-0 bg-black/20" />

      
    </div>
  )
}

export default SlideContent
