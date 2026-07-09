# Ladakh Moto Website - Project Overview

## Project Description
A comprehensive website for a travel company based in Ladakh, specializing in motor biking adventures and holiday packages. The platform is designed to showcase tours, provide detailed itineraries, and facilitate bookings. It is built using the **Payload Website Template** and customized for the brand's needs.

## Tech Stack

### Core
- **Framework:** Next.js 15 (App Router)
- **CMS:** Payload CMS 3.x
- **Language:** TypeScript
- **Database:** SQLite (via `@payloadcms/db-sqlite`)

### Frontend
- **Styling:** Tailwind CSS 4.x
- **Components:** shadcn/ui, Radix UI
- **Animations:** Framer Motion / Motion
- **Fonts:** Oswald (Primary)

### Testing
- **Integration/Unit:** Vitest
- **End-to-End:** Playwright

## Development Workflow

### Key Commands

| Command | Description |
| :--- | :--- |
| `pnpm dev` | Starts the development server at `http://localhost:3000`. |
| `pnpm build` | Builds the application for production. |
| `pnpm start` | Starts the production server. |
| `pnpm test` | Runs all tests (Integration + E2E). |
| `pnpm run test:int` | Runs integration tests with Vitest. |
| `pnpm run test:e2e` | Runs E2E tests with Playwright. |
| `pnpm payload migrate` | Runs database migrations. |
| `pnpm seed` | Seeds the database with initial data. |

### Directory Structure

- `src/app`: Next.js App Router pages and layouts.
    - `(frontend)`: The public-facing website.
    - `(payload)`: The Payload CMS admin panel.
- `src/collections`: Payload CMS collection definitions (e.g., Pages, Posts, BikingAdventures).
- `src/globals`: Payload CMS global definitions (e.g., Header, Footer).
- `src/components`: Reusable React components.
- `conductor`: Project documentation and tracking (Plans, Specs, Product Guide).
- `tests`: Test files (E2E in `tests/e2e`, Integration in `tests/int`).

## Mandatory Workflow

- **Pre-Edit Sync:** You MUST perform a `read_file` immediately before any edit (`replace` or `write_file`) to ensure any manual changes made by the user in their editor are preserved.
- **Surgical Edits:** Favor the `replace` tool for targeted changes over `write_file` to minimize the risk of accidental reverts or overwriting manual refinements.

## Design Conventions

- **Footer Structure:** The footer bottom area must follow a four-tier structure separated by thin horizontal lines:
    1. **Tier 1 (Logo & Nav):** Bold branding on the left, secondary navigation (Watch, Listen, Live TV, Sign in) on the right.
    2. **Tier 2 (Social & Apps):** Centered row unit containing social links and app store buttons, separated by a vertical pipe.
    3. **Tier 3 (Legal Links):** Row of text links for legal information (Terms, Privacy, etc.).
    4. **Tier 4 (Copyright):** Final copyright and developer credits.
- **Aesthetic:** Use a solid black background, `Oswald` for branding/headings, and `11px` typography for secondary links and text. Use subtle `white/10` or `white/20` for separators.

## Coding Conventions

- **Strict TypeScript:** Ensure all code is typed.
- **TDD:** Write tests before implementing features (Red-Green-Refactor).
- **Styling:** Use Tailwind CSS utility classes.
- **Components:** favor `shadcn/ui` components where applicable.
- **Forms:** Use `react-hook-form` with `zod` validation.
