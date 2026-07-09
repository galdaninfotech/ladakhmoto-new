import type { Metadata } from 'next/types'

import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'
import { TourHero } from '@/heros/TourHero'
import Sidebar from '@/components/Sidebar'
import { PostCard } from '@/components/PostCard'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
      heroImage: true,
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
                Ladakh Moto - Blog Posts
              </h1>
              <p className="text-slate-500 max-w-2xl text-sm">
                Explore our latest stories, travel tips, and updates from the heart of the Himalayas.
              </p>
            </div>

            <div className="mb-8 border-b border-slate-100 pb-4">
              <PageRange
                collection="posts"
                currentPage={posts.page}
                limit={12}
                totalDocs={posts.totalDocs}
              />
            </div>

            <div className="flex flex-col">
              {posts.docs?.map((post, index) => (
                <PostCard key={index} doc={post} showCategories />
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
    title: `Ladakh Travel Blog - Bike Tours, Tips & Adventure Guides | Ladakh Moto`,
    description: 'Explore Ladakh travel guides, motorcycle tour tips, route insights, safety advice, and local stories from Ladakh Moto. Plan a perfect Ladakh adventure.',
    alternates: {
      canonical: '/posts',
    },
  }
}
