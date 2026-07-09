# Specification: Highlights Collection & Integration

## Overview
This track involves creating a new Payload CMS collection named "Highlights" to store key selling points or visual features of the Ladakh Moto experience. These highlights will then be integrated into the three main tour collections (Biking Adventures, Holiday Packages, and Ultimate Adventures) by adding structured relationships to the existing tour highlights and itinerary days.

## Functional Requirements

### 1. Highlights Collection
- **Slug:** `highlights`
- **Admin Identity:** Use `title` as the display title.
- **Features:**
    - Standard SEO fields (Meta Title, Description, Image).
    - Automatic slug generation from `title`.
    - Live Preview support (matching the project's existing pattern).
- **Fields:**
    - `title` (Text): Required.
    - `intro` (Rich Text): Lexical editor for brief overview.
    - `description` (Rich Text): Lexical editor for detailed content.
    - `gallery` (Array):
        - Maximum of 12 items.
        - Each item is an `upload` field relating to `media`.
        - The first image in the array is treated as the "Primary" image.

### 2. Tour Collections Integration
- Update the following collections:
    - `BikingAdventures`
    - `HolidayPackages`
    - `UltimateAdventures`
- **Tour Highlights Integration:**
    - Modify the `tourHighlights` array field.
    - Add a `highlights` relationship field pointing to the `Highlights` collection (allowing multiple selections per highlight entry if applicable, or as a sibling to the existing text field). *Decision: We will add a relationship field named `highlights` within the `tourHighlights` array.*
- **Itineraries Integration:**
    - Modify the `itineraries` array field.
    - Add a `highlights` relationship field pointing to the `Highlights` collection (allowing multiple selections) for each day/itinerary item.

## Non-Functional Requirements
- **Consistency:** The new collection must follow the architectural patterns found in `src/collections/Destinations`.
- **Type Safety:** Ensure all new fields and relationships are correctly reflected in `payload-types.ts`.

## Acceptance Criteria
- [x] The "Highlights" collection is visible and functional in the Payload Admin panel.
- [x] A highlight can be saved with a title, slug, intro, description, and up to 12 gallery images.
- [ ] Users can select structured Highlights within the `tourHighlights` array in tour collections.
- [ ] Users can select structured Highlights within each day of the `itineraries` array in tour collections.
- [ ] Automated tests verify the creation and relationship links of the new collection.

## Out of Scope
- Frontend rendering of the Highlights (this track focuses on CMS structure and integration).
