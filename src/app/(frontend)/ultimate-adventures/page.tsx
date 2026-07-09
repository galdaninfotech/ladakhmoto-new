import type { Metadata } from 'next/types'

import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'
import { TourHero } from '@/heros/TourHero'
import Sidebar from '@/components/Sidebar'
import { UltimateAdventureCard } from '@/components/UltimateAdventureCard'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'ultimateAdventures',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    select: {
      slug: true,
      title: true,
      duration: true,
      minCost: true,
      startEndCity: true,
      meta: {
        image: true,
        description: true,
        title: true,
      },
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
              Delhi to Ladakh Bike Trip - Ultimate Adventures 2026
              </h1>
              <p className="text-slate-500 max-w-2xl text-sm">
              Plan your Delhi to Ladakh bike trip with Ladakh Moto — a local Ladakhi operator trusted by riders from across India and the world. Both our Ultimate Adventures depart from Delhi, covering over 1,420 km of the Himalayas on well-maintained Royal Enfield motorbikes, with expert guides, acclimatization schedules, and all logistics handled for you.
              </p>
            </div>

            <div className="mb-8 border-b border-slate-100 pb-4">
              <PageRange
                collection="ultimateAdventures"
                currentPage={posts.page}
                limit={12}
                totalDocs={posts.totalDocs}
              />
            </div>

            <div className="flex flex-col">
              {posts.docs?.map((post, index) => (
                <UltimateAdventureCard key={index} doc={post} />
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
    title: `Delhi to Ladakh Bike Trip | Ultimate Adventures 2026 – Ladakh Moto`,
    description: `Ultimate Delhi to Ladakh bike trip with Ladakh Moto. 14N/15D Royal Enfield tours, expert local guides & all-inclusive packages. Book 2026 dates.`,
    alternates: {
      canonical: '/ultimate-adventures',
    },
  }
}
