'use client'

import React, { useState } from 'react'
import RichText from '@/components/RichText'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

type Props = {
  readMore?: DefaultTypedEditorState | null
}

export const ReadMore: React.FC<Props> = ({ readMore }) => {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false)

  if (!readMore) return null

  return (
    <>
      <div className="pt-6 mt-auto text-right">
        <button
          onClick={() => setIsReadMoreOpen((prev) => !prev)}
          className="inline-flex items-center text-white text-[8px] md:text-[10px] uppercase tracking-widest hover:text-accent bg-black pl-2 py-1 pr-1 group/link cursor-pointer"
        >
          {isReadMoreOpen ? 'Read Less' : 'Read More'}
          <svg
            className="text-black ml-3 w-8 h-8 bg-gray-200 pl-1 transition-transform duration-300 group-hover/link:translate-x-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 8l3 3m0 0l-3 3m3-3H3" />
          </svg>
        </button>
      </div>

      <div
        className={`mt-4 overflow-hidden transition-all duration-500 ease-in-out ${
          isReadMoreOpen ? 'max-h-[1000px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'
        }`}
      >
        <RichText data={readMore} enableGutter={false} />
      </div>
    </>
  )
}
