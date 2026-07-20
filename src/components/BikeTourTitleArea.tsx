import type { BikingAdventure, UltimateAdventure } from '@/payload-types'

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
    post.duration ? { label: 'Duration', value: post.duration } : null,
    post.distance ? { label: 'Ride Distance', value: `${post.distance} km` } : null,
    post.highestPeak ? { label: 'Highest Pass', value: `${post.highestPeak} ft` } : null,
    post.difficulty
      ? { label: 'Difficulty', value: post.difficulty.charAt(0).toUpperCase() + post.difficulty.slice(1) }
      : null,
    formattedNextDeparture ? { label: 'Next Departure', value: formattedNextDeparture } : null,
    post.startEndCity ? { label: 'Trip Route', value: post.startEndCity } : null,
  ].filter((item): item is { label: string; value: string } => Boolean(item))

  const currencySymbol = isUltimateAdventure ? '$' : '₹'

  return (
    <div className="mb-12">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h1 className="font-oswald font-normal uppercase text-[28px] leading-none text-foreground md:text-[34px]" aria-label="Ladakh Bike Tour Package - Ladakh With Umling La">
              {subTitle && (
                <span className="mb-2.5 font-oswald text-xs uppercase tracking-[0.28em] text-primary block ml-0.5">
                  {subTitle} - &nbsp;
                </span>
              )}
              {post.title}
            </h1>
            {(accommodationLabels?.length || mealLabels?.length) && (
              <div className="mt-4 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.18em] text-black/65">
                {accommodationLabels?.length ? (
                  <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current" strokeWidth="1.8">
                      <path d="M3 20v-9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9" />
                      <path d="M7 9V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" />
                      <path d="M3 15h18" />
                    </svg>
                    {accommodationLabels.join(' · ')}
                  </span>
                ) : null}
                {mealLabels?.length ? (
                  <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current" strokeWidth="1.8">
                      <path d="M8 3v8" />
                      <path d="M12 3v8" />
                      <path d="M10 3v18" />
                      <path d="M16 3c1.657 0 3 1.79 3 4v14" />
                    </svg>
                    {mealLabels.join(' · ')}
                  </span>
                ) : null}
              </div>
            )}
          </div>

          {(post.minCost || post.cutOutCost) && (
            <div className="min-w-[220px] rounded-sm bg-muted px-5 py-1.5 text-primary">
              <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">Starting from</p>
              <div className="mt-1 flex items-end gap-3">
                {post.cutOutCost && <span className="text-sm text-muted-foreground line-through">{currencySymbol} {post.cutOutCost}</span>}
                {post.minCost && <span className="font-oswald text-md leading-none">{currencySymbol} {post.minCost}</span>}
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">PP</p>
              </div>
            </div>
          )}

        </div>

        {titleHighlights.length > 0 && (
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {titleHighlights.slice(-3).map((item) => (
              <div key={item.label} className="rounded-sm border border-border bg-card px-4 py-3">
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{item.label}</p>
                <p className="mt-1 font-oswald text-sm uppercase text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        )}

        { paragraph1 && (
          <p className='text-sm'> { paragraph1 } </p>
        )}

        { h2 && (
          <h2 className="font-oswald font-bold text-[14px] leading-none text-primary md:text-[16px]" aria-label="Ladakh Bike Tour Package - Ladakh With Umling La">
            {h2}
          </h2>
        )}

        { paragraph2 && (
          <p className='text-sm'> { paragraph2 } </p>
        )}


      </div>
    </div>
  )
}
