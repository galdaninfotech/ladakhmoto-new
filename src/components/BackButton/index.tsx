'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { cn } from '@/utilities/ui'

export const BackButton: React.FC<{
  className?: string
  label?: string
}> = ({ className, label = 'Go Back' }) => {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className={cn(
        'group inline-flex items-center text-xs md:text-sm font-oswald uppercase tracking-widest text-foreground/60 hover:text-accent transition-colors duration-300',
        className,
      )}
    >
      <svg
        className="mr-2 w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      {label}
    </button>
  )
}
