import type { Metadata } from 'next/types'

import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'
import { TourHero } from '@/heros/TourHero'
import Sidebar from '@/components/Sidebar'
import { BikingAdventureCard } from '@/components/BikingAdventureCard'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'bikingAdventures',
    depth: 1,
    limit: 12,
    overrideAccess: true,
    select: {
      slug: true,
      title: true,
      duration: true,
      minCost: true,
      startEndCity: true,
      meta: true,
      heroImage: true,
      distance: true,
      highestPeak: true,
      accommodation: true,
      meal: true,
      description: true,
    },
  })

  return (
    <>
      {/* Show random image from posts */}
      <TourHero post={posts.docs[Math.floor(Math.random() * posts.docs.length)]} />

      <div className="container mx-auto pt-24 pb-24 px-4">
        <PageClient />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <main className="lg:col-span-9">
            <div className="mb-12">
              <h1 className="font-oswald text-sm md:text-xl uppercase tracking-tight text-foreground mb-4">
                Ladakh Moto - Biking Adventures 2026
              </h1>
              <p className="text-slate-500 max-w-2xl text-sm">
                Conquer the highest motorable passes and explore the raw beauty of Ladakh on two wheels.
              </p>
            </div>

            <div className="mb-8 border-b border-slate-100 pb-4">
              <PageRange
                collection="bikingAdventures"
                currentPage={posts.page}
                limit={12}
                totalDocs={posts.totalDocs}
              />
            </div>

            <div className="flex flex-col">
              {posts.docs?.map((post, index) => (
                <BikingAdventureCard key={index} doc={post} />
              ))}
            </div>

            <div className="mt-12">
              {posts.totalPages > 1 && posts.page && (
                <Pagination className="text-xs font-normal" page={posts.page} totalPages={posts.totalPages} />
              )}
            </div>
          </main>

          <aside className="lg:col-span-3">
            <div className="sticky top-24">
              <Sidebar isOverview={false} />
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Biking Adventures | Ladakh Moto`,
    description: `Conquer the highest motorable passes and explore the raw beauty of Ladakh on two wheels. Join Ladakh Moto for an unforgettable biking adventure in the Himalayas.`,
    alternates: {
      canonical: '/bike-tours',
    },
  }
}
