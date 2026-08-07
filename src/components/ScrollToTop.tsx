'use client'

import React, { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed z-130 px-3.5 py-2 rounded-full border bg-slate-950/80 backdrop-blur-md text-accent border-accent/30 hover:border-accent hover:bg-accent hover:text-slate-950 transition-all duration-300 shadow-lg cursor-pointer flex items-center justify-center gap-1 font-oswald text-[10px] font-bold uppercase tracking-widest ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      } bottom-20 right-4 sm:bottom-6 sm:right-6`}
    >
      <span>Back to top</span>
      <ChevronUp className="w-3.5 h-3.5" strokeWidth={3} />
    </button>
  )
}
