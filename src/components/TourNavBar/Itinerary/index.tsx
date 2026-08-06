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
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet'
import { ArrowLeft } from 'lucide-react'
import { useTheme } from '@/providers/Theme'
import RichText from '@/components/RichText'
import { HighlightGallery } from '@/components/HighlightGallery'

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
const getHighlightStyle = (index: number): { bg: string; text: string } => {
  const styles = [
    { bg: 'bg-rose-600', text: 'text-white' },
    { bg: 'bg-cyan-600', text: 'text-white' },
    { bg: 'bg-amber-500', text: 'text-white' },
    { bg: 'bg-purple-600', text: 'text-white' },
    { bg: 'bg-emerald-600', text: 'text-white' },
    { bg: 'bg-indigo-600', text: 'text-white' },
    { bg: 'bg-orange-600', text: 'text-white' },
    { bg: 'bg-teal-600', text: 'text-white' },
    { bg: 'bg-sky-600', text: 'text-white' },
    { bg: 'bg-violet-600', text: 'text-white' },
    { bg: 'bg-fuchsia-600', text: 'text-white' },
    { bg: 'bg-pink-600', text: 'text-white' },
  ]
  return styles[index % styles.length]
}

export const Itinerary: React.FC<{
  itineraries?: ItineraryType[] | null
}> = (props) => {
  const { itineraries } = props
  const { theme } = useTheme()
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set())
  const [activeHotel, setActiveHotel] = useState<Hotel | null>(null)
  const [activeHighlight, setActiveHighlight] = useState<Highlight | null>(null)
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
      <h2 className="mb-2 font-oswald uppercase text-foreground tracking-[2px] text-[1.25rem] font-normal leading-[1.5em] relative left-2.5 before:content-[''] before:bg-accent before:w-[5px] before:h-[18px] before:absolute before:bottom-[7px] before:-left-2.5">
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
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <strong className="text-primary uppercase">Highlights:</strong>
                        {itinerary.structuredHighlights.map((h, hIndex) => {
                          if (typeof h === 'object' && h !== null) {
                            const style = getHighlightStyle(hIndex)
                            return (
                              <button
                                key={hIndex}
                                type="button"
                                onClick={() => setActiveHighlight(h as Highlight)}
                                className={`${style.bg} ${style.text} font-oswald text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-[2px] shadow-md hover:opacity-90 transition-opacity cursor-pointer`}
                              >
                                {h.title}
                              </button>
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
                              <button
                                onClick={() => setActiveHotel(itinerary.hotel as Hotel)}
                                className="text-accent hover:underline text-[11px] uppercase tracking-tighter inline-flex items-center gap-1 w-fit cursor-pointer bg-transparent border-none p-0"
                              >
                                View Details <span className="text-xs">→</span>
                              </button>
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

      <Sheet open={!!activeHotel} onOpenChange={(open) => !open && setActiveHotel(null)}>
        <SheetContent
          side="right"
          data-theme={theme}
          className="w-full max-w-none sm:max-w-none bg-white dark:bg-neutral-950 border-none p-0 flex flex-col h-full z-99999 rounded-none text-zinc-900 dark:text-zinc-100"
        >
          <div className="p-6 border-b border-zinc-200 dark:border-white/10 flex flex-row items-start gap-6 relative">
            <button
              onClick={() => setActiveHotel(null)}
              className="flex items-center gap-2 px-3 py-1.5 border border-zinc-300 dark:border-white/10 hover:border-accent bg-zinc-50 dark:bg-white/5 hover:bg-accent text-zinc-900 dark:text-white hover:text-black dark:hover:text-black transition-all duration-300 font-oswald text-[11px] uppercase tracking-wider rounded-sm cursor-pointer shrink-0 mt-0.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Go Back</span>
            </button>

            <SheetHeader className="text-left">
              <SheetTitle className="text-[18px] font-oswald tracking-wide text-zinc-900 dark:text-white uppercase">
                {activeHotel?.name}
              </SheetTitle>
              <SheetDescription className="text-zinc-500 dark:text-zinc-400 text-[11px] font-sans flex items-center gap-2">
                {activeHotel?.starRating && (
                  <span className="inline-block text-accent font-medium px-1.5 py-0.5 bg-accent/10 rounded-sm">
                    {activeHotel.starRating.length === 1 ? `${activeHotel.starRating} Star` : activeHotel.starRating}
                  </span>
                )}
                {activeHotel?.website && (
                  <a
                    href={activeHotel.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent hover:text-foreground transition-colors underline decoration-accent/30 hover:decoration-foreground"
                  >
                    Open in new tab
                    <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </SheetDescription>
            </SheetHeader>
          </div>
          <div className="grow w-full bg-zinc-50 dark:bg-neutral-950 overflow-y-auto px-6 pb-12">
            <div className="max-w-2xl mx-auto flex flex-col gap-6 pt-6">
              {/* Hotel Image */}
              {activeHotel?.image && typeof activeHotel.image === 'object' && (
                <div className="relative w-full aspect-16/10 overflow-hidden rounded-xs border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-white/5">
                  <Media
                    resource={activeHotel.image}
                    className="w-full h-full object-cover"
                    fill
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                </div>
              )}

              {/* Description */}
              {activeHotel?.description && (
                <div className="pt-4 border-t border-zinc-200 dark:border-white/10">
                  <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed font-sans whitespace-pre-line">
                    {activeHotel.description}
                  </p>
                </div>
              )}

              {/* Action Button: Visit Website */}
              {activeHotel?.website && (
                <div className="pt-6 border-t border-zinc-200 dark:border-white/10 flex">
                  <a
                    href={activeHotel.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-slate-950 text-xs font-bold font-oswald uppercase tracking-wider rounded-xs transition-all hover:scale-105 active:scale-95 shadow-md shadow-accent/20 cursor-pointer border-none"
                  >
                    <span>Visit Hotel Website</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <Sheet open={!!activeHighlight} onOpenChange={(open) => !open && setActiveHighlight(null)}>
        <SheetContent
          side="right"
          data-theme={theme}
          className="w-full max-w-none sm:max-w-none bg-white dark:bg-neutral-950 border-none p-0 flex flex-col h-full z-99999 rounded-none text-zinc-900 dark:text-zinc-100"
        >
          <div className="p-6 border-b border-zinc-200 dark:border-white/10 flex flex-row items-start gap-6 relative">
            <button
              onClick={() => setActiveHighlight(null)}
              className="flex items-center gap-2 px-3 py-1.5 border border-zinc-300 dark:border-white/10 hover:border-accent bg-zinc-50 dark:bg-white/5 hover:bg-accent text-zinc-900 dark:text-white hover:text-black dark:hover:text-black transition-all duration-300 font-oswald text-[11px] uppercase tracking-wider rounded-sm cursor-pointer shrink-0 mt-0.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Go Back</span>
            </button>

            <SheetHeader className="text-left">
              <SheetTitle className="text-[18px] font-oswald tracking-wide text-zinc-900 dark:text-white uppercase">
                {activeHighlight?.title}
              </SheetTitle>
              <SheetDescription className="text-zinc-500 dark:text-zinc-400 text-[11px] font-sans flex items-center gap-2">
                Highlight Details
                {activeHighlight?.slug && (
                  <a
                    href={`/highlights/${activeHighlight.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent hover:text-foreground transition-colors underline decoration-accent/30 hover:decoration-foreground"
                  >
                    Open in new tab
                    <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </SheetDescription>
            </SheetHeader>
          </div>
          <div className="grow w-full bg-zinc-50 dark:bg-neutral-950 overflow-y-auto px-6 pb-12">
            <div className="max-w-3xl mx-auto flex flex-col gap-6 pt-6">
              {/* Highlight Hero/Image */}
              {activeHighlight?.meta?.image && typeof activeHighlight.meta.image === 'object' && (
                <div className="relative w-full aspect-video overflow-hidden rounded-xs border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-white/5">
                  <Media
                    resource={activeHighlight.meta.image}
                    className="w-full h-full object-cover"
                    fill
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                </div>
              )}

              {/* Intro */}
              {activeHighlight?.intro && (
                <div className="flex flex-col gap-4">
                  <RichText
                    className="text-md/7 text-zinc-600 dark:text-zinc-300 italic font-light border-l-2 border-accent pl-6"
                    data={activeHighlight.intro}
                    enableGutter={false}
                  />
                </div>
              )}

              {/* Description */}
              {activeHighlight?.description && (
                <div className="flex flex-col gap-4 pt-4 border-t border-zinc-200 dark:border-white/10">
                  <RichText
                    className="text-md/7 text-zinc-800 dark:text-zinc-200 leading-relaxed font-sans"
                    data={activeHighlight.description}
                    enableGutter={false}
                  />
                </div>
              )}

              {/* Gallery */}
              {activeHighlight?.gallery && activeHighlight.gallery.length > 0 && (
                <HighlightGallery gallery={activeHighlight.gallery as any} />
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
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