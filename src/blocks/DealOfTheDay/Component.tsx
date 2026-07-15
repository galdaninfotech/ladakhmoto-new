import React from 'react'
import type { DealOfTheDayBlock as DealOfTheDayBlockProps } from '@/payload-types'
import { Media } from '@/components/Media'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const DealOfTheDay: React.FC<DealOfTheDayBlockProps> = (props) => {
  const { enabled, image, title, subTitle, description, startDate, endDate, price, url, buttonText } = props

  if (enabled === false) return null

  // Format dates elegantly
  const formatDate = (dateString?: string | null) => {
    if (!dateString) return null
    const date = new Date(dateString)
    if (isNaN(date.getTime())) return null
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  const startFormatted = formatDate(startDate)
  const endFormatted = formatDate(endDate)
  const hasDates = startFormatted || endFormatted

  return (
    <div className="bg-[#eaeaea] dark:bg-slate-900 rounded-sm overflow-hidden transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
        
        {/* Left Content Column */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center text-center p-8 sm:p-12 md:p-16 lg:p-24">
          
          {subTitle && (
            <span className="deal-of-the-day text-black uppercase tracking-[0.25em] text-sm font-bold font-oswald bg-accent px-2 py-2 mb-4 block">
              {subTitle}
            </span>
          )}
          
          <h2 className="font-oswald text-xl sm:text-2xl lg:text-3xl text-neutral-900 dark:text-white uppercase tracking-[0.15em] font-normal leading-tight mb-6">
            {title}
          </h2>

          {description && (
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 max-w-lg leading-relaxed mb-8">
              {description}
            </p>
          )}

          {/* Price and Dates Details */}
          {(hasDates || price) && (
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mb-1 text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-widest font-bold font-oswald">
              {price && (
                <span className="text-neutral-900 dark:text-neutral-200 text-sm font-extrabold">
                  Price: {price}
                </span>
              )}
              {price && hasDates && <span className="text-neutral-300 dark:text-neutral-700">|</span>}
              {hasDates && (
                <span>
                  Validity: {startFormatted && endFormatted ? `${startFormatted} — ${endFormatted}` : startFormatted || endFormatted}
                </span>
              )}
            </div>
          )}

          <p className="justify-self-end text-[10px] md:text-[9px] opacity-90 float-right mb-12">
            terms & conditions apply 
            <span className='text-[14px] text-accent'>*</span>
          </p>

          {/* Pill CTA Button */}
          {url && (
            <div>
              <Link
                href={url}
                className="inline-flex items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 px-10 py-4 rounded-full font-oswald text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 shadow-lg hover:shadow-black/10 dark:hover:shadow-white/10"
              >
                {buttonText || 'shop now'}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}

        </div>

        {/* Right Image Column */}
        <div className="lg:col-span-6 relative h-[300px] sm:h-[400px] lg:h-[550px] overflow-hidden flex items-center justify-center lg:justify-end">
          {image && typeof image !== 'string' ? (
            <Media
              resource={image}
              fill
              imgClassName="object-contain lg:object-right object-center transition-transform duration-700 hover:scale-102"
            />
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground font-oswald uppercase tracking-widest">
              No Image Available
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
