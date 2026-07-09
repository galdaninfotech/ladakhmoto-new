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
      <button
        className="text-xs text-primary font-bold uppercase mt-4 font-oswald cursor-pointer hover:opacity-80 transition-opacity"
        onClick={() => setIsReadMoreOpen((prev) => !prev)}
      >
        {isReadMoreOpen ? 'Read Less' : 'Read More'}
      </button>

      <div
        className={`mt-4 overflow-hidden transition-all duration-500 ease-in-out ${
          isReadMoreOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'
        }`}
      >
        {isReadMoreOpen && <RichText data={readMore} enableGutter={false} />}
      </div>
    </>
  )
}
