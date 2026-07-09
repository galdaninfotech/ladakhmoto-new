import { cn } from '@/utilities/ui'
import Link from 'next/link'
import Image from 'next/image'

import TourIcons from '@/components/TourIcons'

export const Card: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: {
    id: number;
    title: string;
    duration?: string | null | undefined;
    distance?: string | null | undefined;
    highestPeak?: string | null | undefined;
    accommodation?: ("hotel" | "resort" | "camp" | "home-stay" | "gh" | "cottage")[] | null | undefined;
    meal?: ("breakfast" | "lunch" | "dinner")[] | null | undefined;
    isFeatured?: boolean | null | undefined;
    startEndCity?: string | null | undefined;
    minCost?: string | null | undefined;
    cutOutCost?: string | null | undefined;
    slug?: string | null | undefined;
  }
}> = (props) => {
  const { className, doc } = props

  return (
    <>
      <article
        className={cn(
          'border border-border rounded-lg overflow-hidden bg-card hover:cursor-pointer',
          className,
        )}
      >
        <div key={doc?.id} className="col-span-4 w-full rounded-md overflow-hidden shadow-lg bg-card">
              <div className="relative h-55">
                  <Image
                      src={`/api/media/file/${doc?.slug}-home.webp`}
                      alt={doc?.title || ''}
                      fill
                      className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded shadow-md">
                      ₹ {doc?.minCost} / pp
                  </div>
                  <div className="absolute bottom-0 left-1/2 w-[80%] -translate-x-1/2 bg-primary font-oswald text-primary-foreground text-sm py-2 text-center rounded-t shadow-lg">
                      {doc?.duration ? formatTourDuration(doc?.duration) : 'Duration unavailable'} &nbsp; | &nbsp; {doc?.startEndCity}
                  </div>
              </div>
              <div className="p-4 flex flex-col gap-1">
              <h3 className="font-oswald text-sm font-semibold tracking-wide text-foreground uppercase">
                  {doc?.title}
              </h3>
            <TourIcons isOverview={true} highestPeak={doc?.highestPeak} distance={doc?.distance} duration={doc?.duration} accommodation={doc?.accommodation} meal={doc?.meal} />
              <div className="text-xs text-muted-foreground my-2">
                  Starting from <span className="line-through text-muted-foreground mr-1">₹ {doc?.cutOutCost}</span>
                  <span className="text-primary font-semibold">₹ {doc?.minCost}</span>{' '}
                  <span className="text-muted-foreground">per person</span>
              </div>
              <div className="flex gap-3">
                  <Link
                    href={`/downloads/bike-tours/${doc?.slug}.pdf`}
                    className="flex-1 bg-primary font-oswald text-xs text-primary-foreground uppercase font-thick text-center py-2 rounded-sm hover:opacity-90 transition cursor-pointer shadow-sm"
                  >
                    View Full PDF
                  </Link>                  <Link
                    href={`/bike-tours/${doc?.slug}`}
                    className="flex-1 bg-primary font-oswald text-xs text-primary-foreground uppercase font-thick text-center py-2 rounded-sm hover:opacity-90 transition cursor-pointer shadow-sm"
                  >
                    MORE DETAILS
                  </Link>
              </div>
              </div>
          </div>
      
      </article>
    </>
  )
}


const formatTourDuration = (duration: string): string => {
  if (!duration) return '';
  
  // Extract number before 'D' after slash: /(\d+)D$/
  const match = duration.match(/\/(\d+)D$/);
  if (match && match[1]) {
    const days = parseInt(match[1], 10);
    return `${days} Days`;
  }
  
  return duration; // Fallback
};