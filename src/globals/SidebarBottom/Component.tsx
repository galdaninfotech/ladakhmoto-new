"use client";
import React, { useEffect, useState } from 'react';
import type { SidebarBottom as SidebarBottomType } from '@/payload-types';
import Link from 'next/link';
import { type LinkField, type ResolvedLink, resolveUrl } from '@/utilities/resolveUrl';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

export const SidebarBottom: React.FC<{ sidebarBottomData: SidebarBottomType | undefined }> = ({ sidebarBottomData }) => {
  // Check if sidebarBottomData exists before destructuring

  const [hydratedNavItems, setHydratedNavItems] = useState<ResolvedLink[]>([]);
  // console.log(hydratedNavItems)

  useEffect(() => {
    const hydrateLinks = async () => {
      if (!sidebarBottomData?.navItems) {
        // console.log("No navItems found in sidebarBottomData");
        return;
      }
      const { navItems } = sidebarBottomData;
      try {
        const newNavItems = await Promise.all(
          navItems.map(async (navItem) => {
            try {
              const resolvedLink = await resolveUrl(navItem.link as LinkField);
              return resolvedLink;
            } catch (error) {
              console.error("Error resolving link:", error);
              return { label: 'Error', url: '#' }; // Provide a fallback
            }
          })
        );
        setHydratedNavItems(newNavItems);
      } catch (error) {
        console.error("Error hydrating links:", error);
      }
    };

    hydrateLinks();
  }, [sidebarBottomData]);

  return (
    <div className="sidebar-posts-block mb-6">
      {sidebarBottomData?.title && <h2 className="text-md text-[darkred] mb-3 uppercase font-oswald">{sidebarBottomData.title}</h2>}
      <div className="posts-list">
        {hydratedNavItems.map((navItem, index) => (
          <div key={index} className="post-item ml-1.5">
            <Link className="flex flex-cols items-start justify-start group" href={navItem.url || '#'} target={navItem.newTab ? "_blank" : undefined} rel="noopener noreferrer">
              <MdKeyboardDoubleArrowRight className="mr-1.5 inline-block align-middle group-hover:text-accent transition-colors" />
              <h3 className="text-[13px] mb-3">{navItem.label}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};