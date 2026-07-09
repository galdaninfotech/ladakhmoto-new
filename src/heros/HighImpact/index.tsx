'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import type { Page } from '@/payload-types'
import { HeroBottomMask } from '@/components/HeroBottomMask'
import { formatImageUrl } from '@/utilities/formatImageUrl'
import { getPreferredMediaSource } from '@/utilities/getPreferredMediaSource'

import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselIndicator,
  CarouselItem,
} from "./Carousel"
import SlideContent from './CarouselContent'

export const HighImpactHero: React.FC<Page['hero']> = ({ slides }) => {
  const { setHeaderTheme } = useHeaderTheme()
  const [mounted, setMounted] = useState(false)

  const firstSlide = slides?.[0]
  const firstSlideImage =
    firstSlide && typeof firstSlide.image === 'object' && firstSlide.image !== null
      ? firstSlide.image
      : null
  const firstSlideSrc = firstSlideImage?.url
    ? formatImageUrl(getPreferredMediaSource(firstSlideImage, ['xlarge', 'large']).url)
    : null

  useEffect(() => {
    setHeaderTheme('dark')
    setMounted(true)
  }, [setHeaderTheme])

  if (!mounted && firstSlideSrc) {
    return (
      <div className="relative h-[600px] w-full">
        <div className="relative w-full h-[600px] overflow-hidden">
          <Image
            src={firstSlideSrc}
            alt={firstSlideImage?.alt || ''}
            fill
            className="object-cover object-right md:object-center"
            sizes="100vw"
            priority
            fetchPriority="high"
            decoding="async"
            quality={100}
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="container mx-auto px-4 flex items-end justify-center z-99 relative -bottom-78">
            <div className="container mx-auto relative text-white">
              <div className="text-accent text-xl md:text-2xl font-oswald uppercase tracking-wider mb-4 p-3 w-fit bg-gray-50/20 rounded-xs">
                {firstSlide?.title}
              </div>
              <p className="text-sm md:text-xl opacity-90">{firstSlide?.subtitle || ''}</p>
            </div>
          </div>
        </div>
        <HeroBottomMask />
      </div>
    )
  }

  return (
    <div className="relative h-[600px] w-full">
      <Carousel autoPlay autoPlayInterval={4000}>
        <CarouselContent>
          {slides?.map((slide, index) => {
            const { image, title, subtitle } = slide;
            if (typeof image === 'object' && image !== null && image.url) {
              return (
                <CarouselItem key={slide.id || index} className="relative">
                  <SlideContent
                    image={{
                      src: formatImageUrl(getPreferredMediaSource(image, ['xlarge', 'large']).url),
                      alt: image.alt || '',
                      title: title,
                      subtitle: subtitle || '',
                      offerTitle: slide.offerTitle || '',
                      offerDescription: slide.offerDescription || '',
                      offerBtnText: slide.offerBtnText || '',
                      offerUrl: slide.offerUrl || '',
                      cta1Text: slide.cta1Text || '',
                      cta2Text: slide.cta2Text || '',
                    }}
                    index={index}
                  />
                </CarouselItem>
              )
            }
            return null;
          })}
        </CarouselContent>
        <HeroBottomMask />
        <CarouselNavigation />
        <CarouselIndicator />
      </Carousel>
    </div>
  )
}
