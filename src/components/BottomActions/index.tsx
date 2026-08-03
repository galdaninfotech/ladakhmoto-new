'use client'

import React, { useState, useEffect } from 'react'

import { Button } from '@/components/ui/button'
import { useTheme } from '@/providers/Theme'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import LMWhatsapp from '../Icons/LMWhatsapp'
import Link from 'next/link'
import LMPhoneHandset from '../Icons/LMPhoneHandset'
import LMInstagram from '../Icons/LMInstagram'
import LMEmail from '../Icons/LMEmail'
import { QuickBookingForm } from '../QuickBookingForm'
import { AnimatePresence, motion } from 'framer-motion'
import { useBooking } from '@/providers/BookingContext'
import { EmailObfuscator } from '../EmailObfuscator'
import { CalendarRange, MessageSquare, Compass, X } from 'lucide-react'

interface BottomActionsProps {
  docs?: {
    id: number // Required ID for each adventure
    title: string
    dates?:
      | {
          start?: string | null
          end?: string | null
          status?: 'open' | 'closing-soon' | 'closed' | null
          id?: string | null
        }[]
      | null // Array of date objects
    cost?:
      | {
          travelMode?:
            | 'own-bike'
            | 'solo-rider'
            | 'dual-ride'
            | 'seat-in-backup-vehicle'
            | 'suv'
            | null
          vehicleProvided?: 'own-bike' | 'himalayan-411-bs6' | 'isuzu-camper' | 'innova-xylo' | null
          costPerPerson?: number | null
          id?: string | null
        }[]
      | null // Array of cost objects
  }[] // Array of adventure objects
}

export const BottomActions: React.FC<BottomActionsProps> = (props) => {
  const [showEnquiry, setShowEnquiry] = useState(false)
  const { isSheetOpen, setIsSheetOpen, setSource } = useBooking()
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // BottomActions theme is the opposite of the page theme.
  // Since defaultTheme is 'light', default component state is 'dark'.
  const isComponentDark = !mounted || theme === 'light'

  return (
    <>
      <AnimatePresence>
        {showEnquiry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowEnquiry(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-[2px] z-[110] shadow-md"
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-0.5 left-1/2 -translate-x-1/2 z-[120] w-[90%] sm:w-auto max-w-lg">
        <AnimatePresence>
          {showEnquiry && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95, x: '-50%' }}
              animate={{ opacity: 1, y: 0, scale: 1, x: '-50%' }}
              exit={{ opacity: 0, y: 15, scale: 0.95, x: '-50%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              data-theme={isComponentDark ? 'dark' : 'light'}
              className={`absolute bottom-full left-1/2 mb-4 w-72.5 sm:w-90 backdrop-blur-xl rounded-xs p-5 z-[130] transition-all duration-300 ${
                isComponentDark
                  ? 'bg-white/95 border border-slate-200 shadow-xl'
                  : 'bg-slate-950/95 border border-white/40 shadow-2xl'
              }`}
            >
              <button
                onClick={() => setShowEnquiry(false)}
                className={`absolute top-3.5 right-3.5 p-1 rounded-xs transition-colors cursor-pointer ${
                  isComponentDark
                    ? 'text-red-400 hover:text-white hover:bg-white/5'
                    : 'text-slate-400 hover:text-slate-800 hover:bg-slate-100'
                }`}
                aria-label="Close enquiry"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-sm font-oswald uppercase tracking-widest text-accent font-bold mb-1">
                Get Instant Reply
              </div>
              <p
                className={`text-[11px] mb-4 font-sans transition-colors duration-300 ${
                  isComponentDark ? 'text-slate-500' : 'text-slate-400'
                }`}
              >
                Connect with our team on your preferred platform
              </p>

              <div className="grid grid-cols-4 gap-2.5">
                <Link
                  id="whatsapp-button"
                  href="https://api.whatsapp.com/send?phone=919622958013"
                  target="_blank"
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
                  className={`flex flex-col items-center justify-center p-2.5 rounded-xs border transition-all duration-300 group cursor-pointer ${
                    isComponentDark
                      ? 'bg-slate-200 hover:bg-emerald-500/10 border-white/5 hover:border-emerald-500/30'
                      : 'bg-slate-200 hover:bg-emerald-50 border-slate-100 hover:border-emerald-200'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xs flex items-center justify-center mb-1.5 bg-emerald-600/10 text-emerald-500 border border-emerald-600/20 transition-transform duration-300 group-hover:scale-110">
                    <LMWhatsapp className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-[10px] font-oswald tracking-wider uppercase transition-colors duration-300 ${
                      isComponentDark
                        ? 'text-slate-400 group-hover:text-slate-200'
                        : 'text-slate-600 group-hover:text-slate-800'
                    }`}
                  >
                    WhatsApp
                  </span>
                </Link>

                <Link
                  href="tel:+91-9622958013"
                  aria-label="Call us"
                  className={`flex flex-col items-center justify-center p-2.5 rounded-xs border transition-all duration-300 group cursor-pointer ${
                    isComponentDark
                      ? 'bg-white/5 hover:bg-blue-500/10 border-white/5 hover:border-blue-500/30'
                      : 'bg-slate-50 hover:bg-blue-50 border-slate-100 hover:border-blue-200'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xs flex items-center justify-center mb-1.5 bg-blue-600/10 text-blue-500 border border-blue-600/20 transition-transform duration-300 group-hover:scale-110">
                    <LMPhoneHandset className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-[10px] font-oswald tracking-wider uppercase transition-colors duration-300 ${
                      isComponentDark
                        ? 'text-slate-400 group-hover:text-slate-200'
                        : 'text-slate-600 group-hover:text-slate-800'
                    }`}
                  >
                    Call Us
                  </span>
                </Link>

                <Link
                  href="https://www.instagram.com/ladakhmototour/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className={`flex flex-col items-center justify-center p-2.5 rounded-xs border transition-all duration-300 group cursor-pointer ${
                    isComponentDark
                      ? 'bg-white/5 hover:bg-pink-500/10 border-white/5 hover:border-pink-500/30'
                      : 'bg-slate-50 hover:bg-pink-50 border-slate-100 hover:border-pink-200'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xs flex items-center justify-center mb-1.5 bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-600 text-white transition-transform duration-300 group-hover:scale-110">
                    <LMInstagram className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-[10px] font-oswald tracking-wider uppercase transition-colors duration-300 ${
                      isComponentDark
                        ? 'text-slate-400 group-hover:text-slate-200'
                        : 'text-slate-600 group-hover:text-slate-800'
                    }`}
                  >
                    Instagram
                  </span>
                </Link>

                <EmailObfuscator
                  email="info@ladakhmoto.com"
                  ariaLabel="Email us"
                  showEmail={false}
                  className={`flex flex-col items-center justify-center p-2.5 rounded-xs border transition-all duration-300 group cursor-pointer ${
                    isComponentDark
                      ? 'bg-white/5 hover:bg-indigo-500/10 border-white/5 hover:border-indigo-500/30'
                      : 'bg-slate-50 hover:bg-indigo-50 border-slate-100 hover:border-indigo-200'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xs flex items-center justify-center mb-1.5 bg-indigo-600/10 text-indigo-400 border border-indigo-600/20 transition-transform duration-300 group-hover:scale-110">
                    <LMEmail className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-[10px] font-oswald tracking-wider uppercase transition-colors duration-300 ${
                      isComponentDark
                        ? 'text-slate-400 group-hover:text-slate-200'
                        : 'text-slate-600 group-hover:text-slate-800'
                    }`}
                  >
                    Email
                  </span>
                </EmailObfuscator>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div
          data-theme={isComponentDark ? 'dark' : 'light'}
          className={`flex items-center gap-2.5 p-1.5 backdrop-blur-lg rounded-xs transition-all duration-300 ${
            isComponentDark
              ? 'bg-white/90 border border-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.08)]'
              : 'bg-slate-950/90 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          }`}
        >
          <div className="hidden sm:flex items-center gap-2 pl-4 pr-2 select-none">
            <Compass
              className="w-4 h-4 text-accent animate-spin"
              style={{ animationDuration: '8s' }}
            />
            <span
              className={`font-oswald uppercase tracking-widest text-[11.5px] font-semibold transition-colors duration-300 ${
                isComponentDark ? 'text-slate-950' : 'text-white'
              }`}
            >
              Ladakh Moto
            </span>
            <div
              className={`h-4 w-px ml-2 transition-colors duration-300 ${
                isComponentDark ? 'bg-slate-200' : 'bg-white/20'
              }`}
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  onClick={() => setSource('bottom-bar')}
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-5 py-2.5 bg-accent hover:bg-accent/90 text-slate-950 text-xs font-bold font-oswald uppercase tracking-wider rounded-xs transition-all hover:scale-105 active:scale-95 shadow-md shadow-accent/20 cursor-pointer border-none"
                >
                  <CalendarRange className="w-3.5 h-3.5" />
                  <span>Book Now</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                data-theme={isComponentDark ? 'dark' : 'light'}
                className={`overflow-y-auto w-full sm:max-w-md transition-all duration-300 ${
                  isComponentDark
                    ? 'bg-white text-slate-950 border-l border-slate-200'
                    : 'bg-slate-950 text-white border-l border-white/10'
                }`}
              >
                <SheetHeader className="mb-6 relative">
                  <SheetTitle
                    className={`mb-4 text-left font-oswald text-lg before:content-[''] before:absolute before:left-0 before:bottom-[7px] before:h-[4px] before:w-[85px] before:bg-accent after:content-[''] after:absolute after:left-0 after:bottom-[8.5px] after:h-[1px] after:w-[132px] after:max-w-[180px] after:-z-1 transition-colors duration-300 ${
                      isComponentDark
                        ? 'text-slate-950 after:bg-slate-200'
                        : 'text-white after:bg-white/20'
                    }`}
                  >
                    INSTANT BOOKING
                  </SheetTitle>
                </SheetHeader>

                <QuickBookingForm docs={props.docs} />

                <SheetFooter className="mt-3 flex flex-row justify-between" />

                <div
                  className={`recaptcha-terms text-xs/5 relative -bottom-6 transition-colors duration-300 ${
                    isComponentDark ? 'text-slate-500' : 'text-slate-400'
                  }`}
                >
                  This site is protected by reCAPTCHA and the Google{' '}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener"
                    className="text-accent hover:underline"
                  >
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://policies.google.com/terms"
                    target="_blank"
                    rel="noopener"
                    className="text-accent hover:underline"
                  >
                    Terms of Service
                  </a>{' '}
                  apply.
                </div>
              </SheetContent>
            </Sheet>

            <Button
              onClick={() => setShowEnquiry(!showEnquiry)}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-bold font-oswald uppercase tracking-wider rounded-xs transition-all hover:scale-105 active:scale-95 shadow-md cursor-pointer ${
                isComponentDark
                  ? 'bg-slate-100 hover:bg-slate-200 text-slate-950 border border-slate-200/80'
                  : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Enquiry</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
