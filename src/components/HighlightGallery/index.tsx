'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Media as MediaType } from '@/payload-types'
import { Media } from '@/components/Media'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import { formatImageUrl } from '@/utilities/formatImageUrl'

// Helper to get image URL
const getImageUrl = (image: string | number | MediaType | null | undefined): string | null => {
  if (!image) return null
  if (typeof image === 'string') return formatImageUrl(image)
  if (typeof image === 'number') return null
  if (typeof image === 'object' && image !== null && 'url' in image) {
    return formatImageUrl(image.url)
  }
  return null
}

export const HighlightGallery: React.FC<{
  gallery?: {
    image?: string | number | MediaType | null | undefined
    caption?: string | null | undefined
    id?: string | null | undefined
  }[] | null | undefined
}> = ({ gallery }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [direction, setDirection] = useState<1 | -1>(1)

  if (!gallery || gallery.length === 0) return null

  // Ensure we only use valid images
  const validItems = gallery.filter(item => getImageUrl(item.image))

  if (validItems.length === 0) return null

  const handleImageClick = (index: number) => setSelectedIndex(index)
  const handleCloseModal = () => setSelectedIndex(null)
  
  const handleNext = () => {
    if (selectedIndex === null) return
    setDirection(1)
    setSelectedIndex((prev) => (prev === null ? 0 : (prev + 1) % validItems.length))
  }
  
  const handlePrev = () => {
    if (selectedIndex === null) return
    setDirection(-1)
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev - 1 + validItems.length) % validItems.length,
    )
  }

  const currentItem = selectedIndex !== null ? validItems[selectedIndex] : null
  const currentImageUrl = currentItem ? getImageUrl(currentItem.image) : null

  return (
    <div className="mt-12">
      <h3 className="font-oswald text-xl uppercase tracking-wider mb-8 flex items-center">
        <span className="w-8 h-px bg-accent mr-3"></span>
        Gallery
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {validItems.map((item, index) => (
          <div 
            key={index} 
            className="relative aspect-[4/3] rounded-sm overflow-hidden border border-white/10 group cursor-pointer"
            onClick={() => handleImageClick(index)}
          >
            <Media 
              resource={item.image} 
              fill 
              imgClassName="object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
            
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="bg-black/50 backdrop-blur-sm p-3 rounded-full border border-white/20 text-white">
                <ZoomIn className="w-6 h-6" />
              </div>
            </div>

            {item.caption && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white text-xs font-light">{item.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence custom={direction}>
        {selectedIndex !== null && currentImageUrl && (
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
                  src={currentImageUrl}
                  alt={currentItem?.caption || "Gallery Enlarged view"}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Navigation Controls */}
              {validItems.length > 1 && (
                <div className="absolute inset-x-4 md:inset-x-12 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handlePrev()
                    }}
                    className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all backdrop-blur-md group cursor-pointer"
                  >
                    <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleNext()
                    }}
                    className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all backdrop-blur-md group cursor-pointer"
                  >
                    <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}

              {/* Header/Close */}
              <div className="absolute top-0 left-0 w-full p-4 md:p-8 flex justify-between items-start md:items-center bg-gradient-to-b from-black/60 to-transparent">
                <div className="flex flex-col gap-1">
                  <span className="text-white font-oswald uppercase tracking-[0.3em] text-xs opacity-80">
                    Gallery — {selectedIndex + 1} / {validItems.length}
                  </span>
                  {currentItem?.caption && (
                    <span className="text-white/70 text-sm italic font-light hidden md:block">
                      {currentItem.caption}
                    </span>
                  )}
                </div>
                
                <button
                  onClick={handleCloseModal}
                  className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white transition-all backdrop-blur-md border border-white/10"
                >
                  <X className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>

              {/* Mobile Caption */}
              {currentItem?.caption && (
                <div className="absolute bottom-0 left-0 w-full p-6 text-center md:hidden bg-gradient-to-t from-black/80 to-transparent">
                  <span className="text-white/90 text-sm italic font-light">
                    {currentItem.caption}
                  </span>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
