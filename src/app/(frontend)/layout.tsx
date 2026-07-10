import React from 'react'
import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import { Oswald } from 'next/font/google'
import { Truculenta } from 'next/font/google'

import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import { HeaderTop } from '@/components/HeaderTop'

import './globals.css'
import { getSiteURL } from '@/utilities/getURL'
import { Toaster } from "@/components/ui/sonner"
import { getCachedGlobal } from '@/utilities/getGlobals'
import { LadakhMoto } from '@/payload-types'
import { SchemaComponent, localBusinessSchema } from '@/components/Schema'
import { DeferredClientComponents } from '@/components/DeferredClientComponents'
import { DeferredGTM } from '@/components/GTM'
import Accrediations from '@/components/Accrediations'

const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oswald',
})

const sixCaps = Truculenta({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-oswald',
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  await draftMode()

  const ladakhMotoData: LadakhMoto = await getCachedGlobal('ladakhMoto', 1)()
  const siteUrl = getSiteURL()

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ladakh Moto',
    url: siteUrl,
    logo: `${siteUrl}/images/logo.webp`,
    sameAs: [
      ladakhMotoData?.facebook,
      ladakhMotoData?.instagram,
      ladakhMotoData?.youtube,
      ladakhMotoData?.twitter,
      ladakhMotoData?.linkedin,
    ].filter(Boolean),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: ladakhMotoData?.phone1 || '+91-9622958013',
      contactType: 'Customer Service',
    },
  }

  const localSchema = localBusinessSchema(ladakhMotoData)

  return (
    <html className={cn(sixCaps.variable)} lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" as="image" href="/images/logo.webp" fetchPriority="high" />
        <InitTheme />
        <SchemaComponent data={[orgSchema, localSchema]} />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        <meta name="apple-mobile-web-app-title" content="Ladakh Moto" />
        <meta name="application-name" content="Ladakh Moto" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="">
        <Providers>
          <DeferredClientComponents />
          <Header />
          <main id="main-content">
            {children}
          </main>
          <Accrediations />
          <Footer />
          <Toaster />
        </Providers>
        <DeferredGTM gtmId="GTM-THS5LJ3P" />
      </body>
    </html>
  )
}

const siteUrl = getSiteURL()

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@nextjs',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}
