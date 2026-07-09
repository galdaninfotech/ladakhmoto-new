// 'use client'

import { useCarousel } from './Carousel'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { SquareArrowOutUpRight, Headset } from 'lucide-react'
import { string } from 'zod'
import Link from 'next/link'

export type SlideContentProps = {
  image: {
    src: string
    alt: string
    title: string
    subtitle: string
    offerTitle: string
    offerDescription: string
    offerBtnText: string
    offerUrl: string
    cta1Text: string
    cta2Text: string
  }
  index: number
}

const SlideContent: React.FC<SlideContentProps> = ({ image, index }) => {
  const { index: activeIndex } = useCarousel()
  const isActive = index === activeIndex

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <Image
        src={image.src || "/placeholder.svg"}
        alt={image.alt}
        fill
        className="object-cover"
        sizes="100vw"
        priority={index === 0}
        fetchPriority={index === 0 ? 'high' : 'auto'}
        decoding="async"
        quality={100}
      />
      <div className="absolute inset-0 bg-black/20" />

      <div className="container mx-auto px-4 relative -bottom-35">
        <motion.div
        className="container mx-auto relativez bottom-24z left-8z text-white"
        initial={false}
        animate={{
          opacity: isActive ? 1 : 0,
          x: isActive ? 0 : 100,
        }}
        transition={{ duration: 1, ease: 'easeOut', delay: isActive ? 0.2 : 0 }}
      >

        {/* Categories */}
        <motion.div 
          className="flex gap-x-2 mb-8 text-[11px] uppercase"
          animate={{
              opacity: isActive ? 1 : 0,
              x: isActive ? 0 : 60,
            }}
            transition={{ delay: isActive ? 2.2 : 0, duration: 1 }}
        >
          <div className="bg-orange-500 px-2 py-1">Biking</div>
          <div className="bg-red-500 px-2 py-1">Expeditions</div>
        </motion.div>

        {/* Sub Title */}
        {image.subtitle && (
          <motion.div
            className="font-oswaldz ml-1 w-fit rounded-sm"
            animate={{
              opacity: isActive ? 1 : 0,
              y: isActive ? 0 : -60,
            }}
            transition={{ delay: isActive ? 1.4 : 0, duration: 1 }}
          >
            <p className="brand-badge"> {image.subtitle}</p>
          </motion.div>
        )}


        

        {/* Title */}
        {image.title && (
          <motion.div
            className="text-white text-2xl md:text-4xl font-oswald font-extrabold uppercase tracking-[2] -ml-3 mt-2 mb-1 p-3 w-fit bg-gray-50/20z rounded-xs"
            animate={{
              opacity: isActive ? 1 : 0,
              x: isActive ? 0 : 60,
            }}
            transition={{ delay: isActive ? 0.4 : 0, duration: 1 }}
          >
            {image.title}
          </motion.div>
        )}


        {/* Offer Title */}
        {image.offerTitle && (
          <div className="text-xl font-bold text-accent font-sans">{image.offerTitle}</div>
        )}

        {image.offerDescription && (
          <motion.div
            className="flex gap-1 text-xs md:text-sm opacity-90 p-0.5 h-[32px] max-w-full md:max-w-[400px]"
            animate={{
              opacity: isActive ? 1 : 0,
              x: isActive ? 0 : 40,
            }}
            transition={{ delay: isActive ? 0.6 : 0, duration: 1 }}
          >
            <motion.p
              className="text-black font-bold text-[11px] md:text-[11px] opacity-90 bg-white flex items-center p-2 flex-1 min-w-0"
              animate={{
                opacity: isActive ? 1 : 0,
                x: isActive ? 0 : 40,
              }}
              transition={{ delay: isActive ? 0.6 : 0, duration: 1 }}
            >
              <span className="truncate">{image.offerDescription}</span>
            </motion.p>
            {image.offerBtnText && (
              <Link href={image.offerUrl} className='text-black font-bold text-[11px] md:text-[11px] opacity-90 bg-accent flex items-center p-2 shrink-0 whitespace-nowrap'>{image.offerBtnText}</Link>
            )}
          </motion.div>
        )}


        {/* Terms & Conditions */}
        {image.offerTitle && image.offerDescription && (
          <motion.p
            className="text-[10px] md:text-[9px] opacity-90"
            animate={{
              opacity: isActive ? 1 : 0,
              x: isActive ? 0 : 40,
            }}
            transition={{ delay: isActive ? 0.6 : 0, duration: 1 }}
          >
            terms & conditions apply 
            <span className='text-[14px] text-accent'>*</span>
          </motion.p>
        )}


        {/* Buttons */}
        <div className="flex gap-x-4">
          {image.cta1Text && (
            <Link href={'/home'} className='font-oswald text-white uppercase tracking-[1] bg-primary py-2 px-8 mt-2 rounded-sm flex gap-x-2'><SquareArrowOutUpRight />{image.cta1Text}</Link>
          )}
          {image.cta2Text && (
            <Link href={'/home'} className='font-oswald text-white uppercase tracking-[1] border border-accent py-2 px-8 mt-2 rounded-sm flex gap-x-2'><Headset />{image.cta2Text}</Link>
          )}
        </div>


      </motion.div>
      </div>

      
    </div>
  )
}

export default SlideContent
