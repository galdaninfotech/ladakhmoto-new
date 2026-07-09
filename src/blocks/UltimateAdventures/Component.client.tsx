'use client'
import React from 'react'
import type { UltimateAdventure } from '@/payload-types'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import TourIcons from '@/components/TourIcons'
import { formatImageUrl } from '@/utilities/formatImageUrl'

interface UltimateAdventuresProps {
  ultimateAdventureData: Partial<UltimateAdventure>[]
  title?: string
  subtitle?: string
}

export const UltimateAdventures: React.FC<UltimateAdventuresProps> = ({
  ultimateAdventureData,
  title,
  subtitle,
}) => {
  const tours = ultimateAdventureData.slice(0, 2)

  if (tours.length === 0) return null

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="mb-16 text-center max-w-3xl mx-auto">
            {title && (
              <div className="intro flex flex-col items-center justify-center col-span-4 sm:col-span-8 lg:col-span-12">
                <h2 className='font-oswald text-[16px] md:text-xl uppercase text-foreground'>Ultimate Adventures 2026</h2>
              </div>
            )}
            {subtitle && (
              <p className="text-muted-foreground text-lg md:text-xl font-light">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          {tours.map((tour, index) => {          
            const imageUrl = `/api/media/file/${tour.slug}-home.webp`
            const normalizedImageUrl = formatImageUrl(imageUrl) || '/images/placeholder.jpg'

            return (
              <motion.div
                key={tour.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative flex flex-col h-full bg-card rounded-sm overflow-hidden shadow-2xl transition-transform hover:-translate-y-2 border border-border/50"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={normalizedImageUrl}
                    alt={tour.title || ''}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-6 left-6 z-10">
                    <span className="bg-primary px-4 py-1.5 rounded-md font-oswald text-sm text-primary-foreground tracking-widest uppercase">
                      Ultimate Experience
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <h3 className="font-oswald text-sm md:text-md font-semibold tracking-wide text-white uppercase mb-2 leading-tight drop-shadow-lg">
                      {tour.title}
                    </h3>
                    <div className="flex items-center gap-4 text-white/90">
                       <span className="font-oswald text-lg tracking-wide">
                        {tour.minCost ? `$ ${tour.minCost}` : 'Price on Request'}
                      </span>
                      <span className="w-1 h-1 bg-white/50 rounded-full" />
                      <span className="text-sm uppercase tracking-wider font-medium">
                        {tour.startEndCity}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow bg-card">
                  <div className="mb-8">
                     <TourIcons 
                        isOverview={true} 
                        highestPeak={tour.highestPeak} 
                        distance={tour.distance} 
                        duration={tour.duration} 
                        accommodation={tour.accommodation as string[]} 
                        meal={tour.meal as string[]} 
                      />
                  </div>

                  <div className="text-xs text-muted-foreground my-2">
                    Starting from{' '}
                    <span className="line-through text-muted-foreground mr-1">$ {tour.cutOutCost}</span>
                    <span className="text-primary font-bold">$ {tour.minCost}</span>{' '}
                    <span className="text-muted-foreground">per person</span>
                  </div>

                  <div className="mt-auto flex gap-4 pt-6 border-t border-border/30">
                    <Link
                      href={`/ultimate-adventures/${tour.slug}`}
                      className="flex-1 bg-primary font-oswald text-sm py-4 text-center rounded-lg text-primary-foreground hover:bg-primary/90 transition-all uppercase tracking-widest"
                    >
                      View Adventure
                    </Link>
                    <Link
                      href="/contact"
                      className="flex-1 bg-transparent border-2 border-primary font-oswald text-sm py-4 text-center rounded-lg text-primary hover:bg-primary hover:text-white transition-all uppercase tracking-widest"
                    >
                      Enquire Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-16 text-right">
            <Link 
                href="/ultimate-adventures" 
                className="inline-flex items-center font-oswald text-sm uppercase tracking-[0.3em] group text-muted-foreground hover:text-foreground transition-colors"
            >
                Explore All Ultimate Adventures
                <span className="ml-2 -mt-1 transform group-hover:translate-x-1 transition-transform inline-block">→</span>
            </Link>
        </div>
      </div>
    </section>
  )
}
