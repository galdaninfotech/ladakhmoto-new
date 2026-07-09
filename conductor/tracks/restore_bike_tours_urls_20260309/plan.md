# Track: Restore Bike Tours URL Structure (2026-03-09)

**Goal:** Revert the frontend URL structure for bike tours from `/biking-adventures/` to `/bike-tours/` to preserve existing SEO rankings and avoid unnecessary redirects.

## Context
- **Current Structure:** `/biking-adventures/[slug]`
- **Desired Structure:** `/bike-tours/[slug]`
- **Reason:** To match the established SEO footprint of the old website.
- **Note:** The Payload CMS collection slug (`bikingAdventures`) will likely remain the same internally to avoid data migration issues, but the frontend route and public-facing URLs will change.

## Strategy
1.  **Rename Frontend Routes:** Move the Next.js app directory from `src/app/(frontend)/biking-adventures` to `src/app/(frontend)/bike-tours`.
2.  **Update URL Generation Logic:** Modify utility functions (`resolveUrl.ts`, `generateMeta.ts`, `generatePreviewPath.ts`) to generate `/bike-tours/` URLs for the `bikingAdventures` collection.
3.  **Update Component Links:** Search and replace all hardcoded `/biking-adventures` links in components (Header, Footer, Cards, etc.).
4.  **Update Sitemaps:** Rename and update the sitemap generation route.
5.  **Verify Redirects:** Ensure `src/components/PayloadRedirects/index.tsx` handles the mapping correctly if it relies on `relationTo` matching the URL segment.

## Tasks
- [x] Rename `src/app/(frontend)/biking-adventures` to `src/app/(frontend)/bike-tours`.
- [x] Update `src/utilities/resolveUrl.ts` to output `/bike-tours/` for `bikingAdventures`.
- [x] Update `src/utilities/generateMeta.ts` (canonical URLs).
- [x] Update `src/utilities/generatePreviewPath.ts`.
- [x] Update `src/components/PayloadRedirects/index.tsx` logic if needed (it currently maps `relationTo` to URL segment).
- [x] Rename and update `src/app/(frontend)/(sitemaps)/biking-adventures-sitemap.xml/route.ts` to `bike-tours-sitemap.xml`.
- [x] Search and replace `/biking-adventures` with `/bike-tours` in:
    - `src/Header/Component.client.tsx`
    - `src/components/Sidebar.tsx`
    - `src/components/Schema/index.tsx`
    - `src/components/BikingAdventureCard/index.tsx`
    - `src/components/BikingAdventures/Card/index.tsx`
    - `src/blocks/AdventureRides/Component.client.tsx`
    - Seed scripts (updated `seed-globals.ts` and others).
- [x] Verify build and check a bike tour page.
