import type { BikingAdventure, UltimateAdventure } from '@/payload-types'
import { Clock, Route, MountainSnow, Shield, CalendarDays, MapPin, Bed, Utensils } from 'lucide-react'
import type { ComponentType } from 'react'

type BikeTourTitleAreaProps = {
  post: BikingAdventure | UltimateAdventure
  isUltimateAdventure?: boolean
}

export default function BikeTourTitleArea({ post, isUltimateAdventure }: BikeTourTitleAreaProps) {

  let subTitle: string;
  let paragraph1: string;
  let h2: string;
  let paragraph2: string;

  switch (post.slug) {
    case 'ladakh-himalayan-adventure':
      subTitle = 'Delhi To Ladakh Bike Trip';
      paragraph1 = 'Looking for the best Delhi to Ladakh and back to Delhi bike trip? Our guided Leh Ladakh bike tour starts from Delhi and takes you through the most iconic Himalayan routes. This all-inclusive Ladakh bike trip package covers stays, backup vehicle, experienced road captains, and complete on-road support.';
      h2 = 'Delhi to Ladakh Bike Trip Package';
      paragraph2 = 'This Ladakh bike trip from Delhi is designed for riders who want a complete Himalayan journey. Starting from Delhi, the route covers Manali, high mountain passes, and finally Leh Ladakh, making it one of the most popular bike trips in India.';
      break;
    case 'ladakh-himalayan-grand-loop':
      subTitle = 'Delhi To Ladakh Bike Trip';
      paragraph1 = '';
      h2 = '';
      paragraph2 = '';
      break;
    case 'manali-leh-srinagar':
      subTitle = 'Manali To Srinagar Bike Trip';
      paragraph1 = '';
      h2 = '';
      paragraph2 = '';
      break;
    case 'leh-ladakh-with-turtuk':
      subTitle = 'Ladakh Bike Tour Package';
      paragraph1 = 'There’s something special about riding all the way to Turtuk on a Leh Ladakh bike tour package, it feels like discovering a hidden chapter of the Himalayas. This exclusive trip package is designed for those who want to go beyond the ordinary, combining iconic routes with lesser-known experiences. As part of our best Leh Ladakh bike tour packages, this journey offers not just adventure, but stories, culture, and landscapes that stay with you long after the ride ends.';
      h2 = '';
      paragraph2 = '';
      break;
    default:
      subTitle = 'Ladakh Bike Tour Package';
      paragraph1 = '';
      h2 = '';
      paragraph2 = '';
      break;
  }

  const nextDeparture = post.dates
    ?.map((date) => date?.start)
    .filter((date): date is string => Boolean(date))
    .map((date) => new Date(date))
    .filter((date) => !Number.isNaN(date.getTime()))
    .filter((date) => date.getTime() > new Date().getTime())
    .sort((a, b) => a.getTime() - b.getTime())?.[0]

  const formattedNextDeparture = nextDeparture
    ? new Intl.DateTimeFormat('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }).format(nextDeparture)
    : null

  const accommodationLabels = post.accommodation?.map((item) => {
    switch (item) {
      case 'home-stay':
        return 'Homestay'
      case 'gh':
        return 'Guest House'
      default:
        return item.charAt(0).toUpperCase() + item.slice(1)
    }
  })

  const mealLabels = post.meal?.map((item) => item.charAt(0).toUpperCase() + item.slice(1))

  const titleHighlights = [
    post.duration ? { label: 'Duration', value: post.duration, icon: Clock } : null,
    post.distance ? { label: 'Distance', value: `${post.distance} km`, icon: Route } : null,
    post.highestPeak ? { label: 'Highest Pass', value: `${post.highestPeak} ft`, icon: MountainSnow } : null,
    post.difficulty
      ? {
          label: 'Difficulty',
          value: post.difficulty.charAt(0).toUpperCase() + post.difficulty.slice(1),
          icon: Shield,
        }
      : null,
    formattedNextDeparture ? { label: 'Next Departure', value: formattedNextDeparture, icon: CalendarDays } : null,
    post.startEndCity ? { label: 'Trip Route', value: post.startEndCity, icon: MapPin } : null,
  ].filter((item): item is NonNullable<typeof item> => Boolean(item))

  const currencySymbol = isUltimateAdventure ? '$' : '₹'

  // Helper to format cost nicely
  const formatCost = (cost?: string | number | null) => {
    if (!cost) return ''
    const val = typeof cost === 'string' ? parseFloat(cost) : cost
    return isNaN(val) ? String(cost) : val.toLocaleString(isUltimateAdventure ? 'en-US' : 'en-IN')
  }

  // Helper to calculate saving percentage
  const calculateDiscount = (min?: string | number | null, cutout?: string | number | null) => {
    const minVal = typeof min === 'string' ? parseFloat(min) : min
    const cutoutVal = typeof cutout === 'string' ? parseFloat(cutout) : cutout
    if (!minVal || !cutoutVal || cutoutVal <= minVal) return 0
    return Math.round(((cutoutVal - minVal) / cutoutVal) * 100)
  }

  const savings = calculateDiscount(post.minCost, post.cutOutCost)

  return (
    <div className="mb-12 font-sans">
      <div className="flex flex-col gap-6">
        
        {/* Eyebrow Subtitle */}
        {subTitle && (
          <span className="font-oswald text-xs font-bold uppercase tracking-[0.25em] text-accent block ml-0.5">
            {subTitle}
          </span>
        )}

        {/* Title and Price block */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-baseline lg:justify-between">
          <h1 className="font-oswald font-extrabold uppercase text-3xl leading-[1.1] text-foreground md:text-4xl lg:text-[44px] tracking-wide" aria-label={`${subTitle ? subTitle + ' - ' : ''}${post.title}`}>
            {post.title}
          </h1>

          {(post.minCost || post.cutOutCost) && (
            <div className="flex items-baseline gap-2 text-foreground font-sans">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mr-1">Starting from</span>
              {post.cutOutCost && (
                <span className="text-sm line-through text-muted-foreground/60 mr-1 font-light">
                  {currencySymbol}{formatCost(post.cutOutCost)}
                </span>
              )}
              {post.minCost && (
                <span className="font-oswald text-2xl font-bold tracking-wide text-foreground">
                  {currencySymbol}{formatCost(post.minCost)}
                </span>
              )}
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground ml-0.5">PP</span>
              {savings > 0 && (
                <span className="ml-2 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest bg-emerald-500/10 dark:bg-emerald-500/20 px-2.5 py-0.5 rounded-full">
                  -{savings}%
                </span>
              )}
            </div>
          )}
        </div>

        {/* Inline Category Details (Accommodation & Meals) */}
        {(accommodationLabels?.length || mealLabels?.length) && (
          <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:gap-x-6 sm:gap-y-2 text-xs font-medium text-muted-foreground font-sans tracking-wide w-full">
            {accommodationLabels?.length && (
              <div className="flex items-center gap-2">
                <Bed className="h-4 w-4 text-accent" strokeWidth={1.8} />
                <span>Stay: {accommodationLabels.join(' · ')}</span>
              </div>
            )}
            {mealLabels?.length && (
              <div className="flex items-center gap-2">
                <Utensils className="h-4 w-4 text-accent" strokeWidth={1.8} />
                <span>Meals: {mealLabels.join(' · ')}</span>
              </div>
            )}
          </div>
        )}

        {/* Stats Sporty Accent-Border Bar */}
        {titleHighlights.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-8 py-8 border-y border-border/40 my-4">
            {titleHighlights.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="pl-2 border-dotted border-l border-gray-400/50 dark:border-accent/40 flex items-center justify-between gap-3"
                >
                  <div>
                    <p className="font-oswald text-xs font-bold md:font-extrabold uppercase text-foreground leading-none tracking-wide">
                      {item.value}
                    </p>
                    <span className="text-[10px] font-light tracking-[0.18em] text-muted-foreground block mt-1.5 leading-none">
                      {item.label}
                    </span>
                  </div>
                  <div className="text-accent/70 shrink-0">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Editorial Text Blocks */}
        {(paragraph1 || h2 || paragraph2) && (
          <div className="space-y-5 pt-2">
            {paragraph1 && (
              <p className="text-muted-foreground leading-relaxed text-sm md:text-[15px] font-sans font-light">
                {paragraph1}
              </p>
            )}

            {h2 && (
              <h2 className="font-oswald font-bold text-base md:text-lg uppercase tracking-wider text-primary dark:text-foreground">
                {h2}
              </h2>
            )}

            {paragraph2 && (
              <p className="text-muted-foreground leading-relaxed text-sm md:text-[15px] font-sans font-light">
                {paragraph2}
              </p>
            )}
          </div>
        )}

      </div>
    </div>
  )
}
