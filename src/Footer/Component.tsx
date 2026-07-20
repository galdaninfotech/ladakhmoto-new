import React from 'react'

import type { Footer } from '@/payload-types'
import type { LadakhMoto } from '@/payload-types'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import Image from 'next/image'
import LMFacebook from '@/components/Icons/LMFacebook'
import LMX from '@/components/Icons/LMX'
import LMInstagram from '@/components/Icons/LMInstagram'
import LMYoutube from '@/components/Icons/LMYoutube'
import LMChevronRight from '@/components/Icons/LMChevronRight'
import LMPhone from '@/components/Icons/LMPhone'
import LMEmail from '@/components/Icons/LMEmail'
import { EmailObfuscator } from '@/components/EmailObfuscator'
import { LMDoubleLine } from '@/components/Icons/LMDoubleLine'
import { ScrollToTop } from '@/components/ScrollToTop'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()
  const ladakhMotoData: LadakhMoto = await getCachedGlobal('ladakhMoto', 1)()

  // console.log(footerData)

  return (
    <footer role="contentinfo" className="footer">
      <div className="absolute top-[-2px] left-0 w-full h-[60px] z-[2] footer-top-mask" />
      
      {/* Upper Footer Area */}
      <div className="container mx-auto px-4 py-24">
        <div className="w-full lg:max-w-screen-2xl grid grid-cols-4 md:grid-cols-9 lg:grid-cols-12 gap-x-2 gap-y-16 md:gap-x-3 md:gap-y-20 lg:gap-x-4 lg:gap-y-24">
          
          <div className="col-span-4 md:col-span-3 lg:col-span-2">
            <nav aria-label="Adventure rides" className="text-white/80 text-xs w-full text-center md:text-left flex flex-col items-center md:items-start">
              <h2 className="mb-6 font-oswald uppercase text-white tracking-[1px] text-[1.2rem] font-normal leading-[1.5em] relative left-2.5 before:content-[''] before:bg-accent before:w-[5px] before:h-[18px] before:absolute before:bottom-[7px] before:-left-2.5">
                About us
              </h2>
              <ul className="list flex flex-col justify-center items-center md:items-start gap-3">
                <li className="flex items-center">
                  <div className="relative group w-fit">
                    <LMDoubleLine className="absolute left-0 top-1/2 -translate-y-1/2 text-accent opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 group-hover:translate-x-0" />
                    <CMSLink
                      className="text-xs text-white/70 hover:text-accent transition-all duration-500 group-hover:pl-6 capitalize py-1 block"
                      label="Introduction"
                      url="/about"
                    />
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="relative group w-fit">
                    <LMDoubleLine className="absolute left-0 top-1/2 -translate-y-1/2 text-accent opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 group-hover:translate-x-0" />
                    <CMSLink
                      className="text-xs text-white/70 hover:text-accent transition-all duration-500 group-hover:pl-6 capitalize py-1 block"
                      label="How we work"
                      url="/how-we-work"
                    />
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="relative group w-fit">
                    <LMDoubleLine className="absolute left-0 top-1/2 -translate-y-1/2 text-accent opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 group-hover:translate-x-0" />
                    <CMSLink
                      className="text-xs text-white/70 hover:text-accent transition-all duration-500 group-hover:pl-6 capitalize py-1 block"
                      label="Responsible Travel"
                      url="/responsible-travel"
                    />
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="relative group w-fit">
                    <LMDoubleLine className="absolute left-0 top-1/2 -translate-y-1/2 text-accent opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 group-hover:translate-x-0" />
                    <CMSLink
                      className="text-xs text-white/70 hover:text-accent transition-all duration-500 group-hover:pl-6 capitalize py-1 block"
                      label="Charitable Initiatives"
                      url="/charitable-initiatives"
                    />
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="relative group w-fit">
                    <LMDoubleLine className="absolute left-0 top-1/2 -translate-y-1/2 text-accent opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 group-hover:translate-x-0" />
                    <CMSLink
                      className="text-xs text-white/70 hover:text-accent transition-all duration-500 group-hover:pl-6 capitalize py-1 block"
                      label="Leadership Team"
                      url="/leadership-team"
                    />
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="relative group w-fit">
                    <LMDoubleLine className="absolute left-0 top-1/2 -translate-y-1/2 text-accent opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 group-hover:translate-x-0" />
                    <CMSLink
                      className="text-xs text-white/70 hover:text-accent transition-all duration-500 group-hover:pl-6 capitalize py-1 block"
                      label="Our Core Values"
                      url="/our-core-values"
                    />
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="relative group w-fit">
                    <LMDoubleLine className="absolute left-0 top-1/2 -translate-y-1/2 text-accent opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 group-hover:translate-x-0" />
                    <CMSLink
                      className="text-xs text-white/70 hover:text-accent transition-all duration-500 group-hover:pl-6 capitalize py-1 block"
                      label="Guides & Staffs"
                      url="/guides-and-staffs"
                    />
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="relative group w-fit">
                    <LMDoubleLine className="absolute left-0 top-1/2 -translate-y-1/2 text-accent opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 group-hover:translate-x-0" />
                    <CMSLink
                      className="text-xs text-white/70 hover:text-accent transition-all duration-500 group-hover:pl-6 capitalize py-1 block"
                      label="Careers At Ladakh Moto"
                      url="/careers-at-ladakh-moto"
                    />
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="relative group w-fit">
                    <LMDoubleLine className="absolute left-0 top-1/2 -translate-y-1/2 text-accent opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 group-hover:translate-x-0" />
                    <CMSLink
                      className="text-xs text-white/70 hover:text-accent transition-all duration-500 group-hover:pl-6 capitalize py-1 block"
                      label="Become Business Associate"
                      url="/business-associate"
                    />
                  </div>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-span-4 md:col-span-3 lg:col-span-2">
            <nav aria-label="Quick links" className="text-white/80 text-xs w-full text-center md:text-left flex flex-col items-center md:items-start">
              {/* <h2 className="text-lg font-oswald uppercase text-white mb-6">Quick Links</h2> */}
              <h2 className="mb-6 font-oswald uppercase text-white tracking-[1px] text-[1.2rem] font-normal leading-[1.5em] relative left-2.5 before:content-[''] before:bg-accent before:w-[5px] before:h-[18px] before:absolute before:bottom-[7px] before:-left-2.5">
                Quick Links
              </h2>
              <ul className="list flex flex-col justify-center items-center md:items-start gap-4">
                {footerData.quickLinks?.map((linkItem, index) => {
                  const url = linkItem.link?.url
                  return (
                    <li key={index} className="flex items-center">
                      <div className="relative group w-fit">
                        <LMDoubleLine className="absolute left-0 top-1/2 -translate-y-1/2 text-accent opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 group-hover:translate-x-0" />
                        <CMSLink
                          className="text-xs text-white/70 hover:text-accent transition-all duration-500 group-hover:pl-6 capitalize py-1 block"
                          {...linkItem.link}
                          url={url}
                        />
                      </div>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>

          <div className="col-span-4 md:col-span-3 lg:col-span-2">
            <nav aria-label="Adventure rides" className="text-white/80 text-xs w-full text-center md:text-left flex flex-col items-center md:items-start">
              {/* <h2 className="text-lg font-oswald uppercase text-white mb-6">Adventure Rides</h2> */}
              <h2 className="mb-6 font-oswald uppercase text-white tracking-[1px] text-[1.2rem] font-normal leading-[1.5em] relative left-2.5 before:content-[''] before:bg-accent before:w-[5px] before:h-[18px] before:absolute before:bottom-[7px] before:-left-2.5">
                Adventure Rides
              </h2>
              <ul className="list flex flex-col justify-center items-center md:items-start gap-4">
                {footerData.adventureRides?.map((linkItem, index) => {
                  const url = linkItem.link?.url
                  return (
                    <li key={index} className="flex items-center">
                      <div className="relative group w-fit">
                        <LMDoubleLine className="absolute left-0 top-1/2 -translate-y-1/2 text-accent opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 group-hover:translate-x-0" />
                        <CMSLink
                          className="text-xs text-white/70 hover:text-accent transition-all duration-500 group-hover:pl-6 capitalize py-1 block"
                          {...linkItem.link}
                          url={url}
                        />
                      </div>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>

          <div className="col-span-4 md:col-span-3 lg:col-span-2 hidden md:block">
            <nav aria-label="Destinations" className="text-white/80 text-xs w-full text-center md:text-left flex flex-col items-center md:items-start">
              {/* <h2 className="text-lg font-oswald uppercase text-white mb-6">Destinations</h2> */}
               <h2 className="mb-6 font-oswald uppercase text-white tracking-[1px] text-[1.2rem] font-normal leading-[1.5em] relative left-2.5 before:content-[''] before:bg-accent before:w-[5px] before:h-[18px] before:absolute before:bottom-[7px] before:-left-2.5">
                Destinations
              </h2>
              <ul className="list flex flex-col justify-center items-center md:items-start gap-4">
                {footerData.destinations?.map((linkItem, index) => {
                  const url = linkItem.link?.url
                  return (
                    <li key={index} className="flex items-center">
                      <div className="relative group w-fit">
                        <LMDoubleLine className="absolute left-0 top-1/2 -translate-y-1/2 text-accent opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 group-hover:translate-x-0" />
                        <CMSLink
                          className="text-xs text-white/70 hover:text-accent transition-all duration-500 group-hover:pl-6 capitalize py-1 block"
                          {...linkItem.link}
                          url={url}
                        />
                      </div>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>

          <div className="col-span-4 md:col-span-3 lg:col-span-2 hidden md:block">
            <nav aria-label="Highlights" className="text-white/80 text-xs w-full text-center md:text-left flex flex-col items-center md:items-start">
              <h2 className="mb-6 font-oswald uppercase text-white tracking-[1px] text-[1.2rem] font-normal leading-[1.5em] relative left-2.5 before:content-[''] before:bg-accent before:w-[5px] before:h-[18px] before:absolute before:bottom-[7px] before:-left-2.5">
                Highlights
              </h2>
              <ul className="list flex flex-col justify-center items-center md:items-start gap-4">
                {footerData.highlights?.map((linkItem, index) => {
                  const url = linkItem.link?.url
                  return (
                    <li key={index} className="flex items-center">
                      <div className="relative group w-fit">
                        <LMDoubleLine className="absolute left-0 top-1/2 -translate-y-1/2 text-accent opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 group-hover:translate-x-0" />
                        <CMSLink
                          className="text-xs text-white/70 hover:text-accent transition-all duration-500 group-hover:pl-6 capitalize py-1 block"
                          {...linkItem.link}
                          url={url}
                        />
                      </div>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>

          <div className="col-span-4 md:col-span-2 lg:col-span-2">
            <nav aria-label="Adventure rides" className="text-white/80 text-xs w-full text-center md:text-left flex flex-col items-center md:items-start">
              {/* <h2 className="text-lg font-oswald uppercase text-white mb-6">Other Services</h2> */}
              <h2 className="mb-6 font-oswald uppercase text-white tracking-[1px] text-[1.2rem] font-normal leading-[1.5em] relative left-2.5 before:content-[''] before:bg-accent before:w-[5px] before:h-[18px] before:absolute before:bottom-[7px] before:-left-2.5">
                Other Services
              </h2>
              <ul className="list flex flex-col justify-center items-center md:items-start gap-3">
                <li className="flex items-center">
                  <div className="relative group w-fit">
                    <LMDoubleLine className="absolute left-0 top-1/2 -translate-y-1/2 text-accent opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 group-hover:translate-x-0" />
                    <CMSLink
                      className="text-xs text-white/70 hover:text-accent transition-all duration-500 group-hover:pl-6 capitalize py-1 block"
                      label="Bike Rental"
                      url="/bike-rental"
                    />
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="relative group w-fit">
                    <LMDoubleLine className="absolute left-0 top-1/2 -translate-y-1/2 text-accent opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 group-hover:translate-x-0" />
                    <CMSLink
                      className="text-xs text-white/70 hover:text-accent transition-all duration-500 group-hover:pl-6 capitalize py-1 block"
                      label="Car Rental"
                      url="/car-rental"
                    />
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="relative group w-fit">
                    <LMDoubleLine className="absolute left-0 top-1/2 -translate-y-1/2 text-accent opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 group-hover:translate-x-0" />
                    <CMSLink
                      className="text-xs text-white/70 hover:text-accent transition-all duration-500 group-hover:pl-6 capitalize py-1 block"
                      label="Business Travel"
                      url="/business-travel"
                    />
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="relative group w-fit">
                    <LMDoubleLine className="absolute left-0 top-1/2 -translate-y-1/2 text-accent opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 group-hover:translate-x-0" />
                    <CMSLink
                      className="text-xs text-white/70 hover:text-accent transition-all duration-500 group-hover:pl-6 capitalize py-1 block"
                      label="Corporate Travel"
                      url="/corporate-travel"
                    />
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="relative group w-fit">
                    <LMDoubleLine className="absolute left-0 top-1/2 -translate-y-1/2 text-accent opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 group-hover:translate-x-0" />
                    <CMSLink
                      className="text-xs text-white/70 hover:text-accent transition-all duration-500 group-hover:pl-6 capitalize py-1 block"
                      label="Hotel Booking"
                      url="/hotel-booking"
                    />
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="relative group w-fit">
                    <LMDoubleLine className="absolute left-0 top-1/2 -translate-y-1/2 text-accent opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 group-hover:translate-x-0" />
                    <CMSLink
                      className="text-xs text-white/70 hover:text-accent transition-all duration-500 group-hover:pl-6 capitalize py-1 block"
                      label="Holiday Packages"
                      url="/holiday-packages"
                    />
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="relative group w-fit">
                    <LMDoubleLine className="absolute left-0 top-1/2 -translate-y-1/2 text-accent opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 group-hover:translate-x-0" />
                    <CMSLink
                      className="text-xs text-white/70 hover:text-accent transition-all duration-500 group-hover:pl-6 capitalize py-1 block"
                      label="Premium Adventures"
                      url="/ultimate-adventures"
                    />
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="relative group w-fit">
                    <LMDoubleLine className="absolute left-0 top-1/2 -translate-y-1/2 text-accent opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 group-hover:translate-x-0" />
                    <CMSLink
                      className="text-xs text-white/70 hover:text-accent transition-all duration-500 group-hover:pl-6 capitalize py-1 block"
                      label="International Packages"
                      url="/international-packages"
                    />
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="relative group w-fit">
                    <LMDoubleLine className="absolute left-0 top-1/2 -translate-y-1/2 text-accent opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 group-hover:translate-x-0" />
                    <CMSLink
                      className="text-xs text-white/70 hover:text-accent transition-all duration-500 group-hover:pl-6 capitalize py-1 block"
                      label="Airport Cabs"
                      url="/airport-cabs"
                    />
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <p className='text-sm text-white/40 col-span-4 sm:col-span-8 lg:col-span-12 pt-12 pb-2'>
          Ladakh Moto is a local company located in the center of Leh, Ladakh and a trusted choice for Leh Ladakh bike tours and adventure travel in the region. As local travel experts, we provide authentic and seamless travel experiences with full accountability and deep knowledge of Ladakh. Please read more to know why to choose Ladakh Moto?
        </p>

        <p className='text-sm text-white/40 col-span-4 sm:col-span-8 lg:col-span-12 pt-6 pb-2'>
          Being a direct provider ensures personalized service, immediate support, and careful attention to detail so your entire journey runs smoothly. Whether you're planning one of our bike tours across Ladakh, need a road captain, or require mechanical support, our experienced local team is here to help.
        </p>

        <p className='text-sm text-white/40 col-span-4 sm:col-span-8 lg:col-span-12 pt-6 pb-14'>
          Why choose Ladakh Moto? Because when you travel with us, you not only experience an unforgettable adventure through Leh and Ladakh trip, you also support a local enterprise committed to responsible and sustainable tourism.
        </p>
      </div>



      {/* Bottom Section */}
      <div className="footer px-4">
        <div className="container mx-auto">
          <div className="footer-bottom-section px-4 w-full lg:max-w-screen-2xl grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-x-2 md:gap-x-3 lg:gap-x-4">
            
            {/* TOP SECTION: Two-Column Multi-Row Layout */}
            <div className="col-span-4 sm:col-span-8 lg:col-span-12 border-t border-white/5 py-10 flex flex-col lg:flex-row justify-between gap-10">
              
              

              {/* Column 1: Nav & User Actions */}
              <div className="flex flex-col items-start gap-3 mt-1">

                {/* Row 1: Secondary Navigation */}
                <nav className="flex flex-wrap items-center gap-4 sm:gap-6 text-[13px] font-medium text-white/90 mt-6">
                  <Link href="#" className="text-white/50 hover:text-accent uppercase text-[10px] transition-colors">Dashboard</Link>
                  <span className="hidden sm:block h-4 w-[1px] bg-white/20 mx-1" />
                  <Link href="#" className="text-white/50 hover:text-accent uppercase text-[10px] transition-colors">Profile</Link>
                  <span className="hidden sm:block h-4 w-[1px] bg-white/20 mx-1" />
                  <Link href="#" className="text-white/50 hover:text-accent uppercase text-[10px] transition-colors">Account</Link>
                  <span className="hidden sm:block h-4 w-[1px] bg-white/20 mx-1" />
                  <Link href="#" className="text-white font-bold hover:text-white transition-colors">Sign in</Link>
                </nav>

                {/* Row 2: Follow Us & Download App Buttons */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-end gap-6 sm:gap-10">

                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-[11px] font-black text-white uppercase tracking-[0.1em] whitespace-nowrap">Follow Us</span>
                    <div className="flex items-center gap-4 text-white">
                      <Link href={`${ladakhMotoData?.facebook}`} className="hover:opacity-70 transition-opacity" aria-label="Follow us on Facebook" title="Follow us on Facebook"><LMFacebook /></Link>
                      <Link href={`${ladakhMotoData?.twitter}`} className="hover:opacity-70 transition-opacity" aria-label="Follow us on Twitter" title="Follow us on Twitter"><LMX /></Link>
                      <Link href={`${ladakhMotoData?.instagram}`} className="hover:opacity-70 transition-opacity" aria-label="Follow us on Instagram" title="Follow us on Instagram"><LMInstagram /></Link>
                      <Link href={`${ladakhMotoData?.youtube}`} className="hover:opacity-70 transition-opacity" aria-label="Follow us on Youtube" title="Follow us on Youtube"><LMYoutube /></Link>
                    </div>
                  </div>

                  <span className="hidden md:block h-5 w-[1px] bg-white/10" />

                  <div className="flex items-center gap-4">
                    <span className="text-[11px] font-black text-white uppercase tracking-[0.1em] whitespace-nowrap">Download App</span>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 px-2.5 py-1 border border-white/10 rounded-[4px] bg-white/5 cursor-not-allowed grayscale">
                        <div className="w-4 h-4 bg-white/20 rounded-full" />
                        <div className="flex flex-col leading-tight">
                          <span className="text-[6px] uppercase font-bold text-white/40">Download on the</span>
                          <span className="text-[10px] font-extrabold text-white">App Store</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-2.5 py-1 border border-white/10 rounded-[4px] bg-white/5 cursor-not-allowed grayscale">
                        <div className="w-4 h-4 bg-white/20 rounded-sm" />
                        <div className="flex flex-col leading-tight">
                          <span className="text-[6px] uppercase font-bold text-white/40">Get it on</span>
                          <span className="text-[10px] font-extrabold text-white">Google Play</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-end gap-6 sm:gap-10 mt-4 text-right">
                  <span className="text-[11px] font-black text-white uppercase tracking-[0.1em] whitespace-nowrap">Payment Methods</span>
                  <Image src="/images/payment-methods/payments.png" alt="Payment" width={343} height={45} className="object-contain justify-self-end" />
                </div>

              </div>

              {/* Column 2: Business Identity */}
              <div className="flex flex-col gap-6 items-end">
                {/* Row 1: Logo */}
                <Link href="/" className="inline-block opacity-90 hover:opacity-100 transition-opacity">
                  <Image
                    src="/images/logo.webp"
                    alt="Ladakh Moto Logo"
                    width={100}
                    height={53}
                    className="object-contain"
                  />
                </Link>
                
                {/* Row 2: Reg Info */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-[11px] text-white leading-none">
                    Registration No: 6087-B-LEH
                  </span>
                  <span className="text-[11px] text-accent leading-none">
                    GST TIN : 38BUPPG9731E2Z8
                  </span>
                </div>

                <div className="text-white/80 text-xs">
                  <address className="not-italic mb-8 leading-relaxed text-white/70 text-right">
                  {ladakhMotoData.addressline1}<br />
                  {ladakhMotoData.addressline2}
                  </address>
                  <ul className="list flex justify-start gap-4">
                    <li className="flex items-center group">
                        <EmailObfuscator
                        email="info@ladakhmoto.com"
                        className="email email-link transition-colors py-1 text-white/70 hover:text-accent flex items-center gap-x-2"
                        >
                        <div className="text-accent">
                            <LMEmail />
                        </div>
                        </EmailObfuscator>
                    </li>
                    <li className="flex items-center group">
                        <div className="text-accent">
                        <LMPhone />
                        </div>
                        <Link
                        aria-label="Call us"
                        title="Phone Number"
                        href="tel:+91-9622958013"
                        className="phone ml-2 transition-colors py-1 text-white/70 hover:text-accent"
                        >
                        +91-9622958013
                        </Link>
                    </li>
                  </ul>
              </div>


              </div>
            </div>


            {/* TIER 3: LEGAL LINKS */}
            <div className="col-span-4 sm:col-span-8 lg:col-span-12 border-t border-white/5 pt-6 pb-2">
              <nav className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] font-medium text-white/50">
                <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Use</Link>
                <span className="hidden sm:block h-4 w-[1px] bg-white/20 mx-1" />
                <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <span className="hidden sm:block h-4 w-[1px] bg-white/20 mx-1" />
                <Link href="/manage-cookies" className="hover:text-white transition-colors">Manage Cookies</Link>
                <span className="hidden sm:block h-4 w-[1px] bg-white/20 mx-1" />
                <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimers</Link>
                <span className="hidden sm:block h-4 w-[1px] bg-white/20 mx-1" />
                <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
                <span className="hidden sm:block h-4 w-[1px] bg-white/20 mx-1" />
                <Link href="/newsletters" className="hover:text-white transition-colors">Newsletters</Link>
              </nav>
            </div>

            {/* TIER 4: COPYRIGHT */}
            <div className="col-span-4 sm:col-span-8 lg:col-span-6 pt-4 pb-8 flex flex-col gap-1 text-[10px] text-white/30 tracking-wide font-medium">
              <p>© {new Date().getFullYear()} Ladakh Moto™. A Premier Adventure Company</p>
              <p>All Rights Reserved</p>
            </div>

            <div className="col-span-4 sm:col-span-8 lg:col-span-6 pt-4 pb-18 md:pb-8 flex flex-col gap-1 text-[10px] text-white/30 tracking-wide font-medium text-right">
              Developed by 
              <a href="tel:+91-9596690135" className="hover:text-white underline decoration-white/10 underline-offset-4">Galdan Infotech</a>
            </div>

          </div>
        </div>
      </div>
      <ScrollToTop />
    </footer>
  )
}

export default Footer
