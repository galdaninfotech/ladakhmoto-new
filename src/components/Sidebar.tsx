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
    <div id='sidebar' className='mb-8 space-y-16' style={{position: 'sticky', top: '110px'}}>
        <hr className='my-8 lg:hidden mb-26 border-border' />

      <div className="lg:mt-12 font-oswald">
        <h2 className='font-oswald font-normal text-[1.2rem] text-foreground uppercase tracking-[2px] mb-4'>Book With Confidence!</h2>
        <div className="stripe-line"></div>
        <div className="space-y-2">
          <div className="text-sm text-muted-foreground flex gap-x-2"><LMDoneSqaure className='text-success size-3.5 mt-0.5' />No-Hassle Best Price Guarantee</div>
          <div className="text-sm text-muted-foreground flex gap-x-2"><LMDoneSqaure className='text-success size-3.5 mt-0.5' />Local Operator</div>
          <div className="text-sm text-muted-foreground flex gap-x-2"><LMDoneSqaure className='text-success size-3.5 mt-0.5' />Safety Backup</div>
          <div className="text-sm text-muted-foreground flex gap-x-2"><LMDoneSqaure className='text-success size-3.5 mt-0.5' />Hand-Picked Tours &amp; Activities</div>
          <div className="text-sm text-muted-foreground flex gap-x-2"><LMDoneSqaure className='text-success size-3.5 mt-0.5' />RE Himalayan Bike With Fuel</div>
          <div className="text-sm text-muted-foreground flex gap-x-2"><LMDoneSqaure className='text-success size-3.5 mt-0.5' />Handpicked Accommodation</div>
          <div className="text-sm text-muted-foreground flex gap-x-2"><LMDoneSqaure className='text-success size-3.5 mt-0.5' />Includes Lodging, Meal &amp; Fuel</div>
          <div className="text-sm text-muted-foreground flex gap-x-2"><LMDoneSqaure className='text-success size-3.5 mt-0.5' />Oxygen / Mechanic Support</div>
          <div className="text-sm text-muted-foreground flex gap-x-2"><LMDoneSqaure className='text-success size-3.5 mt-0.5' />Customer Care Available 24/7</div>
        </div>
      </div>

      <div className="space-y-4 -mt-4">
        <p className='text-sm mb-8 px-2 font-bold text-center italic text-foreground'>Book your dream trip with a deposit of 30% of the tour cost.</p>
        <button
          id="booking-sidebar"
          onClick={() => {
            setSource('sidebar')
            setIsSheetOpen(true)
          }}
          title="Book Now"
          className="font-oswald text-white text-center text-shadow-2xs text-shadow-black bg-primary w-3/5 mx-auto h-10 flex items-center justify-center hover:opacity-90 transition-opacity shadow-md uppercase tracking-wider cursor-pointer"
        >
          <span className="text-sm">
            Book Now
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
            className="font-oswald text-accent-on text-center text-shadow-2xs text-shadow-black bg-accent w-3/5 mx-auto h-10 flex items-center justify-center hover:opacity-90 transition-opacity shadow-md uppercase tracking-wider"
          >
            <i className="bi bi-download"></i>
            <span className="ml-2.5 text-sm">
              Itinerary PDF
            </span>
          </Link>
        ) : (
          <Link
            id="view-tours"
            href="/bike-tours"
            className="font-oswald text-sm text-accent-on text-center text-shadow-2xs text-shadow-black bg-accent w-3/5 mx-auto h-10 flex items-center justify-center hover:opacity-90 transition-opacity shadow-md uppercase tracking-wider"
          >
            View Tours
          </Link>
        )}
      </div>

      <hr className='my-8 border-border' />

      <h2 className='font-oswald font-normal text-[1.2rem] text-foreground uppercase tracking-[2px] mb-4'>Traveler Support</h2>
      <div className="stripe-line"></div>

      <div className='bg-card p-4 shadow-lg border border-border'>
        <span className='text-[1.2rem] font-oswald font-normal text-foreground uppercase tracking-[2px] text-center mb-2'>Need Help?</span>
        <p className='text-sm text-muted-foreground text-justify mt-4'>
          Do not hesitage to give us a call. We are a team of local experts and we are happy to talk
          to you.
        </p>
        <div className="items space-y-3 mt-4">
          <div className="item phone flex items-center">
            <LMPhone className="text-accent" />
            <a href="tel:+91-9622958013" aria-label="Phone One" title="Phone One" className='text-xs text-foreground hover:text-primary transition-colors ml-2 cursor-pointer'>
              +91-9622958013
            </a>
          </div>
          <div className="item phone flex items-center">
            <LMPhone className="text-accent" />
            <a href="tel:+91-9906989962" aria-label="Phone Two" title="Phone Two" className='text-xs text-foreground hover:text-primary transition-colors ml-2 cursor-pointer'>
              +91-9906989962
            </a>
          </div>
          <div className="item email flex items-center">
            <EmailObfuscator
              email="info@ladakhmoto.com"
              className="email email-link text-xs text-foreground hover:text-primary transition-colors ml-2 cursor-pointer flex items-center gap-x-2"
            >
              <LMEmail className="text-accent" />
            </EmailObfuscator>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
