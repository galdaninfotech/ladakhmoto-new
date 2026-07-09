'use client'

import React from 'react'
import Script from 'next/script'

export default function GoogleReviews() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <Script
          src="https://static.elfsight.com/platform/platform.js"
          strategy="afterInteractive"
        />
        <div
          className="elfsight-app-e61de2df-e8bf-4dd0-9151-ad719eae83c4"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  )
}

