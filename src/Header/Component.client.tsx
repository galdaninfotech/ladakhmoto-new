'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { cn } from '@/utilities/ui'
import type { Header, LadakhMoto } from '@/payload-types'
import { usePathname, useRouter } from 'next/navigation'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { HeaderTop } from '@/Header/HeaderTop'
import { User, Search, Mail, MapPin, Phone, Award, Compass, ArrowRight, X } from 'lucide-react'
import { SearchBar } from './SearchBar'

import LMFacebook from '@/components/Icons/LMFacebook'
import LMInstagram from '@/components/Icons/LMInstagram'
import LMYoutube from '@/components/Icons/LMYoutube'
import LMWhatsapp from '@/components/Icons/LMWhatsapp'
import LMX from '@/components/Icons/LMX'
import LMPhone from '@/components/Icons/LMPhone'

// --- Simplified SVG Components ---
const MenuIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
)

const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
)

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
)

export type ExtendedResolvedLink = {
  label: string
  url: string
  newTab?: boolean | null
  name: string
  href: string
  submenu?: {
    label: string
    url: string
    newTab?: boolean | null
    name: string
    href: string
    subSubmenu?: {
      label: string
      url: string
      newTab?: boolean | null
      name: string
      href: string
    }[]
  }[]
}

export const HeaderClient: React.FC<{
  data: Header
  ladakhMotoData: LadakhMoto
  preResolvedNavItems?: ExtendedResolvedLink[]
}> = ({ ladakhMotoData, preResolvedNavItems = [] }) => {
  const [menuState, setMenuState] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null)
  const [mobileSearchQuery, setMobileSearchQuery] = useState('')
  const pathname = usePathname()
  const router = useRouter()
  const isHeaderDark = false

  const handleMobileSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (mobileSearchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(mobileSearchQuery.trim())}`)
      setMenuState(false)
      setMobileSearchQuery('')
    }
  }

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 100)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      role="banner"
      className={cn(
        'mkdf-page-header',
        {
          headerMarginNone:
            pathname?.includes('/ultimate-adventures') ||
            pathname?.includes('/bike-tours') ||
            pathname?.includes('/holiday-packages') ||
            pathname?.includes('/destinations') ||
            pathname?.includes('/highlights') ||
            pathname?.includes('/posts'),
          headerMarginHome: pathname === '/' || pathname === '/home',
          headerMarginDefault: !(
            pathname?.includes('/ultimate-adventures') ||
            pathname?.includes('/bike-tours') ||
            pathname?.includes('/holiday-packages') ||
            pathname?.includes('/destinations') ||
            pathname?.includes('/highlights') ||
            pathname?.includes('/posts') ||
            pathname === '/' ||
            pathname === '/home'
          ),
        },
        !isScrolled ? 'bg-background text-foreground border-b border-border/10 shadow-xs' : '',
      )}
    >
      <HeaderTop data={ladakhMotoData} />

      {/* Middle */}
      <div className="hidden md:block w-full bg-secondary/20 dark:bg-secondary/5 py-4 border-b border-border/10 shadow-xxs">
        <div className="container mx-auto px-4 flex flex-row justify-between items-center text-[7.5px] min-[375px]:text-[8.5px] sm:text-[10px] font-bold font-oswald text-muted-foreground uppercase tracking-widest gap-2">
          
          <Link href="/" aria-label="home" className="flex items-center space-x-2">
            {!menuState && (
              <Image
                loading="eager"
                priority
                fetchPriority="high"
                src="/images/logo.webp"
                alt="Ladakh Moto Logo"
                width={100}
                height={53}
                sizes="(max-width: 1024px) 75px, 100px"
                className="w-[75px] h-[40px] lg:w-[100px] lg:h-[53px] md:mr-6 lg:mr-20 xl:mr-30 object-contain transition-all duration-300"
              />
            )}
          </Link>


          <div className="flex-1 text-center">
            <SearchBar />
          </div>
          
          <div
            className={cn(
              'border-l pl-4 flex items-center gap-4 transition-colors duration-300',
              isHeaderDark
                ? 'text-white border-white/20'
                : 'text-foreground border-foreground/20',
            )}
          >
            <ThemeSelector />
            <Link
              href="/admin"
              aria-label="Admin Login"
              className="text-current relative flex items-center justify-center w-9 h-9 transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-accent group cursor-pointer"
            >
              <User className="w-[1.1rem] h-[1.1rem] text-current transition-all duration-300 group-hover:scale-110" />
              <span className="sr-only">Login</span>
            </Link>
            <button
              onClick={() => setMenuState(!menuState)}
              aria-label={menuState ? 'Close Menu' : 'Open Menu'}
              className={cn(
                'relative z-40 block cursor-pointer transition-colors duration-300',
                isHeaderDark ? 'text-white' : 'text-foreground',
              )}
            >
              {menuState ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      

      

      <nav
        role="navigation"
        className={cn(
          'z-9999 transition-all duration-300 w-full',
          isScrolled
            ? 'fixed top-0 left-0 bg-background backdrop-blur-md shadow-[0_1px_20px_rgba(15,23,42,1)] py-4'
            : 'relative container mx-auto px-4 top-0 py-4',
        )}
      >
        <div className={cn(!isScrolled && 'w-full', isScrolled && 'container mx-auto px-4')}>
          <div className="relative flex items-center justify-between gap-6 lg:gap-0 h-13.45">
            <div className="flex w-full justify-between lg:w-auto">
              <Link href="/" aria-label="home" 
                className={cn(
                  'flex items-center space-x-2',
                  isScrolled
                    ? 'block'
                    : 'hidden',
                )}
              >
                {!menuState && (
                  <Image
                    loading="eager"
                    priority
                    fetchPriority="high"
                    src="/images/logo.webp"
                    alt="Ladakh Moto Logo"
                    width={100}
                    height={53}
                    sizes="(max-width: 1024px) 75px, 100px"
                    className="w-[75px] h-[40px] lg:w-[100px] lg:h-[53px] object-contain transition-all duration-300"
                  />
                )}
              </Link>

              <div className="flex items-center gap-4 md:hidden">
                <div
                  className={cn(
                    'flex items-center transition-colors duration-300 gap-4',
                    isHeaderDark ? 'text-white' : 'text-foreground',
                  )}
                >
                  {isScrolled && <ThemeSelector />}
                  <Link
                    href="/admin"
                    aria-label="Admin Login"
                    className="text-current relative flex items-center justify-center w-9 h-9 transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-accent group cursor-pointer"
                  >
                    <User className="w-[1.1rem] h-[1.1rem] text-current transition-all duration-300 group-hover:scale-110" />
                    <span className="sr-only">Login</span>
                  </Link>
                </div>
                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                  className={cn(
                    'relative z-40 block cursor-pointer transition-colors duration-300',
                    isHeaderDark ? 'text-white' : 'text-foreground',
                  )}
                >
                  {menuState ? <CloseIcon /> : <MenuIcon />}
                </button>
              </div>
            </div>

            <nav aria-label="Desktop navigation" className="hidden lg:flex items-center gap-6">
              <ul className="flex gap-2 text-sm">
                {preResolvedNavItems.map((item, index) => (
                  <li key={index} className="relative group">
                    <Link
                      href={item.href}
                      className={cn(
                        'h-[45px] font-oswald uppercase text-[15px] font-bold tracking-wider hover:text-accent pl-3 pr-2 flex items-center gap-1 duration-150',
                        isHeaderDark ? 'text-white' : 'text-foreground',
                      )}
                    >
                      <span>{item.name}</span>
                      {item.submenu && <ChevronDownIcon className="h-3 w-3" />}
                    </Link>

                    {item.submenu && (
                      <div className="absolute top-full left-0 w-64 bg-card border-primary border-t-[3px] rounded-b-xs shadow-lg py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        {item.submenu.map((subItem, subIndex) => (
                          <div key={subIndex} className="relative group/sub">
                            <Link
                              href={subItem.href}
                              className="group block px-4 py-2 text-xs text-foreground hover:text-accent transition-colors capitalize"
                            >
                              {subItem.name}
                              {subItem.subSubmenu && (
                                <ChevronDownIcon className="h-3 w-3 ml-1 inline-block" />
                              )}
                            </Link>
                            {subItem.subSubmenu && (
                              <ul className="absolute left-full top-0 w-48 bg-primary shadow-lg py-2 z-50 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                                {subItem.subSubmenu.map((subSubItem, subSubIndex) => (
                                  <li key={subSubIndex}>
                                    <Link
                                      href={subSubItem.href}
                                      className="block px-4 py-2 text-xs text-primary-foreground hover:text-accent transition-colors capitalize"
                                    >
                                      {subSubItem.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
              <div
                className={cn(
                  'border-l pl-4 items-center gap-4 transition-colors duration-300',
                  isScrolled ? 'flex' : 'hidden',
                  isHeaderDark
                    ? 'text-white border-white/20'
                    : 'text-foreground border-foreground/20',
                )}
              >
                <ThemeSelector />
                <Link
                  href="/admin"
                  aria-label="Admin Login"
                  className="text-current relative flex items-center justify-center w-9 h-9 transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-accent group cursor-pointer"
                >
                  <User className="w-[1.1rem] h-[1.1rem] text-current transition-all duration-300 group-hover:scale-110" />
                  <span className="sr-only">Login</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </nav>





      {/* --- Mobile Menu --- */}
      <div
        className={cn(
          'fixed inset-0 bg-black/60 dark:bg-black/85 backdrop-blur-xs lg:hidden z-40 transition-opacity duration-300',
          menuState ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
        onClick={() => setMenuState(false)}
      />
      
      <div
        className={cn(
          'fixed top-0 left-0 h-full w-[88vw] max-w-105 bg-background lg:hidden z-[9999] flex flex-col shadow-2xl transition-transform duration-300 ease-out border-r border-border/40',
          menuState ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        {/* Mobile Menu Header */}
        <div className="p-4 flex items-center justify-between border-b border-border/40 bg-card">
          <Link href="/" onClick={() => setMenuState(false)} className="block transition-transform hover:scale-102 duration-200">
            <Image
              loading="eager"
              priority
              src="/images/logo.webp"
              alt="Ladakh Moto Logo"
              width="90"
              height="48"
              className="object-contain dark:brightness-105"
            />
          </Link>
          <div className="flex items-center gap-3">
            <ThemeSelector />
            <button
              onClick={() => setMenuState(false)}
              aria-label="Close menu"
              className="p-2 text-foreground/70 hover:text-foreground hover:bg-muted/80 dark:hover:bg-muted/30 rounded-full transition-all duration-200 cursor-pointer"
            >
              <X className="w-5 h-5 transition-transform duration-200 hover:rotate-90" />
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {/* <div className="px-6 pt-5 pb-2">
          <form onSubmit={handleMobileSearch} className="relative w-full">
            <input
              type="text"
              placeholder="Search adventures, packages..."
              value={mobileSearchQuery}
              onChange={(e) => setMobileSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-secondary/50 dark:bg-secondary/15 border border-border/60 dark:border-border/30 rounded-xl text-[11px] font-sans tracking-wide text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-accent focus:border-accent transition-all"
            />
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground stroke-2" />
          </form>
        </div> */}

        {/* Navigation Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          <nav className="space-y-1.5">
            {preResolvedNavItems.map((item, index) => (
              <div key={index} className="border-b border-border/15 last:border-0">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={() => {
                      if (!item.submenu) setMenuState(false)
                      setMobileActiveDropdown(mobileActiveDropdown === item.name ? null : item.name)
                    }}
                    className={cn(
                      'text-[13px] font-oswald uppercase tracking-wider transition-colors w-full text-left font-bold py-1',
                      pathname === item.href ? 'text-accent font-extrabold' : 'text-foreground hover:text-accent',
                    )}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <button
                      onClick={() =>
                        setMobileActiveDropdown(
                          mobileActiveDropdown === item.name ? null : item.name,
                        )
                      }
                      aria-label={
                        mobileActiveDropdown === item.name
                          ? `Collapse ${item.name} submenu`
                          : `Expand ${item.name} submenu`
                      }
                      className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted/80 dark:hover:bg-muted/20 rounded-lg transition-colors cursor-pointer"
                    >
                      <ChevronDownIcon
                        className={cn(
                          'h-4.5 w-4.5 transition-transform duration-300',
                          mobileActiveDropdown === item.name && 'rotate-180 text-accent font-bold',
                        )}
                      />
                    </button>
                  )}
                </div>

                {item.submenu && (
                  <div
                    className={cn(
                      'overflow-hidden bg-muted/40 dark:bg-slate-900/50 border border-border/40 rounded-xl transition-all duration-300 ease-in-out',
                      mobileActiveDropdown === item.name
                        ? 'max-h-[1000px] opacity-100 mb-3 mt-1'
                        : 'max-h-0 opacity-0',
                    )}
                  >
                    <div className="p-4 space-y-2.5">
                      {item.submenu.map((subItem, subIndex) => (
                        <div key={subIndex} className="space-y-2.5">
                          <Link
                            className="block text-[11px] font-sans uppercase tracking-wider font-semibold text-foreground/80 hover:text-accent transition-colors py-1.5 px-3 rounded-md hover:bg-secondary/40"
                            onClick={() => setMenuState(false)}
                            href={subItem.href}
                          >
                            {subItem.name}
                          </Link>
                          {subItem.subSubmenu && (
                            <div className="ml-4 border-l border-border/60 pl-3 py-1 space-y-1.5">
                              {subItem.subSubmenu.map((subSubItem, subSubIndex) => (
                                <Link
                                  className="block text-[11px] font-sans text-muted-foreground hover:text-accent transition-colors capitalize font-medium"
                                  onClick={() => setMenuState(false)}
                                  key={subSubIndex}
                                  href={subSubItem.href}
                                >
                                  {subSubItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Traveler Support Section */}
          <div className="mt-8 pt-8 border-t border-border/40 space-y-5">
            <div className="space-y-3.5">
              <h4 className="text-[11px] font-oswald uppercase tracking-widest text-muted-foreground flex items-center gap-2 px-1">
                <Compass className="w-3.5 h-3.5 text-accent animate-pulse" /> Traveler Support
              </h4>
              
              <div className="bg-card border border-border/65 rounded-2xl p-4.5 space-y-4 shadow-xs">
                {/* Phones */}
                {ladakhMotoData?.phone1 && (
                  <a
                    href={`tel:${ladakhMotoData.phone1.replace(/\s+/g, '')}`}
                    className="flex items-center gap-3 text-foreground/80 hover:text-accent transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary dark:text-teal-400 group-hover:bg-primary group-hover:text-white transition-colors duration-200 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] text-muted-foreground font-semibold uppercase tracking-wider font-sans">Call / WhatsApp</span>
                      <span className="font-sans font-semibold text-[11px] tracking-wide text-foreground">{ladakhMotoData.phone1}</span>
                    </div>
                  </a>
                )}
                
                {ladakhMotoData?.phone2 && (
                  <a
                    href={`tel:${ladakhMotoData.phone2.replace(/\s+/g, '')}`}
                    className="flex items-center gap-3 text-foreground/80 hover:text-accent transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary dark:text-teal-400 group-hover:bg-primary group-hover:text-white transition-colors duration-200 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] text-muted-foreground font-semibold uppercase tracking-wider font-sans">Secondary Contact</span>
                      <span className="font-sans font-semibold text-[11px] tracking-wide text-foreground">{ladakhMotoData.phone2}</span>
                    </div>
                  </a>
                )}

                {/* Email */}
                {ladakhMotoData?.email1 && (
                  <a
                    href={`mailto:${ladakhMotoData.email1}`}
                    className="flex items-center gap-3 text-foreground/80 hover:text-accent transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary dark:text-teal-400 group-hover:bg-primary group-hover:text-white transition-colors duration-200 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] text-muted-foreground font-semibold uppercase tracking-wider font-sans">Email Inquiry</span>
                      <span className="font-sans font-semibold text-[11px] tracking-wide text-foreground break-all">{ladakhMotoData.email1}</span>
                    </div>
                  </a>
                )}

                {/* Address */}
                {ladakhMotoData?.addressline1 && (
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      `${ladakhMotoData.addressline1} ${ladakhMotoData.addressline2 || ''} Ladakh Moto Leh`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-foreground/80 hover:text-accent transition-colors group"
                  >
                    <div className="w-8 h-8 mt-0.5 rounded-lg bg-primary/10 flex items-center justify-center text-primary dark:text-teal-400 group-hover:bg-primary group-hover:text-white transition-colors duration-200 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] text-muted-foreground font-semibold uppercase tracking-wider font-sans">Our Office</span>
                      <span className="font-sans font-medium text-[11px] leading-relaxed text-foreground/70">
                        {ladakhMotoData.addressline1}
                        {ladakhMotoData.addressline2 && `, ${ladakhMotoData.addressline2}`}
                      </span>
                      <span className="text-[10px] text-accent font-bold mt-1 inline-flex items-center gap-1 group-hover:underline">
                        Get Directions <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </a>
                )}
              </div>
            </div>

            {/* Trust & Registrations */}
            {(ladakhMotoData?.regNo || ladakhMotoData?.gstNo) && (
              <div className="bg-secondary/40 border border-border/40 rounded-xl p-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary dark:text-teal-400 shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div className="text-[10px] font-sans font-semibold text-muted-foreground leading-normal">
                  {ladakhMotoData.regNo && (
                    <div>Govt Regd No: <span className="text-foreground/80">{ladakhMotoData.regNo}</span></div>
                  )}
                  {ladakhMotoData.gstNo && (
                    <div className="mt-0.5">GSTIN: <span className="text-foreground/80">{ladakhMotoData.gstNo}</span></div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Footer */}
        <div className="p-6 bg-muted/40 dark:bg-[#070d1a] border-t border-border/40 flex flex-col items-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold mb-4 font-sans">
            Connect With Us
          </p>
          <div className="flex justify-center items-center space-x-3.5 mb-6">
            {ladakhMotoData?.facebook && (
              <a
                href={`${ladakhMotoData.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="w-9 h-9 rounded-full bg-secondary border border-border/60 flex items-center justify-center text-foreground hover:bg-[#1877f2] hover:text-white hover:border-[#1877f2] transition-all duration-300"
              >
                <LMFacebook className="w-4.5 h-4.5" />
              </a>
            )}
            {ladakhMotoData?.twitter && (
              <a
                href={`${ladakhMotoData.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on X"
                className="w-9 h-9 rounded-full bg-secondary border border-border/60 flex items-center justify-center text-foreground hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white transition-all duration-300"
              >
                <LMX className="w-4 h-4" />
              </a>
            )}
            {ladakhMotoData?.instagram && (
              <a
                href={`${ladakhMotoData.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="w-9 h-9 rounded-full bg-secondary border border-border/60 flex items-center justify-center text-foreground hover:bg-linear-to-tr hover:from-[#f9cb28] hover:via-[#e20337] hover:to-[#7f20c4] hover:text-white hover:border-transparent transition-all duration-300"
              >
                <LMInstagram className="w-4.5 h-4.5" />
              </a>
            )}
            {ladakhMotoData?.youtube && (
              <a
                href={`${ladakhMotoData.youtube}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe on YouTube"
                className="w-9 h-9 rounded-full bg-secondary border border-border/60 flex items-center justify-center text-foreground hover:bg-[#ff0000] hover:text-white hover:border-[#ff0000] transition-all duration-300"
              >
                <LMYoutube className="w-4.5 h-4.5" />
              </a>
            )}
            {ladakhMotoData?.whatsapp && (
              <a
                href={`${ladakhMotoData.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="w-9 h-9 rounded-full bg-secondary border border-border/60 flex items-center justify-center text-foreground hover:bg-[#25d366] hover:text-white hover:border-[#25d366] transition-all duration-300"
              >
                <LMWhatsapp className="w-4.5 h-4.5" />
              </a>
            )}
          </div>

          <div className="w-full">
            <a
              href={`tel:${ladakhMotoData?.phone1 || '+91-9622958013'}`}
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary text-white rounded-xl font-oswald uppercase tracking-widest text-xs hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-primary/15 font-bold cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 fill-current" /> Call Us Now
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
