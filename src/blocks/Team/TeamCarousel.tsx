'use client'
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Instagram, Facebook, Twitter, Mail } from 'lucide-react'
import { Media } from '@/components/Media'
import type { Media as MediaType } from '@/payload-types'

export type TeamMember = {
  id: number
  avatar?: number | MediaType | null | undefined
  name?: string | null | undefined
  designation?: 'Admin' | 'Tour Leader' | 'Marshal' | 'Operation' | null | undefined
  bio?: string | null | undefined
}

interface TeamCarouselProps {
  members: TeamMember[]
}

export function TeamCarousel({ members }: TeamCarouselProps) {
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

  const maxIndex = Math.max(0, members.length - visibleCount)
  const showControls = members.length > visibleCount

  // Ensure index is within boundaries after resize
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
      if (customEvent.detail.step === 2) {
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
          {members.map((member) => (
            <div
              key={member.id}
              style={{ width: `${100 / visibleCount}%` }}
              className="shrink-0 p-2 py-4"
            >
              <div className="group relative overflow-hidden w-full h-[380px] bg-black rounded-[2px] transition-all duration-500">
                {/* Background Avatar Image */}
                {typeof member.avatar === 'object' && member.avatar !== null && (
                  <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <Media
                      resource={member.avatar}
                      alt={`${member.name}`}
                      fill
                      pictureClassName="absolute inset-0 w-full h-full"
                      imgClassName="h-full w-full object-cover transition-all duration-700 ease-in-out scale-100 group-hover:scale-[1.7] group-hover:translate-x-[-12%] group-hover:translate-y-[4%]"
                    />
                  </div>
                )}

                {/* Dark Overlay for Text Readability */}
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />

                {/* Inner Outline Frame */}
                <div className="absolute inset-[8px] rounded-[2px] border border-transparent group-hover:border-white/40 transition-all duration-1000 ease-in-out pointer-events-none z-20" />

                {/* Name & Designation */}
                <div className="absolute top-6 left-6 right-6 text-left z-20 pointer-events-none">
                  <h3 className="font-oswald text-2xl font-bold uppercase tracking-wider text-white opacity-0 group-hover:opacity-100 transition-all duration-700 transform -translate-y-2 group-hover:translate-y-0">
                    {member.name}
                  </h3>
                  <p className="font-sans text-[11px] uppercase tracking-widest text-accent mt-1 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 transform -translate-y-2 group-hover:translate-y-0">
                    {member.designation}
                  </p>
                  <p className="font-sans text-[11px] text-white mt-1 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-500 transform -translate-y-2 group-hover:translate-y-0">
                    {member.bio}
                  </p>
                </div>

                {/* Horizontal Social Links */}
                <div className="absolute left-6 bottom-6 flex flex-row space-x-4 items-center z-30 pointer-events-auto opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 transform translate-y-2 group-hover:translate-y-0">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-accent transition-colors duration-300"
                    aria-label={`${member.name}'s Instagram`}
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-accent transition-colors duration-300"
                    aria-label={`${member.name}'s Facebook`}
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-accent transition-colors duration-300"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:info@ladakhmoto.com"
                    className="text-white/80 hover:text-accent transition-colors duration-300"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>

                {/* Clickable Card Background Link */}
                <Link
                  href="/our-team"
                  className="absolute inset-0 z-10"
                  aria-label={`View profile of ${member.name}`}
                />
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
