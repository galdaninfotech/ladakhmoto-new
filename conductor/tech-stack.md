# Technology Stack: Ladakh Moto Website

## Core Frameworks & Languages
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **CMS:** Payload CMS 3.x (Headless CMS for content management)
- **Push Notifications:** Firebase Cloud Messaging (FCM)

## Database & Storage
- **Database:** SQLite (via `@payloadcms/db-sqlite`) for local and potentially production data.
- **Media Storage:** Local filesystem (pre-configured in the template).

## Frontend & Styling
- **Styling:** Tailwind CSS 4.x
- **UI Components:** Radix UI primitives and shadcn/ui components.
- **Fonts:** **Oswald** (Primary brand font) for headers and impactful text.
- **Animations:** Framer Motion / Motion for smooth transitions and interactive elements.
- **Icons:** Lucide React, Tabler Icons, and React Icons.

## Form Handling & Validation
- **Forms:** React Hook Form
- **Validation:** Zod (for schema-based validation)

## Development & Testing
- **Package Manager:** pnpm
- **E2E Testing:** Playwright
- **Integration/Unit Testing:** Vitest
- **Linting & Formatting:** ESLint, Prettier
