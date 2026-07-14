'use client'
import { cn } from '@/utilities/ui'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import TourIcons from '@/components/TourIcons'
import { Media } from '@/components/Media'
import { Media as MediaType, Hotel, Highlight } from '@/payload-types'
import { handleAccordionScrollIntoView } from '@/utilities/handleAccordionScrollIntoView'
import { useState, useRef } from 'react'
import { useInView } from 'framer-motion'
import Link from 'next/link'

type ItineraryType = {
  id?: string | number | null
  title?: string | null | undefined
  distance?: number | string | null | undefined
  duration?: number | string | null | undefined
  highestPeak?: number | string | null | undefined
  accommodation?: string[] | null | undefined
  meal?: string[] | null | undefined
  activity?: string | null | undefined
  structuredHighlights?: (number | Highlight)[] | null | undefined
  description?: string | null | undefined
  overnight?: string | null | undefined
  // media: number | null | MediaType | undefined
  media?: number | MediaType | null | undefined
  hotel?: number | Hotel | null | undefined
}

export const Itinerary: React.FC<{
  itineraries?: ItineraryType[] | null
}> = (props) => {
  const { itineraries } = props
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set())
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '200px' })

  const handleToggle = (index: number) => {
    setExpandedItems((prev) => {
      const next = new Set(prev)
      next.add(index)
      return next
    })
  }

  return (
    <section id="itinerary" ref={sectionRef} className="pt-6 mb-8">
      <h2 className="mb-6 font-oswald uppercase text-foreground tracking-[2px] text-[1.2rem] font-normal leading-[1.5em] relative before:content-[''] before:bg-accent before:w-[95px] before:h-[3px] before:absolute before:-bottom-[9px] before:left-0 after:content-[''] after:bg-accent after:w-[146px] after:h-px after:absolute after:-bottom-[8px] after:left-0">
        Tour Itinerary
      </h2>
      <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-1">
        {itineraries &&
          itineraries.map((itinerary, index) => (
            <AccordionItem key={itinerary.id} value={`item-${index}`} className="rounded-xs">
              <AccordionTrigger
                id={`accordion-trigger-${index}`}
                className={`accordion-trigger-${index} p-3 md:p-4 text-left text-sm font-oswald text-foreground/80 bg-muted/50 cursor-pointer hover:text-accent hover:no-underline`}
                onClick={(event) => {
                  handleToggle(index)
                  handleAccordionScrollIntoView(event, `accordion-trigger-${index}`)
                }}
              >
                {generateDayNumber(index)} : {itinerary.title}
              </AccordionTrigger>
              <AccordionContent className={contentAnimation}>
                {itinerary.title && (
                  <>
                    <TourIcons
                      isOverview={false}
                      duration={itinerary.duration}
                      distance={itinerary.distance}
                      highestPeak={itinerary.highestPeak}
                      accommodation={itinerary.accommodation}
                      meal={itinerary.meal}
                    />

                    {typeof itinerary.media === 'object' &&
                      itinerary.media !== null &&
                      (expandedItems.has(index) || (index === 0 && isInView)) && (
                        <div className="content-media my-4">
                          <Media resource={itinerary.media} />
                        </div>
                    )}


                    {/* Highlights Section */}
                    {itinerary.structuredHighlights && itinerary.structuredHighlights.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        <strong className="text-accent uppercase">Highlights:</strong>
                        {itinerary.structuredHighlights.map((h, hIndex) => {
                          if (typeof h === 'object' && h !== null) {
                            return (
                              <Link
                                key={hIndex}
                                href={`/highlights/${h.slug}`}
                                className="inline-flex items-center px-2 py-0.5 rounded-sm text-[10px] font-medium bg-accent/10 text-foreground/80 border border-accent/20 hover:bg-accent/20 transition-colors"
                              >
                                {h.title}
                              </Link>
                            )
                          }
                          return null
                        })}
                      </div>
                    )}


                    {/* Activity */}
                    <ul className="space-y-2">
                      {itinerary.activity && (
                        <li>
                          {' '}
                          <strong className="text-primary uppercase">Activity:</strong> {itinerary.activity}{' '}
                        </li>
                      )}
                      {itinerary.description && <li className="text-foreground/90">{itinerary.description} </li>}
                      {itinerary.overnight && (
                        <li>
                          {' '}
                          <strong className="text-primary uppercase">Overnight:</strong> {itinerary.overnight}{' '}
                        </li>
                      )}
                    </ul>

                    {typeof itinerary.hotel === 'object' && itinerary.hotel !== null && (
                      <div className="mt-6 p-4 border border-border/30 rounded-xs bg-muted/10">
                        <div className="flex flex-col sm:flex-row gap-4">
                          {typeof itinerary.hotel.image === 'object' && itinerary.hotel.image !== null && (
                            <div className="w-full sm:w-32 lg:w-40 shrink-0">
                              <Media
                                resource={itinerary.hotel.image}
                                className="w-full h-32 sm:h-24 lg:h-28 object-cover rounded-xs"
                              />
                            </div>
                          )}
                          <div className="flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-oswald text-base text-foreground uppercase tracking-wider">
                                {itinerary.hotel.name}
                              </h4>
                              {itinerary.hotel.starRating && (
                                <span className="text-[10px] bg-accent/20 text-accent px-1.5 py-0.5 rounded-full font-medium">
                                  {itinerary.hotel.starRating.length === 1
                                    ? `${itinerary.hotel.starRating} Star`
                                    : itinerary.hotel.starRating}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-foreground/70 line-clamp-2 mb-2 italic">
                              {itinerary.hotel.description}
                            </p>
                            {itinerary.hotel.website && (
                              <Link
                                // href={itinerary.hotel.website}
                                href={`/hotel/${itinerary.hotel.website}`}
                                target="_blank"
                                rel="noreferrer"
                                className="text-accent hover:underline text-[11px] uppercase tracking-tighter inline-flex items-center gap-1 w-fit"
                              >
                                View Details <span className="text-xs">→</span>
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
      </Accordion>
    </section>
  )
}

function generateDayNumber(day: number) {
  const dayString = String(day + 1)
  const formatedDay = 'Day ' + dayString.padStart(2, '0')
  return formatedDay
}

const contentAnimation = cn(
  'px-4 pb-4 text-sm text-foreground bg-muted/20',
  'overflow-hidden',
  'data-[state=open]:animate-accordion-down',
  'data-[state=closed]:animate-accordion-up',
)