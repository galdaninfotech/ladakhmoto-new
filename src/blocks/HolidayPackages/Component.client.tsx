import type { HolidayPackage } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { formatImageUrl } from '@/utilities/formatImageUrl'
import { Clock, ArrowRight, BarChart3 } from 'lucide-react'
import { ExploreLink } from '@/components/ExploreLink'

// Use a partial type because the server sometimes returns a selected subset of fields
export const HolidayPackages: React.FC<{
  holidayPackagesData: Partial<HolidayPackage> | Partial<HolidayPackage>[]
}> = ({ holidayPackagesData }) => {
  // normalize to array so callers may pass a single tour or an array
  const tours: Partial<HolidayPackage>[] = Array.isArray(holidayPackagesData)
    ? holidayPackagesData
    : holidayPackagesData
      ? [holidayPackagesData]
      : []

  type LexicalNode = {
    type: string
    text?: string
    children?: LexicalNode[]
    [key: string]: unknown
  }

  type LexicalData = {
    root: {
      children: LexicalNode[]
      [key: string]: unknown
    }
    [key: string]: unknown
  }

  const extractPlainText = (lexicalData: LexicalData): string => {
    const textNodes: string[] = []
    const traverse = (node: LexicalNode): void => {
      if (node.text) textNodes.push(node.text)
      if (node.children) node.children.forEach(traverse)
    }
    lexicalData.root.children.forEach(traverse)
    return textNodes.join(' ')
  }

  const truncateToCharacters = (text: string, charLimit: number): string => {
    if (text.length <= charLimit) return text
    return text.slice(0, charLimit)
  }

  return (
    <>
      <div className="relative intro flex flex-col items-center justify-center col-span-4 sm:col-span-8 lg:col-span-12">
        <h2 className="font-oswald text-[16px] md:text-xl uppercase text-foreground">
          Holiday Packages 2026
        </h2>
        <span className="absolute -bottom-1 w-full h-px bg-accent/50" />
      </div>

      <p className="text-muted-foreground text-xs font-sans font-light tracking-wide mx-auto mt-3 mb-12">
        Immerse yourself in the magic of Ladakh with our curated leisure, family, and adventure holiday packages tailored to offer a perfect blend of comfort, sightseeing, and local exploration.
      </p>
      
      <div className="container mx-auto grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-12 gap-x-6 mb-16 mt-16">
        {tours.map((tour) => {
          const imageUrl =
            typeof tour.overviewImage === 'object' &&
            tour.overviewImage !== null &&
            'url' in tour.overviewImage
              ? tour.overviewImage.url
              : `/api/media/file/${tour.slug}-overview.webp`
          const normalizedImageUrl = formatImageUrl(imageUrl) || ''

          return (
            <div
              key={tour.id}
              className="col-span-4 lg:col-span-3 flex flex-col bg-card shadow-sm border border-border group transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
            >
              {/* Image Section */}
              <div className="w-full h-[13rem] relative overflow-hidden clip-path-holiday">
                <Image
                  src={normalizedImageUrl}
                  alt={tour.title || ''}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {tour.duration && (
                  <div className="absolute top-3 right-3 bg-primary/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-sm uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                    <Clock className="w-3 h-3" />
                    {tour.duration}
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="flex flex-col p-6 flex-1 gap-4">
                <div className="space-y-2">
                  <h3 className="font-oswald text-base leading-tight tracking-wide text-foreground uppercase transition-colors group-hover:text-primary min-h-[3rem] flex items-center">
                    {tour.title}
                  </h3>

                  {tour.difficulty && (
                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-tighter text-primary">
                      <BarChart3 className="w-3 h-3" />
                      Level: {tour.difficulty}
                    </div>
                  )}
                </div>

                {tour.description && (
                  <p className="text-xs/relaxed text-muted-foreground line-clamp-3 font-medium">
                    {truncateToCharacters(extractPlainText(tour.description), 120)}...
                  </p>
                )}

                <Link
                  href={`/holiday-packages/${tour.slug}`}
                  className="group/btn flex items-center justify-between w-full mt-auto pt-4 border-t border-border/50 cursor-pointer"
                >
                  <span className="font-oswald text-[11px] font-bold uppercase tracking-[0.2em] text-primary transition-colors">
                    View Details
                  </span>
                  <div className="bg-primary/10 p-2 rounded-full transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 text-primary group-hover/btn:translate-x-1 transition-all" />
                  </div>
                </Link>
              </div>

            </div>
          )
        })}

        <ExploreLink url="/holiday-packages" title="Explore All Holiday Packages" className="col-span-4 sm:col-span-8 lg:col-span-12" />
      </div>
    </>
  )
}
