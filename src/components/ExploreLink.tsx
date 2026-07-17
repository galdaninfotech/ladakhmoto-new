import React from 'react'
import Link from 'next/link'

export type ExploreLinkProps = {
  url: string
  title: string
  className?: string
}

export const ExploreLink: React.FC<ExploreLinkProps> = ({ url, title, className = '' }) => {
  return (
    <div className={`pt-6 mt-auto text-right ${className}`}>
      <Link
        href={url}
        className="inline-flex items-center text-white text-[8px] md:text-[10px] uppercase tracking-widest hover:text-accent bg-black pl-2 py-1 pr-1 group/link"
      >
        {title}
        <svg
          className="text-black ml-3 w-8 h-8 bg-gray-200 pl-1 transition-transform duration-300 group-hover/link:translate-x-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 8l3 3m0 0l-3 3m3-3H3" />
        </svg>
      </Link>
    </div>
  )
}
