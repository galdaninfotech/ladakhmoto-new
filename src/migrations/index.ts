import * as migration_20260520_142831_merged_initial_migration from './20260520_142831_merged_initial_migration';
import * as migration_20260614_094647_highlights_collection from './20260614_094647_highlights_collection';
import * as migration_20260614_100247_update_tours_with_highlights from './20260614_100247_update_tours_with_highlights';
import * as migration_20260616_030850_add_overview_map_column from './20260616_030850_add_overview_map_column';
import * as migration_20260619_020623_alter_hero_fields from './20260619_020623_alter_hero_fields';
import * as migration_20260619_074104_add_highlights_field_to_footer from './20260619_074104_add_highlights_field_to_footer';
import * as migration_20260627_043232_add_offerurl_field_hero_slides from './20260627_043232_add_offerurl_field_hero_slides';
import * as migration_20260708_123354_add_categories_to_tours from './20260708_123354_add_categories_to_tours';
import * as migration_20260710_031433_add_bio_to_users from './20260710_031433_add_bio_to_users';
import * as migration_20260710_034334_add_hotels_block_to_pages from './20260710_034334_add_hotels_block_to_pages';

export const migrations = [
  {
    up: migration_20260520_142831_merged_initial_migration.up,
    down: migration_20260520_142831_merged_initial_migration.down,
    name: '20260520_142831_merged_initial_migration',
  },
  {
    up: migration_20260614_094647_highlights_collection.up,
    down: migration_20260614_094647_highlights_collection.down,
    name: '20260614_094647_highlights_collection',
  },
  {
    up: migration_20260614_100247_update_tours_with_highlights.up,
    down: migration_20260614_100247_update_tours_with_highlights.down,
    name: '20260614_100247_update_tours_with_highlights',
  },
  {
    up: migration_20260616_030850_add_overview_map_column.up,
    down: migration_20260616_030850_add_overview_map_column.down,
    name: '20260616_030850_add_overview_map_column',
  },
  {
    up: migration_20260619_020623_alter_hero_fields.up,
    down: migration_20260619_020623_alter_hero_fields.down,
    name: '20260619_020623_alter_hero_fields',
  },
  {
    up: migration_20260619_074104_add_highlights_field_to_footer.up,
    down: migration_20260619_074104_add_highlights_field_to_footer.down,
    name: '20260619_074104_add_highlights_field_to_footer',
  },
  {
    up: migration_20260627_043232_add_offerurl_field_hero_slides.up,
    down: migration_20260627_043232_add_offerurl_field_hero_slides.down,
    name: '20260627_043232_add_offerurl_field_hero_slides',
  },
  {
    up: migration_20260708_123354_add_categories_to_tours.up,
    down: migration_20260708_123354_add_categories_to_tours.down,
    name: '20260708_123354_add_categories_to_tours',
  },
  {
    up: migration_20260710_031433_add_bio_to_users.up,
    down: migration_20260710_031433_add_bio_to_users.down,
    name: '20260710_031433_add_bio_to_users',
  },
  {
    up: migration_20260710_034334_add_hotels_block_to_pages.up,
    down: migration_20260710_034334_add_hotels_block_to_pages.down,
    name: '20260710_034334_add_hotels_block_to_pages'
  },
];
