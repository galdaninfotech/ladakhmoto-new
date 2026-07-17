'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { cn } from '@/utilities/ui'
import type { Header, LadakhMoto } from '@/payload-types'
import { usePathname } from 'next/navigation'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { HeaderTop } from '@/Header/HeaderTop'
import { User } from 'lucide-react'

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
  const pathname = usePathname()
  const isHeaderDark =
    !isScrolled &&
    (pathname === '/' ||
      pathname === '/home' ||
      pathname?.includes('/ultimate-adventures') ||
      pathname?.includes('/bike-tours') ||
      pathname?.includes('/holiday-packages') ||
      pathname?.includes('/destinations') ||
      pathname?.includes('/posts'))

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
            pathname?.includes('/posts'),
          headerMarginHome: pathname === '/' || pathname === '/home',
          headerMarginDefault: !(
            pathname?.includes('/ultimate-adventures') ||
            pathname?.includes('/bike-tours') ||
            pathname?.includes('/holiday-packages') ||
            pathname?.includes('/destinations') ||
            pathname?.includes('/posts') ||
            pathname === '/' ||
            pathname === '/home'
          ),
        },
        (pathname === '/' || pathname === '/home') && !isScrolled ? 'bg-white text-white' : '',
      )}
    >
      <HeaderTop data={ladakhMotoData} />

      

      <nav
        role="navigation"
        className={cn(
          'z-9999 transition-all duration-300 w-full',
          isScrolled
            ? 'fixed top-0 left-0 bg-background backdrop-blur-md shadow-[0_10px_40px_rgba(15,23,42,1)] py-4'
            : 'relative container mx-auto px-4 top-0 py-4',
        )}
      >
        <div className={cn(!isScrolled && 'w-full', isScrolled && 'container mx-auto px-4')}>
          <div className="relative flex items-center justify-between gap-6 lg:gap-0 h-13.45">
            <div className="flex w-full justify-between lg:w-auto">
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
                    className="w-[75px] h-[40px] lg:w-[100px] lg:h-[53px] object-contain transition-all duration-300"
                  />
                )}
              </Link>

              <div className="flex items-center gap-4 lg:hidden">
                <div
                  className={cn(
                    'flex items-center transition-colors duration-300 gap-4',
                    isHeaderDark ? 'text-white' : 'text-foreground',
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
                        isHeaderDark ? 'text-foreground' : 'text-foreground',
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
                  'border-l pl-4 flex items-center gap-4 transition-colors duration-300',
                  isHeaderDark
                    ? 'text-foreground border-white/20'
                    : 'border-foreground/20 text-white',
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
          'fixed inset-0 bg-black/60 backdrop-blur-md lg:hidden z-40 transition-opacity duration-300',
          menuState ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
        onClick={() => setMenuState(false)}
      />
      
      <div
        className={cn(
          'fixed top-0 left-0 h-full w-[85vw] max-w-[400px] bg-background lg:hidden z-[9999] flex flex-col shadow-2xl transition-transform duration-300 ease-out',
          menuState ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className="p-6 flex items-center justify-between border-b border-border bg-primary">
          <Link href="/" onClick={() => setMenuState(false)} className="block">
            <Image
              loading="eager"
              priority
              src="/images/logo.webp"
              alt="Ladakh Moto Logo"
              width="85"
              height="45"
              className="brightness-0 invert object-contain"
            />
          </Link>
          <button
            onClick={() => setMenuState(false)}
            aria-label="Close menu"
            className="p-2 text-accent hover:bg-primary/80 transition-colors"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-8">
          <nav className="space-y-1">
            {preResolvedNavItems.map((item, index) => (
              <div key={index} className="border-b border-border/50 last:border-0">
                <div className="flex items-center justify-between py-2">
                  <Link
                    href={item.href}
                    onClick={() => {
                      if (!item.submenu) setMenuState(false)
                      setMobileActiveDropdown(mobileActiveDropdown === item.name ? null : item.name)
                    }}
                    className={cn(
                      'text-sm font-oswald uppercase tracking-wider transition-colors w-full text-left',
                      pathname === item.href ? 'text-accent' : 'text-foreground hover:text-accent',
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
                      className="p-2 text-muted-foreground"
                    >
                      <ChevronDownIcon
                        className={cn(
                          'h-5 w-5 transition-transform duration-300',
                          mobileActiveDropdown === item.name && 'rotate-180 text-primary',
                        )}
                      />
                    </button>
                  )}
                </div>

                {item.submenu && (
                  <div
                    className={cn(
                      'overflow-hidden bg-muted rounded-lg transition-all duration-300 ease-in-out',
                      mobileActiveDropdown === item.name
                        ? 'max-h-[1000px] opacity-100 mb-4'
                        : 'max-h-0 opacity-0',
                    )}
                  >
                    <div className="p-4 space-y-6">
                      {item.submenu.map((subItem, subIndex) => (
                        <div key={subIndex} className="space-y-3">
                          <Link
                            className="block text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
                            onClick={() => setMenuState(false)}
                            href={subItem.href}
                          >
                            {subItem.name}
                          </Link>
                          {subItem.subSubmenu && (
                            <div className="ml-4 space-y-3 border-l-2 border-primary/20 pl-4">
                              {subItem.subSubmenu.map((subSubItem, subSubIndex) => (
                                <Link
                                  className="block text-sm text-muted-foreground hover:text-accent transition-colors"
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
        </div>

        <div className="p-8 bg-muted border-t border-border">
          <p className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold mb-6 text-center">
            Follow Our Adventures
          </p>
          <div className="flex justify-center items-center space-x-4 mb-8">
            <a
              href={`${ladakhMotoData?.facebook}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
              className="p-2 text-muted-foreground hover:text-blue-600 transition-colors"
            >
              <LMFacebook className="w-5 h-5" />
            </a>
            <a
              href={`${ladakhMotoData?.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on X (Twitter)"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <LMX className="w-5 h-5" />
            </a>
            <a
              href={`${ladakhMotoData?.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="p-2 text-muted-foreground hover:text-pink-600 transition-colors"
            >
              <LMInstagram className="w-5 h-5" />
            </a>
            <a
              href={`${ladakhMotoData?.youtube}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Subscribe to our YouTube channel"
              className="p-2 text-muted-foreground hover:text-red-600 transition-colors"
            >
              <LMYoutube className="w-5 h-5" />
            </a>
            <a
              href={`${ladakhMotoData?.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
              className="p-2 text-muted-foreground hover:text-green-600 transition-colors"
            >
              <LMWhatsapp className="w-5 h-5" />
            </a>
          </div>

          <div className="space-y-4">
            <a
              href={`tel:${ladakhMotoData?.phone1 || '+91-9622958013'}`}
              className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-white rounded-lg font-oswald uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              <LMPhone className="w-3 h-3 text-accent" /> Call Us Now
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
