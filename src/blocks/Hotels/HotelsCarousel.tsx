'use client'
import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Globe } from 'lucide-react'
import { Media } from '@/components/Media'
import type { Media as MediaType } from '@/payload-types'

export type Hotel = {
  id: number
  name: string
  description?: string | null
  website?: string | null
  image: number | MediaType
  starRating?: '1' | '2' | '3' | '4' | '5' | 'luxury' | 'standard' | 'basic' | null
}

interface HotelsCarouselProps {
  hotels: Hotel[]
}

export function HotelsCarousel({ hotels }: HotelsCarouselProps) {
  const [index, setIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(4)
  const isPausedRef = useRef(false)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 640) {
        setVisibleCount(1)
      } else if (width < 1024) {
        setVisibleCount(2)
      } else {
        setVisibleCount(4)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = Math.max(0, hotels.length - visibleCount)
  const showControls = hotels.length > visibleCount

  useEffect(() => {
    if (index > maxIndex) {
      setIndex(maxIndex)
    }
  }, [maxIndex, index])

  useEffect(() => {
    if (!showControls) return

    if (typeof window !== 'undefined') {
      if ((window as any).carouselIntervalId) {
        clearInterval((window as any).carouselIntervalId)
      }
      if (typeof (window as any).carouselSequenceStep !== 'number') {
        ;(window as any).carouselSequenceStep = -1
      }
      ;(window as any).carouselIntervalId = setInterval(() => {
        ;(window as any).carouselSequenceStep = (((window as any).carouselSequenceStep + 1) % 3)
        window.dispatchEvent(
          new CustomEvent('carousel-sequence-slide', {
            detail: { step: (window as any).carouselSequenceStep },
          }),
        )
      }, 4000)
    }

    const handleSequence = (e: Event) => {
      if (isPausedRef.current) return
      const customEvent = e as CustomEvent<{ step: number }>
      if (customEvent.detail.step === 1) {
        setIndex((prev) => (prev === maxIndex ? 0 : prev + 1))
      }
    }

    window.addEventListener('carousel-sequence-slide', handleSequence)
    return () => window.removeEventListener('carousel-sequence-slide', handleSequence)
  }, [maxIndex, showControls])

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? maxIndex : prev - 1))
  }

  const handleNext = () => {
    setIndex((prev) => (prev === maxIndex ? 0 : prev + 1))
  }


  const renderStars = (rating?: string | null, alignment: 'left' | 'right' = 'left') => {
    let count = 3
    if (rating === '1' || rating === '2' || rating === '3' || rating === '4' || rating === '5') {
      count = parseInt(rating)
    } else if (rating === 'luxury') {
      count = 5
    } else if (rating === 'basic') {
      count = 2
    }

    return (
      <div className={`flex space-x-1 mt-1 ${alignment === 'right' ? 'justify-end' : 'justify-start'}`}>
        {Array.from({ length: count }).map((_, i) => (
          <Star key={i} className="h-3 w-3 fill-accent text-accent animate-none" />
        ))}
      </div>
    )
  }

  return (
    <div
      className="relative w-full select-none"
      onMouseEnter={() => {
        isPausedRef.current = true
      }}
      onMouseLeave={() => {
        isPausedRef.current = false
      }}
      onTouchStart={() => {
        isPausedRef.current = true
      }}
      onTouchEnd={() => {
        isPausedRef.current = false
      }}
    >
      {showControls && (
        <div className="flex justify-end items-center space-x-1 -mb-1 px-2">
          <button
            onClick={handlePrev}
            className="flex h-8 w-8 items-center justify-center rounded-xs bg-gray-300 backdrop-blur-md transition-all hover:bg-accent hover:scale-105 border border-white/10 cursor-pointer shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-gray-400 hover:text-white" />
          </button>
          <button
            onClick={handleNext}
            className="flex h-8 w-8 items-center justify-center rounded-xs bg-gray-300 backdrop-blur-md transition-all hover:bg-accent hover:scale-105 border border-white/10 cursor-pointer shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-gray-400 hover:text-white" />
          </button>
        </div>
      )}

      {/* Carousel Viewport */}
      <div className="overflow-hidden w-full">
        <motion.div
          className={`flex ${visibleCount < 4 ? 'cursor-grab active:cursor-grabbing' : ''}`}
          drag={visibleCount < 4 ? 'x' : false}
          dragConstraints={visibleCount < 4 ? { left: 0, right: 0 } : undefined}
          dragMomentum={false}
          onDragEnd={(event, info) => {
            if (visibleCount < 4) {
              const threshold = 50
              const offset = info.offset.x
              if (offset < -threshold) {
                handleNext()
              } else if (offset > threshold) {
                handlePrev()
              }
            }
          }}
          animate={{ x: `-${index * (100 / visibleCount)}%` }}
          transition={{ type: 'spring', stiffness: 220, damping: 26 }}
        >
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              style={{ width: `${100 / visibleCount}%` }}
              className="shrink-0 p-2 py-4"
            >
              <div className="group relative overflow-hidden w-full h-[380px] bg-black rounded-[2px] transition-all duration-500 shadow-lg">
                {/* Background Hotel Image */}
                {typeof hotel.image === 'object' && hotel.image !== null && (
                  <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <Media
                      resource={hotel.image}
                      alt={hotel.name}
                      fill
                      pictureClassName="absolute inset-0 w-full h-full"
                      imgClassName="h-full w-full object-cover transition-all duration-700 ease-in-out scale-100 origin-left group-hover:scale-150 blur-[1px] group-hover:blur-none"
                    />
                  </div>
                )}

                {/* Dark Overlay for Text Readability */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-black/70 opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />

                {/* Inner Outline Frame */}
                <div className="absolute inset-[8px] rounded-[2px] border border-transparent group-hover:border-white/30 transition-all duration-1000 ease-in-out pointer-events-none z-20" />

                {/* Name & Star Rating (Static Display) */}
                <div className="absolute top-6 left-6 right-6 text-left z-20 pointer-events-none group-hover:opacity-0 transition-opacity duration-500">
                  <h3 className="font-oswald text-xl font-bold uppercase tracking-wider text-white">
                    {hotel.name}
                  </h3>
                  {renderStars(hotel.starRating, 'left')}
                </div>

                {/* Sliding Content from the Right */}
                <div className="absolute right-6 top-6 bottom-6 left-12 flex flex-col justify-center items-end text-right z-20 pointer-events-none transform translate-x-[120%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out">
                  <h3 className="font-oswald text-xl font-bold uppercase tracking-wider text-white">
                    {hotel.name}
                  </h3>
                  {renderStars(hotel.starRating, 'right')}
                  
                  {hotel.description && (
                    <p className="font-sans text-[11px] text-white/80 mt-3 line-clamp-3">
                      {hotel.description}
                    </p>
                  )}

                  {hotel.website && (
                    <a
                      href={hotel.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 px-4 py-2 bg-accent text-black font-sans text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors pointer-events-auto"
                    >
                      Visit Website
                    </a>
                  )}
                </div>

                {/* Bottom Left Website Link Icon */}
                {hotel.website && (
                  <div className="absolute left-6 bottom-6 z-30 pointer-events-auto opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 transform translate-y-2 group-hover:translate-y-0">
                    <a
                      href={hotel.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-accent transition-colors duration-300"
                      aria-label={`Visit website for ${hotel.name}`}
                    >
                      <Globe className="h-5 w-5" />
                    </a>
                  </div>
                )}

                {/* Clickable Card Background Link */}
                {hotel.website ? (
                  <a
                    href={hotel.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10"
                    aria-label={`Visit website for ${hotel.name}`}
                  />
                ) : (
                  <div className="absolute inset-0 z-10" />
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {showControls && (
        <div className="mt-8 flex justify-center space-x-1">
          {/* Indicator Dots */}
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                index === i ? 'w-6 bg-gray-500' : 'w-2 bg-gray-500/30 hover:bg-gray-500/50'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
