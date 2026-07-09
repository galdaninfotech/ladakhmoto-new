'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Media } from '@/components/Media'
import type { Media as MediaType } from '@/payload-types'

export type TeamMember = {
  id: number
  avatar?: number | MediaType | null | undefined
  name?: string | null | undefined
  designation?: 'Admin' | 'Tour Leader' | 'Marshal' | 'Operation' | null | undefined
}

interface TeamCarouselProps {
  members: TeamMember[]
}

export function TeamCarousel({ members }: TeamCarouselProps) {
  const [index, setIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(4)

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

  const maxIndex = Math.max(0, members.length - visibleCount)

  // Ensure index is within boundaries after resize
  useEffect(() => {
    if (index > maxIndex) {
      setIndex(maxIndex)
    }
  }, [maxIndex, index])

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? maxIndex : prev - 1))
  }

  const handleNext = () => {
    setIndex((prev) => (prev === maxIndex ? 0 : prev + 1))
  }

  const showControls = members.length > visibleCount

  return (
    <div className="relative w-full select-none">
      {showControls && (
        <div className="flex justify-end items-center space-x-1 -mb-1 px-2">
          <button
            onClick={handlePrev}
            className="flex h-8 w-8 items-center justify-center rounded-xs bg-primary text-white backdrop-blur-md transition-all hover:bg-accent hover:text-white hover:scale-105 border border-white/10 cursor-pointer shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-accent" />
          </button>
          <button
            onClick={handleNext}
            className="flex h-8 w-8 items-center justify-center rounded-xs bg-primary text-white backdrop-blur-md transition-all hover:bg-accent hover:text-white hover:scale-105 border border-white/10 cursor-pointer shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-accent" />
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
          {members.map((member) => (
            <div
              key={member.id}
              style={{ width: `${100 / visibleCount}%` }}
              className="shrink-0 p-2 py-4"
            >
              <figure className="group relative overflow-hidden min-w-[200px] max-h-[310px] w-full bg-black text-white text-center shadow-[0_0_15px_rgba(0,0,0,0.2)] border border-border dark:bg-card font-oswald">
                {typeof member.avatar === 'object' && member.avatar !== null && (
                  <div className="relative h-[220px] w-full overflow-hidden bg-neutral-900/80 opacity-90 transition-all duration-450 ease-in-out group-hover:opacity-25">
                    <Media
                      resource={member.avatar}
                      alt={`${member.name}`}
                      fill
                      pictureClassName="absolute inset-0"
                      imgClassName="h-full w-full object-fit"
                    />
                  </div>
                )}
                <Link href="/our-team" className="absolute inset-0 z-1 text-base">
                  <figcaption className="absolute top-[45%] left-[7%] right-[7%] bottom-[35%] border border-white/30 border-t-0 border-x border-b transition-all duration-450 ease-in-out group-hover:top-[7%] group-hover:bottom-[7%]">
                    <div className="overflow-hidden -translate-y-1/2 transition-all duration-450 ease-in-out">
                      <h3
                        className="relative table mx-auto px-[6px] w-auto uppercase font-normal text-white text-base
                        before:absolute before:block before:w-[1000%] before:h-[3px] before:content-[''] before:bg-white/30 before:top-1/2 before:left-[-1000%]
                        after:absolute after:block after:w-[1000%] after:h-[3px] after:content-[''] after:bg-white/30 after:top-1/2 after:right-[-1000%]"
                      >
                        {member.name}
                      </h3>
                    </div>
                    <div className="hidden absolute top-1/2 w-full px-5 m-0 opacity-0 -translate-y-1/2 transition-all duration-450 ease-in-out group-hover:opacity-100 group-hover:delay-350">
                      <p className="text-[0.9em] font-medium text-white/80">
                        Some Description Go Here
                      </p>
                      <h4 className="text-xs text-shadow-white text-shadow-lg mt-2 inline-block text-white">
                        {member.designation}
                      </h4>
                    </div>
                  </figcaption>
                </Link>
              </figure>
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
                index === i ? 'w-6 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
