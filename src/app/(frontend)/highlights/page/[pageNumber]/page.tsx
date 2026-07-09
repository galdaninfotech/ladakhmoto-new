import type { Metadata } from 'next/types'

import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'
import { notFound } from 'next/navigation'
import { HighlightHero } from '@/heros/HighlightHero'
import Sidebar from '@/components/Sidebar'
import { HighlightCard } from '@/components/HighlightCard'

export const revalidate = 600

type Args = {
  params: Promise<{
    pageNumber: string
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { pageNumber } = await paramsPromise
  const payload = await getPayload({ config: configPromise })

  const sanitizedPageNumber = Number(pageNumber)

  if (!Number.isInteger(sanitizedPageNumber)) notFound()

  const posts = await payload.find({
    collection: 'highlights',
    depth: 1,
    limit: 12,
    page: sanitizedPageNumber,
    overrideAccess: false,
    select: {
      slug: true,
      title: true,
      meta: true,
      gallery: true,
    },
  })

  return (
    <>
      <HighlightHero post={posts.docs[Math.floor(Math.random() * posts.docs.length)] as any} />

      <div className="container mx-auto pt-24 pb-24 px-4">
        <PageClient />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <main className="lg:col-span-9">
            <div className="mb-12">
              <h1 className="font-oswald text-sm md:text-xl uppercase tracking-tight text-foreground mb-4">
                Ladakh Moto - Highlights (Page {pageNumber})
              </h1>
              <p className="text-slate-500 max-w-2xl text-sm">
                Discover the most iconic sights, mountain passes, and cultural landmarks of Ladakh.
              </p>
            </div>

            <div className="mb-8 border-b border-slate-100 pb-4">
              <PageRange
                collection="highlights"
                currentPage={posts.page}
                limit={12}
                totalDocs={posts.totalDocs}
              />
            </div>

            <div className="flex flex-col">
              {posts.docs?.map((post, index) => (
                <HighlightCard key={index} doc={post as any} />
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

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { pageNumber } = await paramsPromise
  return {
    title: `Highlights Page ${pageNumber || ''}`,
  }
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const { totalDocs } = await payload.count({
    collection: 'highlights',
    overrideAccess: false,
  })

  const totalPages = Math.ceil(totalDocs / 12)

  const pages: { pageNumber: string }[] = []

  for (let i = 1; i <= totalPages; i++) {
    pages.push({ pageNumber: String(i) })
  }

  return pages
}
