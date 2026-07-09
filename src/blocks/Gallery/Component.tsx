'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import type { GalleryBlock as GalleryBlockProps } from '@/payload-types'
import { Media } from '@/payload-types'
import { cn } from '@/utilities/ui'
import { formatImageUrl } from '@/utilities/formatImageUrl'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

// Helper to get image URL
const getImageUrl = (image: string | number | Media | null | undefined): string | null => {
  if (!image) return null
  if (typeof image === 'string') return formatImageUrl(image)
  if (typeof image === 'number') return null  
  if (typeof image === 'object' && image !== null && 'url' in image) {
    return formatImageUrl(image.url)
  }
  return null
}

export const Gallery: React.FC<GalleryBlockProps> = (props) => {
  const { images: allItems } = props
  const CHUNK_SIZE = 12

  const [images, setImages] = useState<string[]>([])
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [direction, setDirection] = useState<1 | -1>(1)

  const loadMoreImages = useCallback(() => {
    if (!allItems) return
  
    setImages((prevImages) => {
      const start = prevImages.length
      const end = start + CHUNK_SIZE
    
      const newImageUrls = allItems
        .slice(start, end)
        .map((item) => getImageUrl(item.image))
        .filter((url): url is string => !!url)

      if (newImageUrls.length > 0) {
        return [
          ...prevImages,
          ...newImageUrls.filter((url) => !prevImages.includes(url)), // dedupe
        ]
      }
    
      return prevImages
    })
  }, [allItems])

  // Load initial batch
  useEffect(() => {
    loadMoreImages()
  }, [loadMoreImages])

  // Infinite scroll
  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (
            window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 &&
            allItems &&
            images.length < allItems.length
          ) {
            loadMoreImages()
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [images.length, allItems, loadMoreImages])

  const handleImageClick = (index: number) => setSelectedIndex(index)
  const handleCloseModal = () => setSelectedIndex(null)
  const handleNext = () => {
    if (selectedIndex === null) return
    setDirection(1)
    setSelectedIndex((prev) => (prev === null ? 0 : (prev + 1) % images.length))
  }
  const handlePrev = () => {
    if (selectedIndex === null) return
    setDirection(-1)
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev - 1 + images.length) % images.length,
    )
  }

  const currentImage = selectedIndex !== null ? images[selectedIndex] : null

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Carefully Arranged Bento Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px] md:auto-rows-[240px]">
        {images.map((src, index) => {
          /**
           * Interlocking 6-item cycle:
           * Row 1: [Wide 2x1] [Tall 1x2] [Tall 1x2]  (Items 0, 1, 2)
           * Row 2: (Bottom of 1 & 2) [Tall 1x2] [Tall 1x2] [Wide 2x1] (Items 3, 4, 5)
           * Row 3: (Bottom of 3 & 4)
           */
          const mod = index % 6;
          const isWide = mod === 0 || mod === 5;
          
          const spanClass = isWide 
            ? "col-span-2 row-span-1" // Wide
            : "col-span-1 row-span-2"; // Tall
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={cn(
                "relative cursor-pointer overflow-hidden rounded-xs group shadow-sm hover:shadow-2xl hover:z-10 transition-all duration-500",
                spanClass
              )}
              onClick={() => handleImageClick(index)}
            >
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/20 text-white">
                  <PlusIcon className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Modern Lightbox */}
      <AnimatePresence custom={direction}>
        {selectedIndex !== null && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/98 flex items-center justify-center z-[9999] backdrop-blur-md"
            onClick={handleCloseModal}
          >
            <motion.div
              className="relative w-full h-full flex items-center justify-center p-4 md:p-12"
              custom={direction}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 28, stiffness: 250 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
                <Image
                  src={currentImage}
                  alt="Gallery Enlarged view"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Navigation Controls */}
              <div className="absolute inset-x-4 md:inset-x-12 top-1/2 -translate-y-1/2 flex justify-between">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handlePrev()
                  }}
                  className="pointer-events-auto w-14 h-14 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all backdrop-blur-md group cursor-pointer"
                >
                  <ChevronLeft className="w-8 h-8 group-hover transition-transform" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleNext()
                  }}
                  className="pointer-events-auto w-14 h-14 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all backdrop-blur-md group cursor-pointer"
                >
                  <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Header/Close */}
              <div className="absolute top-0 left-0 w-full p-8 flex justify-between items-center bg-gradient-to-b from-black/60 to-transparent">
                <span className="text-white font-oswald uppercase tracking-[0.3em] text-xs opacity-80">
                  Photography — {selectedIndex + 1} / {images.length}
                </span>
                <button
                  onClick={handleCloseModal}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white transition-all backdrop-blur-md border border-white/10"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const PlusIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
)
