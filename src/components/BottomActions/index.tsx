'use client'

import React, { useState } from 'react'

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import LMWhatsapp from '../Icons/LMWhatsapp'
import Link from 'next/link'
import LMPhoneHandset from '../Icons/LMPhoneHandset'
import LMInstagram from '../Icons/LMInstagram'
import LMEmail from '../Icons/LMEmail'
import { QuickBookingForm } from '../QuickBookingForm'
import { AnimatePresence, motion } from 'framer-motion'
import { useBooking } from '@/providers/BookingContext'
import { EmailObfuscator } from '../EmailObfuscator'

interface BottomActionsProps {
  docs?: {
    id: number;  // Required ID for each adventure
    title: string;
    dates?: {
      start?: string | null;
      end?: string | null;
      status?: "open" | "closing-soon" | "closed" | null;
      id?: string | null;
    }[] | null;  // Array of date objects
    cost?: {
      travelMode?: "own-bike" | "solo-rider" | "dual-ride" | "seat-in-backup-vehicle" | "suv" | null;
      vehicleProvided?: "own-bike" | "himalayan-411-bs6" | "isuzu-camper" | "innova-xylo" | null;
      costPerPerson?: number | null;
      id?: string | null;
    }[] | null;  // Array of cost objects
  }[];  // Array of adventure objects
}

export const BottomActions: React.FC<BottomActionsProps> = (props) => {
  const [showEnquiry, setShowEnquiry] = useState(false)
  const { isSheetOpen, setIsSheetOpen, setSource } = useBooking()

  // console.log(props.docs[0])
  return (
    <>
      <AnimatePresence>
        {showEnquiry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowEnquiry(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs z-[110]"
          />
        )}
      </AnimatePresence>
      <div className="fixed bottom-0 left-0 w-full z-[120]">
        <AnimatePresence>
          {showEnquiry && (
            <motion.div 
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 flex flex-col items-center gap-1 rounded-xs bg-card border px-4 pt-4 pb-6 z-[130]"
            >
              <div className="group absolute top-5.5 right-4 flex flex-col items-center">
                <div className="absolute bottom-full mb-1 hidden group-hover:flex flex-col items-center pointer-events-none z-120">
                  <span className="relative z-10 px-2 py-1 text-[10px] text-white whitespace-nowrap bg-black/80 rounded-xs font-oswald uppercase tracking-wider">
                    Close
                  </span>
                  <div className="w-2 h-2 -mt-1 rotate-45 bg-black/80"></div>
                </div>
                <button 
                  onClick={() => setShowEnquiry(false)}
                  className="text-foreground hover:text-primary text-xs font-thin leading-none cursor-pointer"
                  aria-label="Close enquiry"
                >
                  X
                </button>
              </div>
              <div className="text-[15px] md:text-xs font-oswald uppercase tracking-widest mb-6 self-start relative pb-4 before:content-[''] before:absolute before:left-0 before:bottom-[7px] before:h-[4px] before:w-[85px] before:bg-accent after:content-[''] after:absolute after:left-0 after:bottom-[8.5px] after:h-[1px] after:w-[134px] after:max-w-[200px] after:bg-primary after:-z-1">

                Get Instant Reply
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="group relative flex flex-col items-center">
                  <div className="absolute bottom-full mb-2 hidden group-hover:flex flex-col items-center pointer-events-none z-120">
                    <span className="relative z-10 px-2 py-1 text-[10px] text-white whitespace-nowrap bg-black/80 rounded-xs font-oswald uppercase tracking-wider">
                      WhatsApp
                    </span>
                    <div className="w-2 h-2 -mt-1 rotate-45 bg-black/80"></div>
                  </div>
                  <Link 
                    id="whatsapp-button"
                    href='https://api.whatsapp.com/send?phone=919622958013' 
                    target='_blank' 
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp"
                    onClick={(e) => {
                      if (typeof window !== 'undefined' && window.dataLayer) {
                        window.dataLayer.push({
                          event: 'whatsapp_click',
                          'gtm.element': e.currentTarget,
                          'gtm.elementUrl': e.currentTarget.href,
                          click_url: e.currentTarget.href,
                          link_text: 'WhatsApp',
                          link_classes: e.currentTarget.className,
                          page_location: window.location.href,
                        })
                      }
                    }}
                    className="flex items-center justify-center w-16 h-10 md:w-20 md:h-12 bg-green-600 text-white rounded-sm shadow-xl hover:bg-green-700 transition-transform hover:scale-110">
                    <LMWhatsapp />
                  </Link>
                </div>

                <div className="group relative flex flex-col items-center">
                  <div className="absolute bottom-full mb-2 hidden group-hover:flex flex-col items-center pointer-events-none z-120">
                    <span className="relative z-10 px-2 py-1 text-[10px] text-white whitespace-nowrap bg-black/80 rounded-xs font-oswald uppercase tracking-wider">
                      Call Us
                    </span>
                    <div className="w-2 h-2 -mt-1 rotate-45 bg-black/80"></div>
                  </div>
                  <Link 
                    href="tel:+91-9622958013" 
                    aria-label="Call us"
                    className="flex items-center justify-center w-16 h-10 md:w-20 md:h-12 bg-primary text-white rounded-sm shadow-xl hover:opacity-90 transition-transform hover:scale-110">
                    <LMPhoneHandset />
                  </Link>
                </div>

                <div className="group relative flex flex-col items-center">
                  <div className="absolute bottom-full mb-2 hidden group-hover:flex flex-col items-center pointer-events-none z-120">
                    <span className="relative z-10 px-2 py-1 text-[10px] text-white whitespace-nowrap bg-black/80 rounded-xs font-oswald uppercase tracking-wider">
                      Instagram
                    </span>
                    <div className="w-2 h-2 -mt-1 rotate-45 bg-black/80"></div>
                  </div>
                  <Link 
                    href="https://www.instagram.com/ladakhmototour/" 
                    target='_blank' 
                    rel="noopener noreferrer" 
                    aria-label="Follow us on Instagram"
                    className="flex items-center justify-center w-16 h-10 md:w-20 md:h-12 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 text-white rounded-sm shadow-xl hover:opacity-90 transition-transform hover:scale-110">
                    <LMInstagram />
                  </Link>
                </div>

                <div className="group relative flex flex-col items-center">
                  <div className="absolute bottom-full mb-2 hidden group-hover:flex flex-col items-center pointer-events-none z-120">
                    <span className="relative z-10 px-2 py-1 text-[10px] text-white whitespace-nowrap bg-black/80 rounded-xs font-oswald uppercase tracking-wider">
                      Email
                    </span>
                    <div className="w-2 h-2 -mt-1 rotate-45 bg-black/80"></div>
                  </div>
                  <EmailObfuscator 
                    email="info@ladakhmoto.com" 
                    ariaLabel="Email us"
                    showEmail={false}
                    className="flex items-center justify-center w-16 h-10 md:w-20 md:h-12 bg-slate-500 text-white rounded-sm shadow-xl hover:opacity-90 transition-transform hover:scale-110"
                  >
                    <LMEmail />
                  </EmailObfuscator>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex justify-center items-center gap-4 py-1 bg-gradient-to-t from-black/20 to-transparent">
          {/* First Action */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
                <Button 
                  onClick={() => setSource('bottom-bar')}
                  className="w-27.5 px-4 py-2 bg-primary text-white text-[14px] font-normal tracking-wider rounded-xs font-oswald uppercase cursor-pointer"
                >
                  Book Now
                </Button>
            </SheetTrigger>
            <SheetContent className='bg-card overflow-y-auto'>
                <SheetHeader className='mb-6 relative'>
                    <SheetTitle className="mb-4 text-left font-oswald before:content-[''] before:absolute before:left-0 before:bottom-[7px] before:h-[4px] before:w-[85px] before:bg-accent after:content-[''] after:absolute after:left-0 after:bottom-[8.5px] after:h-[1px] after:w-[132px] after:max-w-[180px] after:bg-primary after:-z-1">
                      INSTANT BOOKING
                    </SheetTitle>
                </SheetHeader>

                <QuickBookingForm docs={props.docs} />
                
                <SheetFooter className='mt-3 flex flex-row justify-between'>
                </SheetFooter>

                <div className="recaptcha-terms text-xs/5 relative -bottom-6">
                  This site is protected by reCAPTCHA and the Google{' '}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener"
                  
                  >
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://policies.google.com/terms"
                    target="_blank"
                    rel="noopener"
                  
                  >
                    Terms of Service
                  </a>{' '}
                  apply.
                </div>
            </SheetContent>
        </Sheet>

          {/* Second Action */}
          <div className="relative">
            <Button 
              onClick={() => setShowEnquiry(!showEnquiry)}
              className="w-27.5 px-4 py-2 bg-accent text-accent-on text-[14px] font-normal tracking-wider hover:text-white rounded-xs font-oswald uppercase transition-colors shadow-md cursor-pointer" 
            >
              Enquiry
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
