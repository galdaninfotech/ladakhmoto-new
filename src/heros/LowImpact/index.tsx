'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import type { Page } from '@/payload-types'
import { HeroBottomMask } from '@/components/HeroBottomMask'
import { formatImageUrl } from '@/utilities/formatImageUrl'
import { getPreferredMediaSource } from '@/utilities/getPreferredMediaSource'

import { Carousel, CarouselContent, CarouselItem } from './Carousel'
import SlideContent from './CarouselContent'

export const LowImpactHero: React.FC<Page['hero']> = ({ slides }) => {
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
      <div className="absolute top-0 left-0 h-[500px] w-full">
        <div className="relative w-full h-[500px] overflow-hidden">
          <Image
            src={firstSlideSrc}
            alt={firstSlideImage?.alt || ''}
            fill
            className="object-cover"
            sizes="100vw"
            priority
            fetchPriority="high"
            loading="eager"
            quality={90}
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <HeroBottomMask />
      </div>
    )
  }

  return (
    <div className="absolute top-0 left-0 h-[500px] w-full">
      <Carousel autoPlay autoPlayInterval={4000}>
        <CarouselContent>
          {slides && slides.length > 0
            ? (() => {
                const slide = slides[0]
                const { image, title, subtitle } = slide
                if (typeof image === 'object' && image !== null && image.url) {
                  return (
                    <CarouselItem key={slide.id || 0} className="relative">
                      <SlideContent
                        image={{
                          src: formatImageUrl(getPreferredMediaSource(image, ['xlarge', 'large']).url),
                          alt: image.alt || '',
                          title: title,
                          description: subtitle || '',
                        }}
                        index={0}
                      />
                    </CarouselItem>
                  )
                }
                return null
              })()
            : null}
        </CarouselContent>
        <HeroBottomMask />
        {/* <CarouselNavigation alwaysShow />
          <CarouselIndicator /> */}
      </Carousel>
    </div>
  )
}
