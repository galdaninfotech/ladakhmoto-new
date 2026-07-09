# Track: Improve Page Speed Index & System Cleanup (2026-03-07)

**Goal:** Improve the Page Speed Index and remove redundant systems (Notifications).

## Context
- **Report Screenshot:** `public/screenshot1.png`
- **Current Status:** Completed
- **Target Score:** 90+ Mobile
- **Note:** CLS is already 0. Notification system removed completely.

## Strategy
1.  **Analyze Report:** Identified bottlenecks in LCP and Speed Index.
2.  **Image Optimization:**
    - Refined `sizes` attributes across the site.
    - Added `decoding="async"`.
3.  **Code Optimization:**
    - **Delayed Scripts:** reCAPTCHA and GTM are now lazy-loaded on interaction/delay.
    - **System Removal:** Completely removed the Notification system (FCM, Firebase, Subscriptions) to reduce bundle size and background overhead.
4.  **SEO Safety:**
    - Preserved all SEO metadata and headers.

## Tasks
- [x] Optimize `ImageMedia` `sizes` and `decoding`.
- [x] Update `TourHero`, `DestinationHero`, `PostHero` and `Footer` decorative images to remove unnecessary `priority` and `fetchPriority="high"`.
- [x] Align UI/UX of `biking-adventures`, `holiday-packages`, and `destinations` with `/posts` layout (9/3 grid + sidebar).
- [x] Implement specialized cards (`BikingAdventureCard`, `HolidayPackageCard`, `DestinationCard`) for consistent look and feel.
- [x] Optimize Payload queries with `select` for collection archives.
- [x] Implement lazy-initialization for reCAPTCHA and GTM.
- [x] **Completely remove Notification system:**
    - Deleted `NotificationSubscriptions` collection.
    - Deleted `FcmListener` and `PushSubscriptionButton` components.
    - Deleted `useFcmToken` hook.
    - Deleted `firebase-admin.ts` and `firebase-client.ts` libs.
    - Removed `firebase` and `firebase-admin` dependencies.
    - Cleaned up API routes (`form-bookings`, `contact`).
- [x] Final build verification (`pnpm build`).

