'use client'

import React from 'react'
import LMPhone from './Icons/LMPhone'
import LMEmail from './Icons/LMEmail'
import LMDoneSqaure from './Icons/LMDoneSqaure'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useBooking } from '@/providers/BookingContext'
import { EmailObfuscator } from './EmailObfuscator'

type IconsDataType = {
  isOverview: boolean
}

const Sidebar: React.FC<IconsDataType> = () => {
  const { setIsSheetOpen, setSource } = useBooking()
  const pathname = usePathname()

  const segments = pathname?.split('/').filter(Boolean) || []
  const isTourPage =
    segments.length >= 2 &&
    (segments[0] === 'bike-tours' || segments[0] === 'holiday-packages')

  const tourType = segments[0]
  const slug = isTourPage ? segments[segments.length - 1] : null

  // Determine correct PDF directory based on tour type
  const pdfDir = tourType === 'bike-tours' ? 'bike-tours' : 'holiday-packages'
  const pdfUrl = slug ? `/downloads/${pdfDir}/${slug}.pdf` : '#'
  const downloadName = slug ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('-') : 'Itinerary'

  return (
    <div id='sidebar' className='mb-8 space-y-8' style={{position: 'sticky', top: '110px'}}>
      <hr className='my-8 lg:hidden mb-26 border-border/20' />

      {/* Card 1: Adventure Booking & Actions Card */}
      <div className="p-6 bg-card/60 dark:bg-card/35 backdrop-blur-md border border-accent/20 dark:border-accent/10 rounded-sm shadow-lg space-y-6 relative overflow-hidden group">
        {/* Subtle decorative glow */}
        <div className="absolute -right-16 -top-16 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-all duration-700" />
        
        <div className="space-y-2 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent">Flexible Booking</span>
          </div>
          <p className="text-xs text-foreground/90 font-medium leading-relaxed mt-2 px-1">
            Book your dream trip with a deposit of <span className="text-accent font-semibold underline decoration-accent/30 decoration-2 underline-offset-4">30%</span> of the tour cost.
          </p>
        </div>

        <div className="space-y-3">
          <button
            id="booking-sidebar"
            onClick={() => {
              setSource('sidebar')
              setIsSheetOpen(true)
            }}
            title="Book Now"
            className="w-full font-oswald text-accent-on text-center font-medium bg-accent hover:bg-accent/90 transition-all duration-300 rounded-lg h-11 flex items-center justify-center shadow-md hover:shadow-accent/20 uppercase tracking-widest cursor-pointer group/btn"
          >
            <span className="text-xs flex items-center gap-2">
              Book Now 
              <svg className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>

          {isTourPage ? (
            <Link
              id="download-itinerary"
              href={pdfUrl}
              download={downloadName}
              type="application/octet-stream"
              aria-label={`Download ${downloadName} Itinerary PDF`}
              title={`Download ${downloadName} Itinerary PDF`}
              target="_blank"
              className="w-full font-oswald text-foreground text-center font-normal border border-border/60 hover:bg-muted/50 dark:hover:bg-card-foreground/5 transition-all duration-300 rounded-lg h-11 flex items-center justify-center uppercase tracking-widest"
            >
              <i className="bi bi-download mr-2 text-xs"></i>
              <span className="text-xs">
                Itinerary PDF
              </span>
            </Link>
          ) : (
            <Link
              id="view-tours"
              href="/bike-tours"
              className="w-full font-oswald text-foreground text-center font-normal border border-border/60 hover:bg-muted/50 dark:hover:bg-card-foreground/5 transition-all duration-300 rounded-lg h-11 flex items-center justify-center uppercase tracking-widest"
            >
              <span className="text-xs">
                View Tours
              </span>
            </Link>
          )}
        </div>
      </div>

      {/* Card 2: Trust Card ("Book With Confidence!") */}
      <div className="py-6 px-3 bg-card/45 dark:bg-card/20 backdrop-blur-md border border-border/40 dark:border-border/10 rounded-sm shadow-sm space-y-5">
        <div className="space-y-1">
          <h3 className="font-oswald text-base font-normal text-foreground uppercase tracking-[2px] flex items-center gap-2">
            <span className="w-1 h-5 bg-accent rounded-full" />
            Book With Confidence!
          </h3>
          <div className="stripe-line !my-2 opacity-80"></div>
        </div>
        
        <ul className="space-y-1">
          {[
            "No-Hassle Best Price Guarantee",
            "Local Operator",
            "Safety Backup",
            "Hand-Picked Tours & Activities",
            "RE Himalayan Bike With Fuel",
            "Handpicked Accommodation",
            "Includes Lodging, Meal & Fuel",
            "Oxygen / Mechanic Support",
            "Customer Care Available 24/7"
          ].map((benefit, index) => (
            <li 
              key={index} 
              className="group flex items-start gap-3 text-xs text-muted-foreground hover:text-foreground transition-colors duration-300 py-2 border-b border-border/10 last:border-0"
            >
              <LMDoneSqaure className="text-success shrink-0 size-3.5 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-light leading-snug">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card 3: Traveler Support Card */}
      <div className="p-6 bg-card/45 dark:bg-card/20 backdrop-blur-md border border-border/40 dark:border-border/10 rounded-sm shadow-sm space-y-5">
        <div className="space-y-1">
          <h3 className="font-oswald text-base font-normal text-foreground uppercase tracking-[2px] flex items-center gap-2">
            <span className="w-1 h-5 bg-accent rounded-full" />
            Traveler Support
          </h3>
          <div className="stripe-line !my-2 opacity-80"></div>
        </div>

        <div className="space-y-4">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Do not hesitate to give us a call. We are a team of local experts and we are happy to talk to you.
          </p>
          
          <div className="space-y-2.5">
            <a 
              href="tel:+91-9622958013" 
              aria-label="Phone One" 
              title="Phone One" 
              className="group flex items-center gap-3 p-2.5 rounded-xl border border-border/40 dark:border-border/10 hover:border-accent/30 dark:hover:border-accent/20 hover:bg-accent/5 transition-all duration-300 cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                <LMPhone className="text-accent size-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-wider text-muted-foreground font-medium">Call Expert</span>
                <span className="text-xs text-foreground font-mono font-medium group-hover:text-accent transition-colors duration-300">+91-9622958013</span>
              </div>
            </a>

            <a 
              href="tel:+91-9906989962" 
              aria-label="Phone Two" 
              title="Phone Two" 
              className="group flex items-center gap-3 p-2.5 rounded-xl border border-border/40 dark:border-border/10 hover:border-accent/30 dark:hover:border-accent/20 hover:bg-accent/5 transition-all duration-300 cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                <LMPhone className="text-accent size-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-wider text-muted-foreground font-medium">Backup Line</span>
                <span className="text-xs text-foreground font-mono font-medium group-hover:text-accent transition-colors duration-300">+91-9906989962</span>
              </div>
            </a>

            <div className="group flex items-center gap-3 p-2.5 rounded-xl border border-border/40 dark:border-border/10 hover:border-accent/30 dark:hover:border-accent/20 hover:bg-accent/5 transition-all duration-300 cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                <LMEmail className="text-accent size-4" />
              </div>
              <div className="flex flex-col w-full">
                <span className="text-[9px] uppercase tracking-wider text-muted-foreground font-medium">Email Us</span>
                <EmailObfuscator
                  email="info@ladakhmoto.com"
                  className="text-xs text-foreground font-medium group-hover:text-accent transition-colors duration-300 block"
                  showEmail={false}
                >
                  info@ladakhmoto.com
                </EmailObfuscator>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
