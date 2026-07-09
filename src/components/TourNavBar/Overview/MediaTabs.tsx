'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ImageIcon, LayoutGridIcon, VideoIcon, Map, Building, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/utilities/ui'
import { Media as MediaType, Hotel, Highlight } from '@/payload-types'
import { Media } from '@/components/Media'

type MediaTypeTab = 'image' | 'gallery' | 'video' | 'map' | 'hotels' | 'highlights'

interface MediaTabsProps {
  overviewImage?: number | null | MediaType
  overviewGallery?: {
    image: number | MediaType | null | undefined
    id?: string | null | undefined
  }[] | null
  overviewVideo?: {
    url?: string | null | undefined
    video?: number | MediaType | null | undefined
  } | null
  overviewMap?: string | null
  hotels?: Hotel[] | null
  highlights?: Highlight[] | null
}

export const MediaTabs: React.FC<MediaTabsProps> = ({
  overviewImage,
  overviewGallery,
  overviewVideo,
  overviewMap,
  hotels,
  highlights,
}) => {
  const hasImage = !!overviewImage
  const hasGallery = !!(overviewGallery && overviewGallery.length > 0)
  const hasVideo = !!(overviewVideo?.url || overviewVideo?.video)
  const hasMap = !!overviewMap
  const hasHotels = !!(hotels && hotels.length > 0)
  const hasHighlights = !!(highlights && highlights.length > 0)

  const [activeTab, setActiveTab] = useState<MediaTypeTab | null>(null)
  const [showLeftFade, setShowLeftFade] = useState(false)
  const [showRightFade, setShowRightFade] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Highlights Carousel Refs & States
  const highlightsCarouselRef = useRef<HTMLDivElement>(null)
  const [canScrollLeftHighlights, setCanScrollLeftHighlights] = useState(false)
  const [canScrollRightHighlights, setCanScrollRightHighlights] = useState(true)

  const updateHighlightsScrollState = () => {
    const container = highlightsCarouselRef.current
    if (container) {
      setCanScrollLeftHighlights(container.scrollLeft > 10)
      setCanScrollRightHighlights(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      )
    }
  }

  const scrollHighlights = (direction: 'left' | 'right') => {
    const container = highlightsCarouselRef.current
    if (container) {
      const card = container.querySelector('.highlight-card')
      const cardWidth = card ? card.clientWidth : 300
      const gap = 16 // gap-4 is 16px
      const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap)
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  // Hotels Carousel Refs & States
  const hotelsCarouselRef = useRef<HTMLDivElement>(null)
  const [canScrollLeftHotels, setCanScrollLeftHotels] = useState(false)
  const [canScrollRightHotels, setCanScrollRightHotels] = useState(true)

  const updateHotelsScrollState = () => {
    const container = hotelsCarouselRef.current
    if (container) {
      setCanScrollLeftHotels(container.scrollLeft > 10)
      setCanScrollRightHotels(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      )
    }
  }

  const scrollHotels = (direction: 'left' | 'right') => {
    const container = hotelsCarouselRef.current
    if (container) {
      const card = container.querySelector('.hotel-card')
      const cardWidth = card ? card.clientWidth : 300
      const gap = 16 // gap-4 is 16px
      const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap)
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const handleTabClick = (tabId: MediaTypeTab) => {
    setActiveTab(activeTab === tabId ? null : tabId)
  }

  const handleScroll = () => {
    const container = scrollContainerRef.current
    if (container) {
      // Use 10px threshold to avoid subpixel/zoom rounding issues reporting tiny scrollLeft
      setShowLeftFade(container.scrollLeft > 10)
      setShowRightFade(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      )
    }
  }

  const tabs = [
    { id: 'image', label: 'Image', icon: ImageIcon, show: hasImage },
    { id: 'gallery', label: 'Gallery', icon: LayoutGridIcon, show: hasGallery },
    { id: 'video', label: 'Video', icon: VideoIcon, show: hasVideo },
    { id: 'map', label: 'Map', icon: Map, show: hasMap },
    { id: 'hotels', label: 'Hotels', icon: Building, show: hasHotels },
    { id: 'highlights', label: 'Highlights', icon: Sparkles, show: hasHighlights },
  ].filter((tab) => tab.show)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      // Defer initial calculation slightly to let CSS layout stabilize
      const timer = setTimeout(() => {
        handleScroll()
      }, 50)

      container.addEventListener('scroll', handleScroll)
      window.addEventListener('resize', handleScroll)

      return () => {
        clearTimeout(timer)
        container.removeEventListener('scroll', handleScroll)
        window.removeEventListener('resize', handleScroll)
      }
    }
  }, [tabs])

  useEffect(() => {
    if (activeTab === 'highlights') {
      const timer = setTimeout(() => {
        updateHighlightsScrollState()
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [activeTab, highlights])

  useEffect(() => {
    if (activeTab === 'highlights') {
      window.addEventListener('resize', updateHighlightsScrollState)
      return () => {
        window.removeEventListener('resize', updateHighlightsScrollState)
      }
    }
  }, [activeTab])

  useEffect(() => {
    if (activeTab === 'hotels') {
      const timer = setTimeout(() => {
        updateHotelsScrollState()
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [activeTab, hotels])

  useEffect(() => {
    if (activeTab === 'hotels') {
      window.addEventListener('resize', updateHotelsScrollState)
      return () => {
        window.removeEventListener('resize', updateHotelsScrollState)
      }
    }
  }, [activeTab])

  if (tabs.length === 0) return null

  const renderHotels = () => {
    if (!hotels || hotels.length === 0) return null

    return (
      <div className="flex flex-col w-full">
        {/* Carousel Header Controls */}
        <div className="flex justify-between items-center mb-4 px-1">
          <span className="text-[11px] font-oswald uppercase tracking-wider text-foreground/50">
            {hotels.length} Featured Hotels
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollHotels('left')}
              disabled={!canScrollLeftHotels}
              className={cn(
                "p-1.5 rounded-sm border border-white/10 bg-white/[0.02] text-foreground transition-all duration-300",
                canScrollLeftHotels 
                  ? "hover:border-accent/40 hover:bg-accent hover:text-black cursor-pointer" 
                  : "opacity-30 cursor-not-allowed"
              )}
              aria-label="Previous Hotel"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollHotels('right')}
              disabled={!canScrollRightHotels}
              className={cn(
                "p-1.5 rounded-sm border border-white/10 bg-white/[0.02] text-foreground transition-all duration-300",
                canScrollRightHotels 
                  ? "hover:border-accent/40 hover:bg-accent hover:text-black cursor-pointer" 
                  : "opacity-30 cursor-not-allowed"
              )}
              aria-label="Next Hotel"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Track */}
        <div
          ref={hotelsCarouselRef}
          onScroll={updateHotelsScrollState}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none pb-4"
        >
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="hotel-card w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] shrink-0 snap-start bg-white/[0.03] border border-white/10 rounded-sm overflow-hidden flex flex-col group relative hover:border-accent/40 transition-colors duration-300"
            >
              {typeof hotel.image === 'object' && hotel.image !== null && (
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Media
                    resource={hotel.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    fill
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              )}
              
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-[14px] font-oswald tracking-wide text-foreground uppercase truncate pr-4">
                    {hotel.name}
                  </h4>
                  {hotel.starRating && (
                    <div className="flex items-center text-accent shrink-0">
                      <span className="text-[10px] font-medium px-1.5 py-0.5 bg-accent/10 rounded-sm whitespace-nowrap">
                        {hotel.starRating.length === 1 ? `${hotel.starRating} Star` : hotel.starRating}
                      </span>
                    </div>
                  )}
                </div>

                {hotel.description && (
                  <p className="text-foreground/70 text-[11px] leading-relaxed line-clamp-3 mb-4 flex-grow font-sans">
                    {hotel.description}
                  </p>
                )}

                {hotel.website && (
                  <a
                    href={hotel.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[10px] font-medium text-accent hover:text-white transition-colors mt-auto w-fit border-b border-accent/30 hover:border-white pb-0.5"
                  >
                    View Details
                    <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderHighlights = () => {
    if (!highlights || highlights.length === 0) return null

    return (
      <div className="flex flex-col w-full">
        {/* Carousel Header Controls */}
        <div className="flex justify-between items-center mb-4 px-1">
          <span className="text-[11px] font-oswald uppercase tracking-wider text-foreground/50">
            {highlights.length} Tour Highlights
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollHighlights('left')}
              disabled={!canScrollLeftHighlights}
              className={cn(
                "p-1.5 rounded-sm border border-white/10 bg-white/[0.02] text-foreground transition-all duration-300",
                canScrollLeftHighlights 
                  ? "hover:border-accent/40 hover:bg-accent hover:text-black cursor-pointer" 
                  : "opacity-30 cursor-not-allowed"
              )}
              aria-label="Previous Highlight"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollHighlights('right')}
              disabled={!canScrollRightHighlights}
              className={cn(
                "p-1.5 rounded-sm border border-white/10 bg-white/[0.02] text-foreground transition-all duration-300",
                canScrollRightHighlights 
                  ? "hover:border-accent/40 hover:bg-accent hover:text-black cursor-pointer" 
                  : "opacity-30 cursor-not-allowed"
              )}
              aria-label="Next Highlight"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Track */}
        <div
          ref={highlightsCarouselRef}
          onScroll={updateHighlightsScrollState}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none pb-4"
        >
          {highlights.map((highlight) => {
            const primaryImage =
              highlight.gallery && highlight.gallery.length > 0
                ? highlight.gallery[0].image
                : highlight.meta?.image

            return (
              <div
                key={highlight.id}
                className="highlight-card w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] shrink-0 snap-start bg-white/[0.03] border border-white/10 rounded-sm overflow-hidden flex flex-col group relative hover:border-accent/40 transition-colors duration-300"
              >
                {typeof primaryImage === 'object' && primaryImage !== null && (
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Media
                      resource={primaryImage}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      fill
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                )}

                <div className="p-5 flex flex-col flex-grow">
                  <h4 className="text-[14px] font-oswald tracking-wide text-foreground uppercase truncate mb-2">
                    {highlight.title}
                  </h4>

                  {highlight.meta?.description && (
                    <p className="text-foreground/70 text-[11px] leading-relaxed line-clamp-3 mb-4 flex-grow font-sans">
                      {highlight.meta.description}
                    </p>
                  )}

                  <a
                    href={`/highlights/${highlight.slug}`}
                    className="inline-flex items-center text-[10px] font-medium text-accent hover:text-white transition-colors mt-auto w-fit border-b border-accent/30 hover:border-white pb-0.5"
                  >
                    Explore More
                    <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  const renderVideo = () => {
    if (!overviewVideo) return null
    const { url, video } = overviewVideo

    if (url) {
      let embedUrl = url
      if (url.includes('youtube.com') || url.includes('youtu.be')) {
        const videoId = url.includes('v=') ? url.split('v=')[1].split('&')[0] : url.split('/').pop()
        embedUrl = `https://www.youtube.com/embed/${videoId}`
      } else if (url.includes('vimeo.com')) {
        const videoId = url.split('/').pop()
        embedUrl = `https://player.vimeo.com/video/${videoId}`
      }

      return (
        <div className="relative pt-[56.25%] w-full rounded-sm overflow-hidden shadow-xl border border-white/10 bg-black">
          <iframe
            src={embedUrl}
            className="absolute top-0 left-0 w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )
    }

    if (typeof video === 'object' && video !== null) {
      return (
        <div className="rounded-sm overflow-hidden shadow-xl border border-white/10 bg-black/20">
          <Media resource={video} className="w-full" />
        </div>
      )
    }
    return null
  }

  const renderGallery = () => {
    if (!overviewGallery) return null
    const images = overviewGallery.filter((item) => typeof item.image === 'object' && item.image !== null)

    const getGridClasses = (index: number) => {
      const patterns = [
        'md:col-span-4 md:row-span-2 col-span-2 row-span-2',
        'md:col-span-4 md:row-span-1 col-span-1 row-span-1',
        'md:col-span-4 md:row-span-1 col-span-1 row-span-1',
        'md:col-span-8 md:row-span-1 col-span-2 row-span-1',
        'md:col-span-3 md:row-span-1 col-span-1 row-span-1',
        'md:col-span-3 md:row-span-1 col-span-1 row-span-1',
        'md:col-span-3 md:row-span-1 col-span-1 row-span-1',
        'md:col-span-3 md:row-span-1 col-span-1 row-span-1',
        'md:col-span-12 md:row-span-1 col-span-2 row-span-1',
      ]
      return patterns[index % patterns.length]
    }

    return (
      <div className="grid grid-cols-2 md:grid-cols-12 gap-1 auto-rows-[120px] md:auto-rows-[150px] grid-flow-dense">
        {images.map((item, index) => (
          <div
            key={index}
            className={cn(
              'relative overflow-hidden rounded-sm border border-white/5 hover:border-accent/40 transition-all duration-500 group',
              getGridClasses(index),
            )}
          >
            <Media
              resource={item.image as MediaType}
              loading="lazy"
              fill
              imgClassName="object-cover object-center w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        ))}
      </div>
    )
  }

  const renderImage = () => {
    if (typeof overviewImage === 'object' && overviewImage !== null) {
      return (
        <div className="content-media rounded-sm overflow-hidden border border-white/10 group aspect-[21/9] w-full relative">
          <Media
            resource={overviewImage}
            loading="lazy"
            fill
            imgClassName="object-cover object-center w-full h-full transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 100vw"
          />
        </div>
      )
    }
    return null
  }

  const renderMap = () => {
    if (!overviewMap) return null

    const mapValue = overviewMap.trim()

    // Case 1: If it's an iframe embed code
    if (mapValue.startsWith('<iframe')) {
      const srcMatch = mapValue.match(/src="([^"]+)"/)
      let embedUrl = srcMatch ? srcMatch[1] : ''
      
      if (embedUrl) {
        // If it's a standard directions embed, try to force roadmap view for better route visibility
        if (embedUrl.includes('google.com/maps') && embedUrl.includes('!5e1')) {
          // !5e1 is satellite, !5e0 is roadmap. Roadmap is usually better for seeing the blue route line.
          // We won't force it here, but we'll ensure the wrapper is perfect.
        }

        return (
          <div className="relative w-full rounded-sm overflow-hidden shadow-xl border border-white/10 bg-black min-h-[450px]">
            <iframe
              src={embedUrl}
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        )
      }
    }

    // Case 2: If it's a URL
    if (mapValue.startsWith('http')) {
      // Check if it's a short URL or a "My Maps" URL
      const isShortUrl = mapValue.includes('maps.app.goo.gl') || mapValue.includes('goo.gl/maps')
      const isMyMaps = mapValue.includes('google.com/maps/d/')
      
      let embedUrl = mapValue
      
      if (isMyMaps && !mapValue.includes('embed')) {
        embedUrl = mapValue.includes('?') ? `${mapValue}&embed` : `${mapValue}?embed`
      } else if (isShortUrl) {
        embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mapValue)}&t=&z=13&ie=UTF8&iwloc=&output=embed`
      } else if (mapValue.includes('google.com/maps') && !mapValue.includes('output=embed') && !mapValue.includes('/embed')) {
        if (mapValue.includes('?')) {
          embedUrl = `${mapValue}&output=embed`
        } else {
          embedUrl = `${mapValue}?output=embed`
        }
      }

      return (
        <div className="relative w-full rounded-sm overflow-hidden shadow-xl border border-white/10 bg-black min-h-[450px]">
          <iframe
            src={embedUrl}
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      )
    }

    // Case 3: Plain text (search query)
    const searchQuery = encodeURIComponent(mapValue)
    const searchUrl = `https://maps.google.com/maps?q=${searchQuery}&t=&z=13&ie=UTF8&iwloc=&output=embed`

    return (
      <div className="relative w-full rounded-sm overflow-hidden shadow-xl border border-white/10 bg-black min-h-[450px]">
        <iframe
          src={searchUrl}
          className="absolute top-0 left-0 w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    )
  }

  return (
    <div className="flex flex-col items-end mt-6 w-full">
      {/* Tab Buttons */}
      {tabs.length > 0 && (
        <div className="flex justify-end mb-6 w-full max-w-full relative">
          {/* Left Scroll Indicator Fade */}
          {showLeftFade && (
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none z-20 md:hidden animate-fade-in" />
          )}
          {/* Right Scroll Indicator Fade */}
          {showRightFade && (
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none z-20 md:hidden animate-fade-in" />
          )}

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-none max-w-full p-1.5 bg-white/[0.03] rounded-sm shadow-2xl backdrop-blur-xl relative snap-x snap-mandatory gap-1 ml-auto"
          >
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id as MediaTypeTab)}
                  className={cn(
                    'relative flex items-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-sm text-[9px] sm:text-[10px] font-medium tracking-[0.1em] sm:tracking-[0.15em] uppercase transition-colors duration-500 z-10 shrink-0 select-none snap-start',
                    isActive ? 'text-black' : 'text-foreground/50 hover:text-foreground',
                  )}
                >
                  <Icon className={cn('w-3.5 h-3.5 sm:w-4 h-4 transition-colors duration-500', isActive ? 'text-black' : 'text-accent/80')} />
                  {tab.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeMediaTab"
                      className="absolute inset-0 bg-accent rounded-sm -z-10 shadow-[0_4px_15px_rgba(255,165,0,0.3)]"
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Content Area - Animated Height Expansion */}
      <motion.div 
        layout
        className="w-full overflow-hidden"
        initial={false}
        animate={{ height: activeTab ? 'auto' : 0, marginBottom: activeTab ? 48 : 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <AnimatePresence mode="wait">
          {activeTab && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="w-full py-4"
            >
              {activeTab === 'image' && renderImage()}
              {activeTab === 'gallery' && renderGallery()}
              {activeTab === 'video' && renderVideo()}
              {activeTab === 'map' && renderMap()}
              {activeTab === 'hotels' && renderHotels()}
              {activeTab === 'highlights' && renderHighlights()}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

