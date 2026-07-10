'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, MapPin, Compass, Globe } from 'lucide-react'
import { Media } from '@/components/Media'
import type { Media as MediaType } from '@/payload-types'

export type Highlight = {
  id: number
  title: string
  slug?: string | null
  intro?: any
  gallery?: {
    image: number | MediaType
    caption?: string | null
    id?: string | null
  }[] | null
}

interface HighlightsCarouselProps {
  highlights: Highlight[]
}

// Plain-text extractor for lexical richText
function getPlainTextFromLexical(lexicalState: any): string {
  if (!lexicalState || typeof lexicalState !== 'object') return ''
  try {
    const textParts: string[] = []
    const traverse = (node: any) => {
      if (node.text) {
        textParts.push(node.text)
      }
      if (node.children && Array.isArray(node.children)) {
        node.children.forEach(traverse)
      }
    }
    traverse(lexicalState.root || lexicalState)
    return textParts.join(' ')
  } catch (e) {
    return ''
  }
}

export function HighlightsCarousel({ highlights }: HighlightsCarouselProps) {
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

  const maxIndex = Math.max(0, highlights.length - visibleCount)

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

  const showControls = highlights.length > visibleCount

  return (
    <div className="relative w-full select-none">
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
          {highlights.map((highlight) => {
            const primaryImage = highlight.gallery?.[0]?.image
            const rawIntro = getPlainTextFromLexical(highlight.intro)

            return (
              <div
                key={highlight.id}
                style={{ width: `${100 / visibleCount}%` }}
                className="shrink-0 p-2 py-4"
              >
                <div className="group relative overflow-hidden w-full h-[380px] bg-black rounded-[2px] shadow-lg perspective-[2000px]">
                  {/* Card Image */}
                  {typeof primaryImage === 'object' && primaryImage !== null && (
                    <div className="absolute inset-0 w-full h-full overflow-hidden">
                      <Media
                        resource={primaryImage}
                        alt={highlight.title}
                        fill
                        pictureClassName="absolute inset-0 w-full h-full"
                        imgClassName="h-full w-full object-cover transition-all duration-500 scale-100 group-hover:scale-110 group-hover:translate-x-[30%] group-hover:opacity-50"
                      />
                    </div>
                  )}

                  {/* 3D Swing Details Panel */}
                  <div className="absolute inset-y-0 left-0 w-[70%] bg-accent transition-all duration-500 origin-left transform-[rotateY(-90deg)] transform-3d perspective-[2000px] z-20 group-hover:transform-[rotateY(0deg)]">
                    <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 bg-white text-black p-5 text-center shadow-lg rounded-[2px]">
                      <span className="font-sans text-[10px] text-primary/70 uppercase tracking-widest font-bold block mb-1">
                        Highlight
                      </span>
                      <h3 className="font-oswald text-base font-bold uppercase tracking-wider text-primary line-clamp-2 leading-tight">
                        {highlight.title}
                      </h3>
                      
                      {rawIntro && (
                        <p className="font-sans text-[11px] text-foreground/80 mt-2 line-clamp-3">
                          {rawIntro}
                        </p>
                      )}

                      {/* Action Buttons / Icons */}
                      <div className="flex justify-center space-x-3 mt-4 pointer-events-auto">
                        <a
                          href={`/highlights/${highlight.slug}`}
                          className="p-1.5 rounded-full border border-black/10 text-primary hover:bg-primary hover:text-white transition-colors"
                          aria-label="Map Location"
                        >
                          <MapPin className="h-3.5 w-3.5" />
                        </a>
                        <a
                          href={`/highlights/${highlight.slug}`}
                          className="p-1.5 rounded-full border border-black/10 text-primary hover:bg-primary hover:text-white transition-colors"
                          aria-label="Navigate"
                        >
                          <Compass className="h-3.5 w-3.5" />
                        </a>
                        <a
                          href={`/highlights/${highlight.slug}`}
                          className="p-1.5 rounded-full border border-black/10 text-primary hover:bg-primary hover:text-white transition-colors"
                          aria-label="Explore details"
                        >
                          <Globe className="h-3.5 w-3.5" />
                        </a>
                      </div>

                      <a
                        href={`/highlights/${highlight.slug}`}
                        className="inline-block mt-4 px-4 py-2 bg-primary text-white hover:bg-black hover:text-white font-sans text-[10px] font-bold uppercase tracking-widest transition-colors pointer-events-auto"
                      >
                        Explore
                      </a>
                    </div>
                  </div>

                  {/* Clickable Card Background Link */}
                  <a
                    href={`/highlights/${highlight.slug}`}
                    className="absolute inset-0 z-10"
                    aria-label={`View highlight details for ${highlight.title}`}
                  />
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>

      {showControls && (
        <div className="container px-3 mt-8 flex justify-center space-x-1">
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
