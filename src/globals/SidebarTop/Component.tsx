"use client"
import React, { useEffect, useState } from 'react'
import type { SidebarTop as SidebarTopType } from '@/payload-types'
import Link from 'next/link' // Import Link from Next.js
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { type ResolvedLink, resolveUrl } from '@/utilities/resolveUrl'

export const SidebarTop: React.FC<{ sidebarTopData: SidebarTopType }> = ({ sidebarTopData }) => {
  const { title, links, subtitle } = sidebarTopData
  const [hydratedLinks, setHydratedLinks] = useState<ResolvedLink[]>([])

  useEffect(() => {
    const hydrateLinks = async () => {
      if (!links) return

      const newLinks = await Promise.all(
        links
          .filter(item => item.link !== null)
          .map(async ({ link }) => {
            return await resolveUrl(link)
          }),
      )
      setHydratedLinks(newLinks)
    }

    hydrateLinks()
  }, [links])

  return (
    <div className="sidebar-posts-block mb-6">
      <h2 className="text-md text-[darkred] mb-3 uppercase font-oswald">
        {title}
      </h2>
      {subtitle && <p>{subtitle}</p>}
      <div className="posts-list">
        {hydratedLinks.map((link, index) => (
          <div key={index} className="post-item ml-1.5">
            {/* Link to the individual page */}
            <Link
              className="flex flex-cols items-start justify-start group"
              href={link.url}
            >
              <MdKeyboardDoubleArrowRight
                className="mr-1.5 inline-block align-middle group-hover:text-accent transition-colors"
              />
              <h3 className="text-[13px] mb-3">{link.label}</h3>
            </Link>
            {/* You can add more link details here, e.g., an image or description */}
          </div>
        ))}
      </div>
    </div>
  )
}
