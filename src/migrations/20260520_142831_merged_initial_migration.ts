import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cta_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_archive_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum_pages_blocks_archive_relation_to" AS ENUM('posts');
  CREATE TYPE "public"."enum_pages_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_relation_to" AS ENUM('posts');
  CREATE TYPE "public"."enum__pages_v_version_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_posts_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__posts_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_users_designation" AS ENUM('Admin', 'Tour Leader', 'Marshal', 'Operation');
  CREATE TYPE "public"."enum_ultimate_adventures_accommodation" AS ENUM('hotel', 'resort', 'camp', 'home-stay', 'gh', 'cottage');
  CREATE TYPE "public"."enum_ultimate_adventures_meal" AS ENUM('breakfast', 'lunch', 'dinner');
  CREATE TYPE "public"."enum_ultimate_adventures_itineraries_accommodation" AS ENUM('camp', 'cottage', 'hotel', 'home-stay', 'resort', 'gh');
  CREATE TYPE "public"."enum_ultimate_adventures_itineraries_meal" AS ENUM('breakfast', 'lunch', 'dinner');
  CREATE TYPE "public"."enum_ultimate_adventures_itineraries_difficulty" AS ENUM('easy', 'medium', 'hard');
  CREATE TYPE "public"."enum_ultimate_adventures_dates_status" AS ENUM('open', 'closing-soon', 'closed');
  CREATE TYPE "public"."enum_ultimate_adventures_cost_travel_mode" AS ENUM('own-bike', 'solo-rider', 'dual-ride', 'seat-in-backup-vehicle', 'suv');
  CREATE TYPE "public"."enum_ultimate_adventures_cost_vehicle_provided" AS ENUM('own-bike', 'himalayan-411-bs6', 'himalayan-452-bs6', 'isuzu-camper', 'innova-xylo');
  CREATE TYPE "public"."enum_ultimate_adventures_difficulty" AS ENUM('easy', 'medium', 'hard');
  CREATE TYPE "public"."enum_ultimate_adventures_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__ultimate_adventures_v_version_accommodation" AS ENUM('hotel', 'resort', 'camp', 'home-stay', 'gh', 'cottage');
  CREATE TYPE "public"."enum__ultimate_adventures_v_version_meal" AS ENUM('breakfast', 'lunch', 'dinner');
  CREATE TYPE "public"."enum__ultimate_adventures_v_version_itineraries_accommodation" AS ENUM('camp', 'cottage', 'hotel', 'home-stay', 'resort', 'gh');
  CREATE TYPE "public"."enum__ultimate_adventures_v_version_itineraries_meal" AS ENUM('breakfast', 'lunch', 'dinner');
  CREATE TYPE "public"."enum__ultimate_adventures_v_version_itineraries_difficulty" AS ENUM('easy', 'medium', 'hard');
  CREATE TYPE "public"."enum__ultimate_adventures_v_version_dates_status" AS ENUM('open', 'closing-soon', 'closed');
  CREATE TYPE "public"."enum__ultimate_adventures_v_version_cost_travel_mode" AS ENUM('own-bike', 'solo-rider', 'dual-ride', 'seat-in-backup-vehicle', 'suv');
  CREATE TYPE "public"."enum__ultimate_adventures_v_version_cost_vehicle_provided" AS ENUM('own-bike', 'himalayan-411-bs6', 'himalayan-452-bs6', 'isuzu-camper', 'innova-xylo');
  CREATE TYPE "public"."enum__ultimate_adventures_v_version_difficulty" AS ENUM('easy', 'medium', 'hard');
  CREATE TYPE "public"."enum__ultimate_adventures_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_biking_adventures_accommodation" AS ENUM('hotel', 'resort', 'camp', 'home-stay', 'gh', 'cottage');
  CREATE TYPE "public"."enum_biking_adventures_meal" AS ENUM('breakfast', 'lunch', 'dinner');
  CREATE TYPE "public"."enum_biking_adventures_itineraries_accommodation" AS ENUM('camp', 'cottage', 'hotel', 'home-stay', 'resort', 'gh');
  CREATE TYPE "public"."enum_biking_adventures_itineraries_meal" AS ENUM('breakfast', 'lunch', 'dinner');
  CREATE TYPE "public"."enum_biking_adventures_itineraries_difficulty" AS ENUM('easy', 'medium', 'hard');
  CREATE TYPE "public"."enum_biking_adventures_dates_status" AS ENUM('open', 'closing-soon', 'closed');
  CREATE TYPE "public"."enum_biking_adventures_cost_travel_mode" AS ENUM('own-bike', 'solo-rider', 'dual-ride', 'seat-in-backup-vehicle', 'suv');
  CREATE TYPE "public"."enum_biking_adventures_cost_vehicle_provided" AS ENUM('own-bike', 'himalayan-411-bs6', 'himalayan-452-bs6', 'isuzu-camper', 'innova-xylo');
  CREATE TYPE "public"."enum_biking_adventures_difficulty" AS ENUM('easy', 'medium', 'hard');
  CREATE TYPE "public"."enum_biking_adventures_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__biking_adventures_v_version_accommodation" AS ENUM('hotel', 'resort', 'camp', 'home-stay', 'gh', 'cottage');
  CREATE TYPE "public"."enum__biking_adventures_v_version_meal" AS ENUM('breakfast', 'lunch', 'dinner');
  CREATE TYPE "public"."enum__biking_adventures_v_version_itineraries_accommodation" AS ENUM('camp', 'cottage', 'hotel', 'home-stay', 'resort', 'gh');
  CREATE TYPE "public"."enum__biking_adventures_v_version_itineraries_meal" AS ENUM('breakfast', 'lunch', 'dinner');
  CREATE TYPE "public"."enum__biking_adventures_v_version_itineraries_difficulty" AS ENUM('easy', 'medium', 'hard');
  CREATE TYPE "public"."enum__biking_adventures_v_version_dates_status" AS ENUM('open', 'closing-soon', 'closed');
  CREATE TYPE "public"."enum__biking_adventures_v_version_cost_travel_mode" AS ENUM('own-bike', 'solo-rider', 'dual-ride', 'seat-in-backup-vehicle', 'suv');
  CREATE TYPE "public"."enum__biking_adventures_v_version_cost_vehicle_provided" AS ENUM('own-bike', 'himalayan-411-bs6', 'himalayan-452-bs6', 'isuzu-camper', 'innova-xylo');
  CREATE TYPE "public"."enum__biking_adventures_v_version_difficulty" AS ENUM('easy', 'medium', 'hard');
  CREATE TYPE "public"."enum__biking_adventures_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_holiday_packages_accommodation" AS ENUM('hotel', 'resort', 'camp', 'home-stay', 'gh', 'cottage');
  CREATE TYPE "public"."enum_holiday_packages_meal" AS ENUM('breakfast', 'lunch', 'dinner');
  CREATE TYPE "public"."enum_holiday_packages_itineraries_accommodation" AS ENUM('camp', 'cottage', 'hotel', 'home-stay', 'resort', 'gh');
  CREATE TYPE "public"."enum_holiday_packages_itineraries_meal" AS ENUM('breakfast', 'lunch', 'dinner');
  CREATE TYPE "public"."enum_holiday_packages_itineraries_difficulty" AS ENUM('easy', 'medium', 'hard');
  CREATE TYPE "public"."enum_holiday_packages_cost_travel_mode" AS ENUM('own-bike', 'solo-rider', 'dual-ride', 'seat-in-backup-vehicle', 'suv');
  CREATE TYPE "public"."enum_holiday_packages_cost_vehicle_provided" AS ENUM('own-bike', 'himalayan-411-bs6', 'himalayan-452-bs6', 'isuzu-camper', 'innova-xylo');
  CREATE TYPE "public"."enum_holiday_packages_difficulty" AS ENUM('easy', 'medium', 'hard');
  CREATE TYPE "public"."enum_holiday_packages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__holiday_packages_v_version_accommodation" AS ENUM('hotel', 'resort', 'camp', 'home-stay', 'gh', 'cottage');
  CREATE TYPE "public"."enum__holiday_packages_v_version_meal" AS ENUM('breakfast', 'lunch', 'dinner');
  CREATE TYPE "public"."enum__holiday_packages_v_version_itineraries_accommodation" AS ENUM('camp', 'cottage', 'hotel', 'home-stay', 'resort', 'gh');
  CREATE TYPE "public"."enum__holiday_packages_v_version_itineraries_meal" AS ENUM('breakfast', 'lunch', 'dinner');
  CREATE TYPE "public"."enum__holiday_packages_v_version_itineraries_difficulty" AS ENUM('easy', 'medium', 'hard');
  CREATE TYPE "public"."enum__holiday_packages_v_version_cost_travel_mode" AS ENUM('own-bike', 'solo-rider', 'dual-ride', 'seat-in-backup-vehicle', 'suv');
  CREATE TYPE "public"."enum__holiday_packages_v_version_cost_vehicle_provided" AS ENUM('own-bike', 'himalayan-411-bs6', 'himalayan-452-bs6', 'isuzu-camper', 'innova-xylo');
  CREATE TYPE "public"."enum__holiday_packages_v_version_difficulty" AS ENUM('easy', 'medium', 'hard');
  CREATE TYPE "public"."enum__holiday_packages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_destinations_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__destinations_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_hotels_star_rating" AS ENUM('1', '2', '3', '4', '5', 'luxury', 'standard', 'basic');
  CREATE TYPE "public"."enum_redirects_to_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_forms_confirmation_type" AS ENUM('message', 'redirect');
  CREATE TYPE "public"."enum_payload_jobs_log_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_payload_jobs_log_state" AS ENUM('failed', 'succeeded');
  CREATE TYPE "public"."enum_payload_jobs_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_payload_folders_folder_type" AS ENUM('media');
  CREATE TYPE "public"."enum_header_nav_items_sub_links_sub_sub_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_nav_items_sub_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_nav_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_quick_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_adventure_rides_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_destinations_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_sidebar_bottom_nav_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_sidebar_top_links_link_type" AS ENUM('reference', 'custom');
  CREATE TABLE "pages_hero_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"subtitle" varchar,
  	"image_id" integer
  );
  
  CREATE TABLE "pages_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_cta_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_pages_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum_pages_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_content_columns_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_archive" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"intro_content" jsonb,
  	"populate_by" "enum_pages_blocks_archive_populate_by" DEFAULT 'collection',
  	"relation_to" "enum_pages_blocks_archive_relation_to" DEFAULT 'posts',
  	"limit" numeric DEFAULT 10,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"form_id" integer,
  	"enable_intro" boolean,
  	"intro_content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_content_with_media" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"enabled" boolean DEFAULT true,
  	"media_id" integer,
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "pages_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"enabled" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_company_intro" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"enabled" boolean DEFAULT true,
  	"title" varchar,
  	"sub_title" varchar,
  	"content" jsonb,
  	"read_more" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_adventure_rides" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"enabled" boolean DEFAULT true,
  	"title" varchar,
  	"limit" numeric DEFAULT 6,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_holiday_packages" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"enabled" boolean DEFAULT true,
  	"title" varchar,
  	"limit" numeric DEFAULT 6,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_ultimate_adventures_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"enabled" boolean DEFAULT true,
  	"title" varchar,
  	"subtitle" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_team" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"enabled" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_contact_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"enabled" boolean DEFAULT true,
  	"title" varchar,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_type" "enum_pages_hero_type" DEFAULT 'lowImpact',
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"categories_id" integer
  );
  
  CREATE TABLE "_pages_v_version_hero_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"subtitle" varchar,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_cta_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"size" "enum__pages_v_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum__pages_v_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_content_columns_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_archive" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"intro_content" jsonb,
  	"populate_by" "enum__pages_v_blocks_archive_populate_by" DEFAULT 'collection',
  	"relation_to" "enum__pages_v_blocks_archive_relation_to" DEFAULT 'posts',
  	"limit" numeric DEFAULT 10,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_id" integer,
  	"enable_intro" boolean,
  	"intro_content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_content_with_media" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"enabled" boolean DEFAULT true,
  	"media_id" integer,
  	"content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"enabled" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_company_intro" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"enabled" boolean DEFAULT true,
  	"title" varchar,
  	"sub_title" varchar,
  	"content" jsonb,
  	"read_more" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_adventure_rides" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"enabled" boolean DEFAULT true,
  	"title" varchar,
  	"limit" numeric DEFAULT 6,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_holiday_packages" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"enabled" boolean DEFAULT true,
  	"title" varchar,
  	"limit" numeric DEFAULT 6,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_ultimate_adventures_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"enabled" boolean DEFAULT true,
  	"title" varchar,
  	"subtitle" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_team" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"enabled" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_contact_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"enabled" boolean DEFAULT true,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_type" "enum__pages_v_version_hero_type" DEFAULT 'lowImpact',
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_generate_slug" boolean DEFAULT true,
  	"version_slug" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_pages_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"categories_id" integer
  );
  
  CREATE TABLE "posts_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE "posts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_image_id" integer,
  	"content" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_posts_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "posts_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "_posts_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE "_posts_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_image_id" integer,
  	"version_content" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_generate_slug" boolean DEFAULT true,
  	"version_slug" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__posts_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_posts_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar,
  	"credit_text" varchar NOT NULL,
  	"caption" jsonb,
  	"folder_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_square_url" varchar,
  	"sizes_square_width" numeric,
  	"sizes_square_height" numeric,
  	"sizes_square_mime_type" varchar,
  	"sizes_square_filesize" numeric,
  	"sizes_square_filename" varchar,
  	"sizes_small_url" varchar,
  	"sizes_small_width" numeric,
  	"sizes_small_height" numeric,
  	"sizes_small_mime_type" varchar,
  	"sizes_small_filesize" numeric,
  	"sizes_small_filename" varchar,
  	"sizes_medium_url" varchar,
  	"sizes_medium_width" numeric,
  	"sizes_medium_height" numeric,
  	"sizes_medium_mime_type" varchar,
  	"sizes_medium_filesize" numeric,
  	"sizes_medium_filename" varchar,
  	"sizes_large_url" varchar,
  	"sizes_large_width" numeric,
  	"sizes_large_height" numeric,
  	"sizes_large_mime_type" varchar,
  	"sizes_large_filesize" numeric,
  	"sizes_large_filename" varchar,
  	"sizes_xlarge_url" varchar,
  	"sizes_xlarge_width" numeric,
  	"sizes_xlarge_height" numeric,
  	"sizes_xlarge_mime_type" varchar,
  	"sizes_xlarge_filesize" numeric,
  	"sizes_xlarge_filename" varchar,
  	"sizes_og_url" varchar,
  	"sizes_og_width" numeric,
  	"sizes_og_height" numeric,
  	"sizes_og_mime_type" varchar,
  	"sizes_og_filesize" numeric,
  	"sizes_og_filename" varchar
  );
  
  CREATE TABLE "categories_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"doc_id" integer,
  	"url" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar NOT NULL,
  	"parent_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"avatar_id" integer,
  	"name" varchar,
  	"designation" "enum_users_designation",
  	"active" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "ultimate_adventures_tour_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"highlight" varchar
  );
  
  CREATE TABLE "ultimate_adventures_accommodation" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_ultimate_adventures_accommodation",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "ultimate_adventures_meal" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_ultimate_adventures_meal",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "ultimate_adventures_overview_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "ultimate_adventures_itineraries_accommodation" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_ultimate_adventures_itineraries_accommodation",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "ultimate_adventures_itineraries_meal" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_ultimate_adventures_itineraries_meal",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "ultimate_adventures_itineraries" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"duration" varchar,
  	"distance" varchar,
  	"highest_peak" varchar,
  	"difficulty" "enum_ultimate_adventures_itineraries_difficulty" DEFAULT 'easy',
  	"media_id" integer,
  	"activity" varchar,
  	"highlights" varchar,
  	"description" varchar,
  	"overnight" varchar,
  	"hotel_id" integer
  );
  
  CREATE TABLE "ultimate_adventures_dates" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"start" timestamp(3) with time zone,
  	"end" timestamp(3) with time zone,
  	"status" "enum_ultimate_adventures_dates_status"
  );
  
  CREATE TABLE "ultimate_adventures_cost" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"travel_mode" "enum_ultimate_adventures_cost_travel_mode",
  	"vehicle_provided" "enum_ultimate_adventures_cost_vehicle_provided",
  	"cost_per_person" numeric
  );
  
  CREATE TABLE "ultimate_adventures_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE "ultimate_adventures" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_image_id" integer,
  	"description" jsonb,
  	"summary" jsonb,
  	"duration" varchar,
  	"distance" varchar,
  	"highest_peak" varchar,
  	"difficulty" "enum_ultimate_adventures_difficulty" DEFAULT 'easy',
  	"overview_image_id" integer,
  	"overview_video_url" varchar,
  	"overview_video_video_id" integer,
  	"private_room_upgrade" varchar,
  	"bike_upgrade" varchar,
  	"is_featured" boolean DEFAULT false,
  	"order" numeric,
  	"start_end_city" varchar,
  	"min_cost" varchar,
  	"cut_out_cost" varchar,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_ultimate_adventures_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "ultimate_adventures_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "_ultimate_adventures_v_version_tour_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"highlight" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_ultimate_adventures_v_version_accommodation" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__ultimate_adventures_v_version_accommodation",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_ultimate_adventures_v_version_meal" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__ultimate_adventures_v_version_meal",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_ultimate_adventures_v_version_overview_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_ultimate_adventures_v_version_itineraries_accommodation" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__ultimate_adventures_v_version_itineraries_accommodation",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_ultimate_adventures_v_version_itineraries_meal" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__ultimate_adventures_v_version_itineraries_meal",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_ultimate_adventures_v_version_itineraries" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"duration" varchar,
  	"distance" varchar,
  	"highest_peak" varchar,
  	"difficulty" "enum__ultimate_adventures_v_version_itineraries_difficulty" DEFAULT 'easy',
  	"media_id" integer,
  	"activity" varchar,
  	"highlights" varchar,
  	"description" varchar,
  	"overnight" varchar,
  	"hotel_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_ultimate_adventures_v_version_dates" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"start" timestamp(3) with time zone,
  	"end" timestamp(3) with time zone,
  	"status" "enum__ultimate_adventures_v_version_dates_status",
  	"_uuid" varchar
  );
  
  CREATE TABLE "_ultimate_adventures_v_version_cost" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"travel_mode" "enum__ultimate_adventures_v_version_cost_travel_mode",
  	"vehicle_provided" "enum__ultimate_adventures_v_version_cost_vehicle_provided",
  	"cost_per_person" numeric,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_ultimate_adventures_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE "_ultimate_adventures_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_image_id" integer,
  	"version_description" jsonb,
  	"version_summary" jsonb,
  	"version_duration" varchar,
  	"version_distance" varchar,
  	"version_highest_peak" varchar,
  	"version_difficulty" "enum__ultimate_adventures_v_version_difficulty" DEFAULT 'easy',
  	"version_overview_image_id" integer,
  	"version_overview_video_url" varchar,
  	"version_overview_video_video_id" integer,
  	"version_private_room_upgrade" varchar,
  	"version_bike_upgrade" varchar,
  	"version_is_featured" boolean DEFAULT false,
  	"version_order" numeric,
  	"version_start_end_city" varchar,
  	"version_min_cost" varchar,
  	"version_cut_out_cost" varchar,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__ultimate_adventures_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_ultimate_adventures_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "biking_adventures_tour_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"highlight" varchar
  );
  
  CREATE TABLE "biking_adventures_accommodation" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_biking_adventures_accommodation",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "biking_adventures_meal" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_biking_adventures_meal",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "biking_adventures_overview_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "biking_adventures_itineraries_accommodation" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_biking_adventures_itineraries_accommodation",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "biking_adventures_itineraries_meal" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_biking_adventures_itineraries_meal",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "biking_adventures_itineraries" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"duration" varchar,
  	"distance" varchar,
  	"highest_peak" varchar,
  	"difficulty" "enum_biking_adventures_itineraries_difficulty" DEFAULT 'easy',
  	"media_id" integer,
  	"activity" varchar,
  	"highlights" varchar,
  	"description" varchar,
  	"overnight" varchar,
  	"hotel_id" integer
  );
  
  CREATE TABLE "biking_adventures_dates" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"start" timestamp(3) with time zone,
  	"end" timestamp(3) with time zone,
  	"status" "enum_biking_adventures_dates_status"
  );
  
  CREATE TABLE "biking_adventures_cost" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"travel_mode" "enum_biking_adventures_cost_travel_mode",
  	"vehicle_provided" "enum_biking_adventures_cost_vehicle_provided",
  	"cost_per_person" numeric
  );
  
  CREATE TABLE "biking_adventures_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE "biking_adventures" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_image_id" integer,
  	"description" jsonb,
  	"summary" jsonb,
  	"duration" varchar,
  	"distance" varchar,
  	"highest_peak" varchar,
  	"difficulty" "enum_biking_adventures_difficulty" DEFAULT 'easy',
  	"overview_image_id" integer,
  	"overview_video_url" varchar,
  	"overview_video_video_id" integer,
  	"private_room_upgrade" varchar,
  	"bike_upgrade" varchar,
  	"is_featured" boolean DEFAULT false,
  	"order" numeric,
  	"start_end_city" varchar,
  	"min_cost" varchar,
  	"cut_out_cost" varchar,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_biking_adventures_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "biking_adventures_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "_biking_adventures_v_version_tour_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"highlight" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_biking_adventures_v_version_accommodation" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__biking_adventures_v_version_accommodation",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_biking_adventures_v_version_meal" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__biking_adventures_v_version_meal",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_biking_adventures_v_version_overview_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_biking_adventures_v_version_itineraries_accommodation" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__biking_adventures_v_version_itineraries_accommodation",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_biking_adventures_v_version_itineraries_meal" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__biking_adventures_v_version_itineraries_meal",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_biking_adventures_v_version_itineraries" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"duration" varchar,
  	"distance" varchar,
  	"highest_peak" varchar,
  	"difficulty" "enum__biking_adventures_v_version_itineraries_difficulty" DEFAULT 'easy',
  	"media_id" integer,
  	"activity" varchar,
  	"highlights" varchar,
  	"description" varchar,
  	"overnight" varchar,
  	"hotel_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_biking_adventures_v_version_dates" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"start" timestamp(3) with time zone,
  	"end" timestamp(3) with time zone,
  	"status" "enum__biking_adventures_v_version_dates_status",
  	"_uuid" varchar
  );
  
  CREATE TABLE "_biking_adventures_v_version_cost" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"travel_mode" "enum__biking_adventures_v_version_cost_travel_mode",
  	"vehicle_provided" "enum__biking_adventures_v_version_cost_vehicle_provided",
  	"cost_per_person" numeric,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_biking_adventures_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE "_biking_adventures_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_image_id" integer,
  	"version_description" jsonb,
  	"version_summary" jsonb,
  	"version_duration" varchar,
  	"version_distance" varchar,
  	"version_highest_peak" varchar,
  	"version_difficulty" "enum__biking_adventures_v_version_difficulty" DEFAULT 'easy',
  	"version_overview_image_id" integer,
  	"version_overview_video_url" varchar,
  	"version_overview_video_video_id" integer,
  	"version_private_room_upgrade" varchar,
  	"version_bike_upgrade" varchar,
  	"version_is_featured" boolean DEFAULT false,
  	"version_order" numeric,
  	"version_start_end_city" varchar,
  	"version_min_cost" varchar,
  	"version_cut_out_cost" varchar,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__biking_adventures_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_biking_adventures_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "holiday_packages_tour_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"highlight" varchar
  );
  
  CREATE TABLE "holiday_packages_accommodation" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_holiday_packages_accommodation",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "holiday_packages_meal" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_holiday_packages_meal",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "holiday_packages_overview_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "holiday_packages_itineraries_accommodation" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_holiday_packages_itineraries_accommodation",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "holiday_packages_itineraries_meal" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_holiday_packages_itineraries_meal",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "holiday_packages_itineraries" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"duration" varchar,
  	"distance" varchar,
  	"highest_peak" varchar,
  	"difficulty" "enum_holiday_packages_itineraries_difficulty" DEFAULT 'easy',
  	"media_id" integer,
  	"activity" varchar,
  	"highlights" varchar,
  	"description" varchar,
  	"overnight" varchar,
  	"hotel_id" integer
  );
  
  CREATE TABLE "holiday_packages_cost" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"travel_mode" "enum_holiday_packages_cost_travel_mode",
  	"vehicle_provided" "enum_holiday_packages_cost_vehicle_provided",
  	"cost_per_person" numeric
  );
  
  CREATE TABLE "holiday_packages_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE "holiday_packages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_image_id" integer,
  	"description" jsonb,
  	"summary" jsonb,
  	"duration" varchar,
  	"distance" varchar,
  	"highest_peak" varchar,
  	"difficulty" "enum_holiday_packages_difficulty" DEFAULT 'easy',
  	"overview_image_id" integer,
  	"overview_video_url" varchar,
  	"overview_video_video_id" integer,
  	"is_featured" boolean DEFAULT false,
  	"order" numeric,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_holiday_packages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "holiday_packages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "_holiday_packages_v_version_tour_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"highlight" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_holiday_packages_v_version_accommodation" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__holiday_packages_v_version_accommodation",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_holiday_packages_v_version_meal" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__holiday_packages_v_version_meal",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_holiday_packages_v_version_overview_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_holiday_packages_v_version_itineraries_accommodation" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__holiday_packages_v_version_itineraries_accommodation",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_holiday_packages_v_version_itineraries_meal" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__holiday_packages_v_version_itineraries_meal",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_holiday_packages_v_version_itineraries" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"duration" varchar,
  	"distance" varchar,
  	"highest_peak" varchar,
  	"difficulty" "enum__holiday_packages_v_version_itineraries_difficulty" DEFAULT 'easy',
  	"media_id" integer,
  	"activity" varchar,
  	"highlights" varchar,
  	"description" varchar,
  	"overnight" varchar,
  	"hotel_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_holiday_packages_v_version_cost" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"travel_mode" "enum__holiday_packages_v_version_cost_travel_mode",
  	"vehicle_provided" "enum__holiday_packages_v_version_cost_vehicle_provided",
  	"cost_per_person" numeric,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_holiday_packages_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE "_holiday_packages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_image_id" integer,
  	"version_description" jsonb,
  	"version_summary" jsonb,
  	"version_duration" varchar,
  	"version_distance" varchar,
  	"version_highest_peak" varchar,
  	"version_difficulty" "enum__holiday_packages_v_version_difficulty" DEFAULT 'easy',
  	"version_overview_image_id" integer,
  	"version_overview_video_url" varchar,
  	"version_overview_video_video_id" integer,
  	"version_is_featured" boolean DEFAULT false,
  	"version_order" numeric,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__holiday_packages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_holiday_packages_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "destinations_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE "destinations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_image_id" integer,
  	"sub_title" varchar,
  	"top_image_id" integer,
  	"description" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_destinations_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "destinations_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "_destinations_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE "_destinations_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_image_id" integer,
  	"version_sub_title" varchar,
  	"version_top_image_id" integer,
  	"version_description" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__destinations_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_destinations_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "hotels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"description" varchar,
  	"website" varchar,
  	"image_id" integer NOT NULL,
  	"star_rating" "enum_hotels_star_rating" DEFAULT 'standard',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "redirects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"from" varchar NOT NULL,
  	"to_type" "enum_redirects_to_type" DEFAULT 'reference',
  	"to_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "redirects_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" integer,
  	"pages_id" integer,
  	"biking_adventures_id" integer,
  	"holiday_packages_id" integer,
  	"destinations_id" integer
  );
  
  CREATE TABLE "forms_blocks_checkbox" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"default_value" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_country" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_email" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_message" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"message" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_number" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_select_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "forms_blocks_select" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"placeholder" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_state" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_textarea" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_emails" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"email_to" varchar,
  	"cc" varchar,
  	"bcc" varchar,
  	"reply_to" varchar,
  	"email_from" varchar,
  	"subject" varchar DEFAULT 'You''ve received a new message.' NOT NULL,
  	"message" jsonb
  );
  
  CREATE TABLE "forms" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"submit_button_label" varchar,
  	"confirmation_type" "enum_forms_confirmation_type" DEFAULT 'message',
  	"confirmation_message" jsonb,
  	"redirect_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "form_submissions_submission_data" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"field" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "form_submissions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "search_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"relation_to" varchar,
  	"category_i_d" varchar,
  	"title" varchar
  );
  
  CREATE TABLE "search" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"priority" numeric,
  	"slug" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "search_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" integer,
  	"pages_id" integer,
  	"biking_adventures_id" integer,
  	"holiday_packages_id" integer,
  	"destinations_id" integer
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_jobs_log" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"executed_at" timestamp(3) with time zone NOT NULL,
  	"completed_at" timestamp(3) with time zone NOT NULL,
  	"task_slug" "enum_payload_jobs_log_task_slug" NOT NULL,
  	"task_i_d" varchar NOT NULL,
  	"input" jsonb,
  	"output" jsonb,
  	"state" "enum_payload_jobs_log_state" NOT NULL,
  	"error" jsonb
  );
  
  CREATE TABLE "payload_jobs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"input" jsonb,
  	"completed_at" timestamp(3) with time zone,
  	"total_tried" numeric DEFAULT 0,
  	"has_error" boolean DEFAULT false,
  	"error" jsonb,
  	"task_slug" "enum_payload_jobs_task_slug",
  	"queue" varchar DEFAULT 'default',
  	"wait_until" timestamp(3) with time zone,
  	"processing" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_folders_folder_type" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_payload_folders_folder_type",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "payload_folders" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"folder_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"media_id" integer,
  	"categories_id" integer,
  	"users_id" integer,
  	"ultimate_adventures_id" integer,
  	"biking_adventures_id" integer,
  	"holiday_packages_id" integer,
  	"destinations_id" integer,
  	"hotels_id" integer,
  	"redirects_id" integer,
  	"forms_id" integer,
  	"form_submissions_id" integer,
  	"search_id" integer,
  	"payload_folders_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"light_mode_icon_id" integer,
  	"light_mode_logo_id" integer,
  	"dark_mode_icon_id" integer,
  	"dark_mode_logo_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "header_nav_items_sub_links_sub_sub_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_header_nav_items_sub_links_sub_sub_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE "header_nav_items_sub_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_header_nav_items_sub_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE "header_nav_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_header_nav_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE "header" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "header_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE "footer_quick_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_footer_quick_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE "footer_adventure_rides" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_footer_adventure_rides_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE "footer_destinations" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_footer_destinations_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE "footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"about_title" varchar,
  	"about_description" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "footer_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE "ladakh_moto" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"slogan" varchar,
  	"reg_no" varchar,
  	"gst_no" varchar,
  	"contact_person" varchar,
  	"designation" varchar,
  	"phone1" varchar,
  	"phone2" varchar,
  	"phone3" varchar,
  	"phone4" varchar,
  	"email1" varchar,
  	"email2" varchar,
  	"addressline1" varchar,
  	"addressline2" varchar,
  	"website" varchar,
  	"facebook" varchar,
  	"twitter" varchar,
  	"instagram" varchar,
  	"youtube" varchar,
  	"linkedin" varchar,
  	"whatsapp" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "sidebar_bottom_nav_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_sidebar_bottom_nav_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE "sidebar_bottom" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "sidebar_bottom_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE "sidebar_top_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_sidebar_top_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE "sidebar_top" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"subtitle" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "sidebar_top_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE "inclusion_exclusion_inclusions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"inclusion" varchar
  );
  
  CREATE TABLE "inclusion_exclusion_exclusions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"exclusion" varchar
  );
  
  CREATE TABLE "inclusion_exclusion" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "inclusion_exclusion_package_inclusions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"inclusion" varchar
  );
  
  CREATE TABLE "inclusion_exclusion_package_exclusions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"exclusion" varchar
  );
  
  CREATE TABLE "inclusion_exclusion_package" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "inclusion_exclusion_ultimate_adventure_inclusions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"inclusion" varchar
  );
  
  CREATE TABLE "inclusion_exclusion_ultimate_adventure_exclusions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"exclusion" varchar
  );
  
  CREATE TABLE "inclusion_exclusion_ultimate_adventure" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "tour_policies" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"booking_and_payment" jsonb,
  	"cancellation" jsonb,
  	"other_terms_and_policies" jsonb,
  	"please_note" jsonb,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "things_to_keep_in_mind" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"intro" jsonb,
  	"pre_tour_preparation" jsonb,
  	"group_riding_guidelines" jsonb,
  	"onthe_road" jsonb,
  	"altitude_and_health" jsonb,
  	"responsibility_towards_the_environment" jsonb,
  	"emergency_protocols" jsonb,
  	"general_etiquette" jsonb,
  	"outro" jsonb,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "riding_gears" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"enabled" boolean DEFAULT true,
  	"media_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "pages_hero_slides" ADD CONSTRAINT "pages_hero_slides_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_hero_slides" ADD CONSTRAINT "pages_hero_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_links" ADD CONSTRAINT "pages_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta" ADD CONSTRAINT "pages_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content_columns" ADD CONSTRAINT "pages_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content" ADD CONSTRAINT "pages_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_block" ADD CONSTRAINT "pages_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_block" ADD CONSTRAINT "pages_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_archive" ADD CONSTRAINT "pages_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_block" ADD CONSTRAINT "pages_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_block" ADD CONSTRAINT "pages_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content_with_media" ADD CONSTRAINT "pages_blocks_content_with_media_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_content_with_media" ADD CONSTRAINT "pages_blocks_content_with_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery_images" ADD CONSTRAINT "pages_blocks_gallery_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery_images" ADD CONSTRAINT "pages_blocks_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery" ADD CONSTRAINT "pages_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_company_intro" ADD CONSTRAINT "pages_blocks_company_intro_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_adventure_rides" ADD CONSTRAINT "pages_blocks_adventure_rides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_holiday_packages" ADD CONSTRAINT "pages_blocks_holiday_packages_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_ultimate_adventures_block" ADD CONSTRAINT "pages_blocks_ultimate_adventures_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_team" ADD CONSTRAINT "pages_blocks_team_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_contact_form" ADD CONSTRAINT "pages_blocks_contact_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_hero_slides" ADD CONSTRAINT "_pages_v_version_hero_slides_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_version_hero_slides" ADD CONSTRAINT "_pages_v_version_hero_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta_links" ADD CONSTRAINT "_pages_v_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta" ADD CONSTRAINT "_pages_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content_columns" ADD CONSTRAINT "_pages_v_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content" ADD CONSTRAINT "_pages_v_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_block" ADD CONSTRAINT "_pages_v_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_block" ADD CONSTRAINT "_pages_v_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_archive" ADD CONSTRAINT "_pages_v_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_form_block" ADD CONSTRAINT "_pages_v_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_form_block" ADD CONSTRAINT "_pages_v_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content_with_media" ADD CONSTRAINT "_pages_v_blocks_content_with_media_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content_with_media" ADD CONSTRAINT "_pages_v_blocks_content_with_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery_images" ADD CONSTRAINT "_pages_v_blocks_gallery_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery_images" ADD CONSTRAINT "_pages_v_blocks_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery" ADD CONSTRAINT "_pages_v_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_company_intro" ADD CONSTRAINT "_pages_v_blocks_company_intro_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_adventure_rides" ADD CONSTRAINT "_pages_v_blocks_adventure_rides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_holiday_packages" ADD CONSTRAINT "_pages_v_blocks_holiday_packages_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_ultimate_adventures_block" ADD CONSTRAINT "_pages_v_blocks_ultimate_adventures_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_team" ADD CONSTRAINT "_pages_v_blocks_team_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_contact_form" ADD CONSTRAINT "_pages_v_blocks_contact_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_populated_authors" ADD CONSTRAINT "posts_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts" ADD CONSTRAINT "posts_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts" ADD CONSTRAINT "posts_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_version_populated_authors" ADD CONSTRAINT "_posts_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_parent_id_posts_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "media" ADD CONSTRAINT "media_folder_id_payload_folders_id_fk" FOREIGN KEY ("folder_id") REFERENCES "public"."payload_folders"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "categories_breadcrumbs" ADD CONSTRAINT "categories_breadcrumbs_doc_id_categories_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "categories_breadcrumbs" ADD CONSTRAINT "categories_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "categories" ADD CONSTRAINT "categories_parent_id_categories_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "users" ADD CONSTRAINT "users_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "ultimate_adventures_tour_highlights" ADD CONSTRAINT "ultimate_adventures_tour_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ultimate_adventures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ultimate_adventures_accommodation" ADD CONSTRAINT "ultimate_adventures_accommodation_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."ultimate_adventures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ultimate_adventures_meal" ADD CONSTRAINT "ultimate_adventures_meal_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."ultimate_adventures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ultimate_adventures_overview_gallery" ADD CONSTRAINT "ultimate_adventures_overview_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "ultimate_adventures_overview_gallery" ADD CONSTRAINT "ultimate_adventures_overview_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ultimate_adventures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ultimate_adventures_itineraries_accommodation" ADD CONSTRAINT "ultimate_adventures_itineraries_accommodation_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."ultimate_adventures_itineraries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ultimate_adventures_itineraries_meal" ADD CONSTRAINT "ultimate_adventures_itineraries_meal_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."ultimate_adventures_itineraries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ultimate_adventures_itineraries" ADD CONSTRAINT "ultimate_adventures_itineraries_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "ultimate_adventures_itineraries" ADD CONSTRAINT "ultimate_adventures_itineraries_hotel_id_hotels_id_fk" FOREIGN KEY ("hotel_id") REFERENCES "public"."hotels"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "ultimate_adventures_itineraries" ADD CONSTRAINT "ultimate_adventures_itineraries_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ultimate_adventures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ultimate_adventures_dates" ADD CONSTRAINT "ultimate_adventures_dates_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ultimate_adventures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ultimate_adventures_cost" ADD CONSTRAINT "ultimate_adventures_cost_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ultimate_adventures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ultimate_adventures_populated_authors" ADD CONSTRAINT "ultimate_adventures_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ultimate_adventures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ultimate_adventures" ADD CONSTRAINT "ultimate_adventures_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "ultimate_adventures" ADD CONSTRAINT "ultimate_adventures_overview_image_id_media_id_fk" FOREIGN KEY ("overview_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "ultimate_adventures" ADD CONSTRAINT "ultimate_adventures_overview_video_video_id_media_id_fk" FOREIGN KEY ("overview_video_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "ultimate_adventures" ADD CONSTRAINT "ultimate_adventures_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "ultimate_adventures_rels" ADD CONSTRAINT "ultimate_adventures_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."ultimate_adventures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ultimate_adventures_rels" ADD CONSTRAINT "ultimate_adventures_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ultimate_adventures_v_version_tour_highlights" ADD CONSTRAINT "_ultimate_adventures_v_version_tour_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_ultimate_adventures_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ultimate_adventures_v_version_accommodation" ADD CONSTRAINT "_ultimate_adventures_v_version_accommodation_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_ultimate_adventures_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ultimate_adventures_v_version_meal" ADD CONSTRAINT "_ultimate_adventures_v_version_meal_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_ultimate_adventures_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ultimate_adventures_v_version_overview_gallery" ADD CONSTRAINT "_ultimate_adventures_v_version_overview_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_ultimate_adventures_v_version_overview_gallery" ADD CONSTRAINT "_ultimate_adventures_v_version_overview_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_ultimate_adventures_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ultimate_adventures_v_version_itineraries_accommodation" ADD CONSTRAINT "_ultimate_adventures_v_version_itineraries_accommodation_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_ultimate_adventures_v_version_itineraries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ultimate_adventures_v_version_itineraries_meal" ADD CONSTRAINT "_ultimate_adventures_v_version_itineraries_meal_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_ultimate_adventures_v_version_itineraries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ultimate_adventures_v_version_itineraries" ADD CONSTRAINT "_ultimate_adventures_v_version_itineraries_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_ultimate_adventures_v_version_itineraries" ADD CONSTRAINT "_ultimate_adventures_v_version_itineraries_hotel_id_hotels_id_fk" FOREIGN KEY ("hotel_id") REFERENCES "public"."hotels"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_ultimate_adventures_v_version_itineraries" ADD CONSTRAINT "_ultimate_adventures_v_version_itineraries_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_ultimate_adventures_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ultimate_adventures_v_version_dates" ADD CONSTRAINT "_ultimate_adventures_v_version_dates_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_ultimate_adventures_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ultimate_adventures_v_version_cost" ADD CONSTRAINT "_ultimate_adventures_v_version_cost_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_ultimate_adventures_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ultimate_adventures_v_version_populated_authors" ADD CONSTRAINT "_ultimate_adventures_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_ultimate_adventures_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ultimate_adventures_v" ADD CONSTRAINT "_ultimate_adventures_v_parent_id_ultimate_adventures_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."ultimate_adventures"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_ultimate_adventures_v" ADD CONSTRAINT "_ultimate_adventures_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_ultimate_adventures_v" ADD CONSTRAINT "_ultimate_adventures_v_version_overview_image_id_media_id_fk" FOREIGN KEY ("version_overview_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_ultimate_adventures_v" ADD CONSTRAINT "_ultimate_adventures_v_version_overview_video_video_id_media_id_fk" FOREIGN KEY ("version_overview_video_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_ultimate_adventures_v" ADD CONSTRAINT "_ultimate_adventures_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_ultimate_adventures_v_rels" ADD CONSTRAINT "_ultimate_adventures_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_ultimate_adventures_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ultimate_adventures_v_rels" ADD CONSTRAINT "_ultimate_adventures_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "biking_adventures_tour_highlights" ADD CONSTRAINT "biking_adventures_tour_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."biking_adventures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "biking_adventures_accommodation" ADD CONSTRAINT "biking_adventures_accommodation_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."biking_adventures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "biking_adventures_meal" ADD CONSTRAINT "biking_adventures_meal_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."biking_adventures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "biking_adventures_overview_gallery" ADD CONSTRAINT "biking_adventures_overview_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "biking_adventures_overview_gallery" ADD CONSTRAINT "biking_adventures_overview_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."biking_adventures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "biking_adventures_itineraries_accommodation" ADD CONSTRAINT "biking_adventures_itineraries_accommodation_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."biking_adventures_itineraries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "biking_adventures_itineraries_meal" ADD CONSTRAINT "biking_adventures_itineraries_meal_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."biking_adventures_itineraries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "biking_adventures_itineraries" ADD CONSTRAINT "biking_adventures_itineraries_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "biking_adventures_itineraries" ADD CONSTRAINT "biking_adventures_itineraries_hotel_id_hotels_id_fk" FOREIGN KEY ("hotel_id") REFERENCES "public"."hotels"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "biking_adventures_itineraries" ADD CONSTRAINT "biking_adventures_itineraries_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."biking_adventures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "biking_adventures_dates" ADD CONSTRAINT "biking_adventures_dates_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."biking_adventures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "biking_adventures_cost" ADD CONSTRAINT "biking_adventures_cost_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."biking_adventures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "biking_adventures_populated_authors" ADD CONSTRAINT "biking_adventures_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."biking_adventures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "biking_adventures" ADD CONSTRAINT "biking_adventures_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "biking_adventures" ADD CONSTRAINT "biking_adventures_overview_image_id_media_id_fk" FOREIGN KEY ("overview_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "biking_adventures" ADD CONSTRAINT "biking_adventures_overview_video_video_id_media_id_fk" FOREIGN KEY ("overview_video_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "biking_adventures" ADD CONSTRAINT "biking_adventures_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "biking_adventures_rels" ADD CONSTRAINT "biking_adventures_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."biking_adventures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "biking_adventures_rels" ADD CONSTRAINT "biking_adventures_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_biking_adventures_v_version_tour_highlights" ADD CONSTRAINT "_biking_adventures_v_version_tour_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_biking_adventures_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_biking_adventures_v_version_accommodation" ADD CONSTRAINT "_biking_adventures_v_version_accommodation_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_biking_adventures_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_biking_adventures_v_version_meal" ADD CONSTRAINT "_biking_adventures_v_version_meal_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_biking_adventures_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_biking_adventures_v_version_overview_gallery" ADD CONSTRAINT "_biking_adventures_v_version_overview_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_biking_adventures_v_version_overview_gallery" ADD CONSTRAINT "_biking_adventures_v_version_overview_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_biking_adventures_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_biking_adventures_v_version_itineraries_accommodation" ADD CONSTRAINT "_biking_adventures_v_version_itineraries_accommodation_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_biking_adventures_v_version_itineraries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_biking_adventures_v_version_itineraries_meal" ADD CONSTRAINT "_biking_adventures_v_version_itineraries_meal_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_biking_adventures_v_version_itineraries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_biking_adventures_v_version_itineraries" ADD CONSTRAINT "_biking_adventures_v_version_itineraries_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_biking_adventures_v_version_itineraries" ADD CONSTRAINT "_biking_adventures_v_version_itineraries_hotel_id_hotels_id_fk" FOREIGN KEY ("hotel_id") REFERENCES "public"."hotels"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_biking_adventures_v_version_itineraries" ADD CONSTRAINT "_biking_adventures_v_version_itineraries_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_biking_adventures_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_biking_adventures_v_version_dates" ADD CONSTRAINT "_biking_adventures_v_version_dates_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_biking_adventures_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_biking_adventures_v_version_cost" ADD CONSTRAINT "_biking_adventures_v_version_cost_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_biking_adventures_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_biking_adventures_v_version_populated_authors" ADD CONSTRAINT "_biking_adventures_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_biking_adventures_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_biking_adventures_v" ADD CONSTRAINT "_biking_adventures_v_parent_id_biking_adventures_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."biking_adventures"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_biking_adventures_v" ADD CONSTRAINT "_biking_adventures_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_biking_adventures_v" ADD CONSTRAINT "_biking_adventures_v_version_overview_image_id_media_id_fk" FOREIGN KEY ("version_overview_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_biking_adventures_v" ADD CONSTRAINT "_biking_adventures_v_version_overview_video_video_id_media_id_fk" FOREIGN KEY ("version_overview_video_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_biking_adventures_v" ADD CONSTRAINT "_biking_adventures_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_biking_adventures_v_rels" ADD CONSTRAINT "_biking_adventures_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_biking_adventures_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_biking_adventures_v_rels" ADD CONSTRAINT "_biking_adventures_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "holiday_packages_tour_highlights" ADD CONSTRAINT "holiday_packages_tour_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."holiday_packages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "holiday_packages_accommodation" ADD CONSTRAINT "holiday_packages_accommodation_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."holiday_packages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "holiday_packages_meal" ADD CONSTRAINT "holiday_packages_meal_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."holiday_packages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "holiday_packages_overview_gallery" ADD CONSTRAINT "holiday_packages_overview_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "holiday_packages_overview_gallery" ADD CONSTRAINT "holiday_packages_overview_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."holiday_packages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "holiday_packages_itineraries_accommodation" ADD CONSTRAINT "holiday_packages_itineraries_accommodation_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."holiday_packages_itineraries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "holiday_packages_itineraries_meal" ADD CONSTRAINT "holiday_packages_itineraries_meal_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."holiday_packages_itineraries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "holiday_packages_itineraries" ADD CONSTRAINT "holiday_packages_itineraries_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "holiday_packages_itineraries" ADD CONSTRAINT "holiday_packages_itineraries_hotel_id_hotels_id_fk" FOREIGN KEY ("hotel_id") REFERENCES "public"."hotels"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "holiday_packages_itineraries" ADD CONSTRAINT "holiday_packages_itineraries_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."holiday_packages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "holiday_packages_cost" ADD CONSTRAINT "holiday_packages_cost_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."holiday_packages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "holiday_packages_populated_authors" ADD CONSTRAINT "holiday_packages_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."holiday_packages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "holiday_packages" ADD CONSTRAINT "holiday_packages_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "holiday_packages" ADD CONSTRAINT "holiday_packages_overview_image_id_media_id_fk" FOREIGN KEY ("overview_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "holiday_packages" ADD CONSTRAINT "holiday_packages_overview_video_video_id_media_id_fk" FOREIGN KEY ("overview_video_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "holiday_packages" ADD CONSTRAINT "holiday_packages_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "holiday_packages_rels" ADD CONSTRAINT "holiday_packages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."holiday_packages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "holiday_packages_rels" ADD CONSTRAINT "holiday_packages_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_holiday_packages_v_version_tour_highlights" ADD CONSTRAINT "_holiday_packages_v_version_tour_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_holiday_packages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_holiday_packages_v_version_accommodation" ADD CONSTRAINT "_holiday_packages_v_version_accommodation_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_holiday_packages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_holiday_packages_v_version_meal" ADD CONSTRAINT "_holiday_packages_v_version_meal_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_holiday_packages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_holiday_packages_v_version_overview_gallery" ADD CONSTRAINT "_holiday_packages_v_version_overview_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_holiday_packages_v_version_overview_gallery" ADD CONSTRAINT "_holiday_packages_v_version_overview_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_holiday_packages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_holiday_packages_v_version_itineraries_accommodation" ADD CONSTRAINT "_holiday_packages_v_version_itineraries_accommodation_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_holiday_packages_v_version_itineraries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_holiday_packages_v_version_itineraries_meal" ADD CONSTRAINT "_holiday_packages_v_version_itineraries_meal_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_holiday_packages_v_version_itineraries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_holiday_packages_v_version_itineraries" ADD CONSTRAINT "_holiday_packages_v_version_itineraries_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_holiday_packages_v_version_itineraries" ADD CONSTRAINT "_holiday_packages_v_version_itineraries_hotel_id_hotels_id_fk" FOREIGN KEY ("hotel_id") REFERENCES "public"."hotels"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_holiday_packages_v_version_itineraries" ADD CONSTRAINT "_holiday_packages_v_version_itineraries_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_holiday_packages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_holiday_packages_v_version_cost" ADD CONSTRAINT "_holiday_packages_v_version_cost_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_holiday_packages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_holiday_packages_v_version_populated_authors" ADD CONSTRAINT "_holiday_packages_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_holiday_packages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_holiday_packages_v" ADD CONSTRAINT "_holiday_packages_v_parent_id_holiday_packages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."holiday_packages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_holiday_packages_v" ADD CONSTRAINT "_holiday_packages_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_holiday_packages_v" ADD CONSTRAINT "_holiday_packages_v_version_overview_image_id_media_id_fk" FOREIGN KEY ("version_overview_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_holiday_packages_v" ADD CONSTRAINT "_holiday_packages_v_version_overview_video_video_id_media_id_fk" FOREIGN KEY ("version_overview_video_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_holiday_packages_v" ADD CONSTRAINT "_holiday_packages_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_holiday_packages_v_rels" ADD CONSTRAINT "_holiday_packages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_holiday_packages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_holiday_packages_v_rels" ADD CONSTRAINT "_holiday_packages_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "destinations_populated_authors" ADD CONSTRAINT "destinations_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."destinations"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "destinations" ADD CONSTRAINT "destinations_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "destinations" ADD CONSTRAINT "destinations_top_image_id_media_id_fk" FOREIGN KEY ("top_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "destinations" ADD CONSTRAINT "destinations_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "destinations_rels" ADD CONSTRAINT "destinations_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."destinations"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "destinations_rels" ADD CONSTRAINT "destinations_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_destinations_v_version_populated_authors" ADD CONSTRAINT "_destinations_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_destinations_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_destinations_v" ADD CONSTRAINT "_destinations_v_parent_id_destinations_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."destinations"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_destinations_v" ADD CONSTRAINT "_destinations_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_destinations_v" ADD CONSTRAINT "_destinations_v_version_top_image_id_media_id_fk" FOREIGN KEY ("version_top_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_destinations_v" ADD CONSTRAINT "_destinations_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_destinations_v_rels" ADD CONSTRAINT "_destinations_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_destinations_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_destinations_v_rels" ADD CONSTRAINT "_destinations_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hotels" ADD CONSTRAINT "hotels_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_biking_adventures_fk" FOREIGN KEY ("biking_adventures_id") REFERENCES "public"."biking_adventures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_holiday_packages_fk" FOREIGN KEY ("holiday_packages_id") REFERENCES "public"."holiday_packages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_destinations_fk" FOREIGN KEY ("destinations_id") REFERENCES "public"."destinations"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_checkbox" ADD CONSTRAINT "forms_blocks_checkbox_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_country" ADD CONSTRAINT "forms_blocks_country_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_email" ADD CONSTRAINT "forms_blocks_email_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_message" ADD CONSTRAINT "forms_blocks_message_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_number" ADD CONSTRAINT "forms_blocks_number_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_select_options" ADD CONSTRAINT "forms_blocks_select_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_select"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_select" ADD CONSTRAINT "forms_blocks_select_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_state" ADD CONSTRAINT "forms_blocks_state_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_text" ADD CONSTRAINT "forms_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_textarea" ADD CONSTRAINT "forms_blocks_textarea_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_emails" ADD CONSTRAINT "forms_emails_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "form_submissions_submission_data" ADD CONSTRAINT "form_submissions_submission_data_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "form_submissions" ADD CONSTRAINT "form_submissions_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "search_categories" ADD CONSTRAINT "search_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search" ADD CONSTRAINT "search_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_biking_adventures_fk" FOREIGN KEY ("biking_adventures_id") REFERENCES "public"."biking_adventures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_holiday_packages_fk" FOREIGN KEY ("holiday_packages_id") REFERENCES "public"."holiday_packages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_destinations_fk" FOREIGN KEY ("destinations_id") REFERENCES "public"."destinations"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_jobs_log" ADD CONSTRAINT "payload_jobs_log_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_folders_folder_type" ADD CONSTRAINT "payload_folders_folder_type_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_folders"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_folders" ADD CONSTRAINT "payload_folders_folder_id_payload_folders_id_fk" FOREIGN KEY ("folder_id") REFERENCES "public"."payload_folders"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_ultimate_adventures_fk" FOREIGN KEY ("ultimate_adventures_id") REFERENCES "public"."ultimate_adventures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_biking_adventures_fk" FOREIGN KEY ("biking_adventures_id") REFERENCES "public"."biking_adventures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_holiday_packages_fk" FOREIGN KEY ("holiday_packages_id") REFERENCES "public"."holiday_packages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_destinations_fk" FOREIGN KEY ("destinations_id") REFERENCES "public"."destinations"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_hotels_fk" FOREIGN KEY ("hotels_id") REFERENCES "public"."hotels"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_redirects_fk" FOREIGN KEY ("redirects_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_forms_fk" FOREIGN KEY ("forms_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_form_submissions_fk" FOREIGN KEY ("form_submissions_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_search_fk" FOREIGN KEY ("search_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_payload_folders_fk" FOREIGN KEY ("payload_folders_id") REFERENCES "public"."payload_folders"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "settings" ADD CONSTRAINT "settings_light_mode_icon_id_media_id_fk" FOREIGN KEY ("light_mode_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "settings" ADD CONSTRAINT "settings_light_mode_logo_id_media_id_fk" FOREIGN KEY ("light_mode_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "settings" ADD CONSTRAINT "settings_dark_mode_icon_id_media_id_fk" FOREIGN KEY ("dark_mode_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "settings" ADD CONSTRAINT "settings_dark_mode_logo_id_media_id_fk" FOREIGN KEY ("dark_mode_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_nav_items_sub_links_sub_sub_links" ADD CONSTRAINT "header_nav_items_sub_links_sub_sub_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_nav_items_sub_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_nav_items_sub_links" ADD CONSTRAINT "header_nav_items_sub_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_nav_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_nav_items" ADD CONSTRAINT "header_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_quick_links" ADD CONSTRAINT "footer_quick_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_adventure_rides" ADD CONSTRAINT "footer_adventure_rides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_destinations" ADD CONSTRAINT "footer_destinations_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "sidebar_bottom_nav_items" ADD CONSTRAINT "sidebar_bottom_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."sidebar_bottom"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "sidebar_bottom_rels" ADD CONSTRAINT "sidebar_bottom_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."sidebar_bottom"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "sidebar_bottom_rels" ADD CONSTRAINT "sidebar_bottom_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "sidebar_bottom_rels" ADD CONSTRAINT "sidebar_bottom_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "sidebar_top_links" ADD CONSTRAINT "sidebar_top_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."sidebar_top"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "sidebar_top_rels" ADD CONSTRAINT "sidebar_top_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."sidebar_top"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "sidebar_top_rels" ADD CONSTRAINT "sidebar_top_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "sidebar_top_rels" ADD CONSTRAINT "sidebar_top_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "inclusion_exclusion_inclusions" ADD CONSTRAINT "inclusion_exclusion_inclusions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."inclusion_exclusion"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "inclusion_exclusion_exclusions" ADD CONSTRAINT "inclusion_exclusion_exclusions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."inclusion_exclusion"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "inclusion_exclusion_package_inclusions" ADD CONSTRAINT "inclusion_exclusion_package_inclusions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."inclusion_exclusion_package"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "inclusion_exclusion_package_exclusions" ADD CONSTRAINT "inclusion_exclusion_package_exclusions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."inclusion_exclusion_package"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "inclusion_exclusion_ultimate_adventure_inclusions" ADD CONSTRAINT "inclusion_exclusion_ultimate_adventure_inclusions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."inclusion_exclusion_ultimate_adventure"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "inclusion_exclusion_ultimate_adventure_exclusions" ADD CONSTRAINT "inclusion_exclusion_ultimate_adventure_exclusions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."inclusion_exclusion_ultimate_adventure"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "riding_gears" ADD CONSTRAINT "riding_gears_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pages_hero_slides_order_idx" ON "pages_hero_slides" USING btree ("_order");
  CREATE INDEX "pages_hero_slides_parent_id_idx" ON "pages_hero_slides" USING btree ("_parent_id");
  CREATE INDEX "pages_hero_slides_image_idx" ON "pages_hero_slides" USING btree ("image_id");
  CREATE INDEX "pages_blocks_cta_links_order_idx" ON "pages_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_links_parent_id_idx" ON "pages_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_order_idx" ON "pages_blocks_cta" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_parent_id_idx" ON "pages_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_path_idx" ON "pages_blocks_cta" USING btree ("_path");
  CREATE INDEX "pages_blocks_content_columns_order_idx" ON "pages_blocks_content_columns" USING btree ("_order");
  CREATE INDEX "pages_blocks_content_columns_parent_id_idx" ON "pages_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_order_idx" ON "pages_blocks_content" USING btree ("_order");
  CREATE INDEX "pages_blocks_content_parent_id_idx" ON "pages_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_path_idx" ON "pages_blocks_content" USING btree ("_path");
  CREATE INDEX "pages_blocks_media_block_order_idx" ON "pages_blocks_media_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_media_block_parent_id_idx" ON "pages_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_media_block_path_idx" ON "pages_blocks_media_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_media_block_media_idx" ON "pages_blocks_media_block" USING btree ("media_id");
  CREATE INDEX "pages_blocks_archive_order_idx" ON "pages_blocks_archive" USING btree ("_order");
  CREATE INDEX "pages_blocks_archive_parent_id_idx" ON "pages_blocks_archive" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_archive_path_idx" ON "pages_blocks_archive" USING btree ("_path");
  CREATE INDEX "pages_blocks_form_block_order_idx" ON "pages_blocks_form_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_form_block_parent_id_idx" ON "pages_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_form_block_path_idx" ON "pages_blocks_form_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_form_block_form_idx" ON "pages_blocks_form_block" USING btree ("form_id");
  CREATE INDEX "pages_blocks_content_with_media_order_idx" ON "pages_blocks_content_with_media" USING btree ("_order");
  CREATE INDEX "pages_blocks_content_with_media_parent_id_idx" ON "pages_blocks_content_with_media" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_with_media_path_idx" ON "pages_blocks_content_with_media" USING btree ("_path");
  CREATE INDEX "pages_blocks_content_with_media_media_idx" ON "pages_blocks_content_with_media" USING btree ("media_id");
  CREATE INDEX "pages_blocks_gallery_images_order_idx" ON "pages_blocks_gallery_images" USING btree ("_order");
  CREATE INDEX "pages_blocks_gallery_images_parent_id_idx" ON "pages_blocks_gallery_images" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_gallery_images_image_idx" ON "pages_blocks_gallery_images" USING btree ("image_id");
  CREATE INDEX "pages_blocks_gallery_order_idx" ON "pages_blocks_gallery" USING btree ("_order");
  CREATE INDEX "pages_blocks_gallery_parent_id_idx" ON "pages_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_gallery_path_idx" ON "pages_blocks_gallery" USING btree ("_path");
  CREATE INDEX "pages_blocks_company_intro_order_idx" ON "pages_blocks_company_intro" USING btree ("_order");
  CREATE INDEX "pages_blocks_company_intro_parent_id_idx" ON "pages_blocks_company_intro" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_company_intro_path_idx" ON "pages_blocks_company_intro" USING btree ("_path");
  CREATE INDEX "pages_blocks_adventure_rides_order_idx" ON "pages_blocks_adventure_rides" USING btree ("_order");
  CREATE INDEX "pages_blocks_adventure_rides_parent_id_idx" ON "pages_blocks_adventure_rides" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_adventure_rides_path_idx" ON "pages_blocks_adventure_rides" USING btree ("_path");
  CREATE INDEX "pages_blocks_holiday_packages_order_idx" ON "pages_blocks_holiday_packages" USING btree ("_order");
  CREATE INDEX "pages_blocks_holiday_packages_parent_id_idx" ON "pages_blocks_holiday_packages" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_holiday_packages_path_idx" ON "pages_blocks_holiday_packages" USING btree ("_path");
  CREATE INDEX "pages_blocks_ultimate_adventures_block_order_idx" ON "pages_blocks_ultimate_adventures_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_ultimate_adventures_block_parent_id_idx" ON "pages_blocks_ultimate_adventures_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_ultimate_adventures_block_path_idx" ON "pages_blocks_ultimate_adventures_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_team_order_idx" ON "pages_blocks_team" USING btree ("_order");
  CREATE INDEX "pages_blocks_team_parent_id_idx" ON "pages_blocks_team" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_team_path_idx" ON "pages_blocks_team" USING btree ("_path");
  CREATE INDEX "pages_blocks_contact_form_order_idx" ON "pages_blocks_contact_form" USING btree ("_order");
  CREATE INDEX "pages_blocks_contact_form_parent_id_idx" ON "pages_blocks_contact_form" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_contact_form_path_idx" ON "pages_blocks_contact_form" USING btree ("_path");
  CREATE INDEX "pages_meta_meta_image_idx" ON "pages" USING btree ("meta_image_id");
  CREATE UNIQUE INDEX "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX "pages_rels_pages_id_idx" ON "pages_rels" USING btree ("pages_id");
  CREATE INDEX "pages_rels_posts_id_idx" ON "pages_rels" USING btree ("posts_id");
  CREATE INDEX "pages_rels_categories_id_idx" ON "pages_rels" USING btree ("categories_id");
  CREATE INDEX "_pages_v_version_hero_slides_order_idx" ON "_pages_v_version_hero_slides" USING btree ("_order");
  CREATE INDEX "_pages_v_version_hero_slides_parent_id_idx" ON "_pages_v_version_hero_slides" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_hero_slides_image_idx" ON "_pages_v_version_hero_slides" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_cta_links_order_idx" ON "_pages_v_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta_links_parent_id_idx" ON "_pages_v_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_order_idx" ON "_pages_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta_parent_id_idx" ON "_pages_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_path_idx" ON "_pages_v_blocks_cta" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_content_columns_order_idx" ON "_pages_v_blocks_content_columns" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_content_columns_parent_id_idx" ON "_pages_v_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_order_idx" ON "_pages_v_blocks_content" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_content_parent_id_idx" ON "_pages_v_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_path_idx" ON "_pages_v_blocks_content" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_media_block_order_idx" ON "_pages_v_blocks_media_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_media_block_parent_id_idx" ON "_pages_v_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_media_block_path_idx" ON "_pages_v_blocks_media_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_media_block_media_idx" ON "_pages_v_blocks_media_block" USING btree ("media_id");
  CREATE INDEX "_pages_v_blocks_archive_order_idx" ON "_pages_v_blocks_archive" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_archive_parent_id_idx" ON "_pages_v_blocks_archive" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_archive_path_idx" ON "_pages_v_blocks_archive" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_form_block_order_idx" ON "_pages_v_blocks_form_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_form_block_parent_id_idx" ON "_pages_v_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_form_block_path_idx" ON "_pages_v_blocks_form_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_form_block_form_idx" ON "_pages_v_blocks_form_block" USING btree ("form_id");
  CREATE INDEX "_pages_v_blocks_content_with_media_order_idx" ON "_pages_v_blocks_content_with_media" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_content_with_media_parent_id_idx" ON "_pages_v_blocks_content_with_media" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_with_media_path_idx" ON "_pages_v_blocks_content_with_media" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_content_with_media_media_idx" ON "_pages_v_blocks_content_with_media" USING btree ("media_id");
  CREATE INDEX "_pages_v_blocks_gallery_images_order_idx" ON "_pages_v_blocks_gallery_images" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_gallery_images_parent_id_idx" ON "_pages_v_blocks_gallery_images" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_gallery_images_image_idx" ON "_pages_v_blocks_gallery_images" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_gallery_order_idx" ON "_pages_v_blocks_gallery" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_gallery_parent_id_idx" ON "_pages_v_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_gallery_path_idx" ON "_pages_v_blocks_gallery" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_company_intro_order_idx" ON "_pages_v_blocks_company_intro" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_company_intro_parent_id_idx" ON "_pages_v_blocks_company_intro" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_company_intro_path_idx" ON "_pages_v_blocks_company_intro" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_adventure_rides_order_idx" ON "_pages_v_blocks_adventure_rides" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_adventure_rides_parent_id_idx" ON "_pages_v_blocks_adventure_rides" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_adventure_rides_path_idx" ON "_pages_v_blocks_adventure_rides" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_holiday_packages_order_idx" ON "_pages_v_blocks_holiday_packages" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_holiday_packages_parent_id_idx" ON "_pages_v_blocks_holiday_packages" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_holiday_packages_path_idx" ON "_pages_v_blocks_holiday_packages" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_ultimate_adventures_block_order_idx" ON "_pages_v_blocks_ultimate_adventures_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_ultimate_adventures_block_parent_id_idx" ON "_pages_v_blocks_ultimate_adventures_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_ultimate_adventures_block_path_idx" ON "_pages_v_blocks_ultimate_adventures_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_team_order_idx" ON "_pages_v_blocks_team" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_team_parent_id_idx" ON "_pages_v_blocks_team" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_team_path_idx" ON "_pages_v_blocks_team" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_contact_form_order_idx" ON "_pages_v_blocks_contact_form" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_contact_form_parent_id_idx" ON "_pages_v_blocks_contact_form" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_contact_form_path_idx" ON "_pages_v_blocks_contact_form" USING btree ("_path");
  CREATE INDEX "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX "_pages_v_version_meta_version_meta_image_idx" ON "_pages_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX "_pages_v_autosave_idx" ON "_pages_v" USING btree ("autosave");
  CREATE INDEX "_pages_v_rels_order_idx" ON "_pages_v_rels" USING btree ("order");
  CREATE INDEX "_pages_v_rels_parent_idx" ON "_pages_v_rels" USING btree ("parent_id");
  CREATE INDEX "_pages_v_rels_path_idx" ON "_pages_v_rels" USING btree ("path");
  CREATE INDEX "_pages_v_rels_pages_id_idx" ON "_pages_v_rels" USING btree ("pages_id");
  CREATE INDEX "_pages_v_rels_posts_id_idx" ON "_pages_v_rels" USING btree ("posts_id");
  CREATE INDEX "_pages_v_rels_categories_id_idx" ON "_pages_v_rels" USING btree ("categories_id");
  CREATE INDEX "posts_populated_authors_order_idx" ON "posts_populated_authors" USING btree ("_order");
  CREATE INDEX "posts_populated_authors_parent_id_idx" ON "posts_populated_authors" USING btree ("_parent_id");
  CREATE INDEX "posts_hero_image_idx" ON "posts" USING btree ("hero_image_id");
  CREATE INDEX "posts_meta_meta_image_idx" ON "posts" USING btree ("meta_image_id");
  CREATE UNIQUE INDEX "posts_slug_idx" ON "posts" USING btree ("slug");
  CREATE INDEX "posts_updated_at_idx" ON "posts" USING btree ("updated_at");
  CREATE INDEX "posts_created_at_idx" ON "posts" USING btree ("created_at");
  CREATE INDEX "posts__status_idx" ON "posts" USING btree ("_status");
  CREATE INDEX "posts_rels_order_idx" ON "posts_rels" USING btree ("order");
  CREATE INDEX "posts_rels_parent_idx" ON "posts_rels" USING btree ("parent_id");
  CREATE INDEX "posts_rels_path_idx" ON "posts_rels" USING btree ("path");
  CREATE INDEX "posts_rels_posts_id_idx" ON "posts_rels" USING btree ("posts_id");
  CREATE INDEX "posts_rels_categories_id_idx" ON "posts_rels" USING btree ("categories_id");
  CREATE INDEX "posts_rels_users_id_idx" ON "posts_rels" USING btree ("users_id");
  CREATE INDEX "_posts_v_version_populated_authors_order_idx" ON "_posts_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX "_posts_v_version_populated_authors_parent_id_idx" ON "_posts_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_parent_idx" ON "_posts_v" USING btree ("parent_id");
  CREATE INDEX "_posts_v_version_version_hero_image_idx" ON "_posts_v" USING btree ("version_hero_image_id");
  CREATE INDEX "_posts_v_version_meta_version_meta_image_idx" ON "_posts_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_posts_v_version_version_slug_idx" ON "_posts_v" USING btree ("version_slug");
  CREATE INDEX "_posts_v_version_version_updated_at_idx" ON "_posts_v" USING btree ("version_updated_at");
  CREATE INDEX "_posts_v_version_version_created_at_idx" ON "_posts_v" USING btree ("version_created_at");
  CREATE INDEX "_posts_v_version_version__status_idx" ON "_posts_v" USING btree ("version__status");
  CREATE INDEX "_posts_v_created_at_idx" ON "_posts_v" USING btree ("created_at");
  CREATE INDEX "_posts_v_updated_at_idx" ON "_posts_v" USING btree ("updated_at");
  CREATE INDEX "_posts_v_latest_idx" ON "_posts_v" USING btree ("latest");
  CREATE INDEX "_posts_v_autosave_idx" ON "_posts_v" USING btree ("autosave");
  CREATE INDEX "_posts_v_rels_order_idx" ON "_posts_v_rels" USING btree ("order");
  CREATE INDEX "_posts_v_rels_parent_idx" ON "_posts_v_rels" USING btree ("parent_id");
  CREATE INDEX "_posts_v_rels_path_idx" ON "_posts_v_rels" USING btree ("path");
  CREATE INDEX "_posts_v_rels_posts_id_idx" ON "_posts_v_rels" USING btree ("posts_id");
  CREATE INDEX "_posts_v_rels_categories_id_idx" ON "_posts_v_rels" USING btree ("categories_id");
  CREATE INDEX "_posts_v_rels_users_id_idx" ON "_posts_v_rels" USING btree ("users_id");
  CREATE INDEX "media_folder_idx" ON "media" USING btree ("folder_id");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX "media_sizes_square_sizes_square_filename_idx" ON "media" USING btree ("sizes_square_filename");
  CREATE INDEX "media_sizes_small_sizes_small_filename_idx" ON "media" USING btree ("sizes_small_filename");
  CREATE INDEX "media_sizes_medium_sizes_medium_filename_idx" ON "media" USING btree ("sizes_medium_filename");
  CREATE INDEX "media_sizes_large_sizes_large_filename_idx" ON "media" USING btree ("sizes_large_filename");
  CREATE INDEX "media_sizes_xlarge_sizes_xlarge_filename_idx" ON "media" USING btree ("sizes_xlarge_filename");
  CREATE INDEX "media_sizes_og_sizes_og_filename_idx" ON "media" USING btree ("sizes_og_filename");
  CREATE INDEX "categories_breadcrumbs_order_idx" ON "categories_breadcrumbs" USING btree ("_order");
  CREATE INDEX "categories_breadcrumbs_parent_id_idx" ON "categories_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX "categories_breadcrumbs_doc_idx" ON "categories_breadcrumbs" USING btree ("doc_id");
  CREATE UNIQUE INDEX "categories_slug_idx" ON "categories" USING btree ("slug");
  CREATE INDEX "categories_parent_idx" ON "categories" USING btree ("parent_id");
  CREATE INDEX "categories_updated_at_idx" ON "categories" USING btree ("updated_at");
  CREATE INDEX "categories_created_at_idx" ON "categories" USING btree ("created_at");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_avatar_idx" ON "users" USING btree ("avatar_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "ultimate_adventures_tour_highlights_order_idx" ON "ultimate_adventures_tour_highlights" USING btree ("_order");
  CREATE INDEX "ultimate_adventures_tour_highlights_parent_id_idx" ON "ultimate_adventures_tour_highlights" USING btree ("_parent_id");
  CREATE INDEX "ultimate_adventures_accommodation_order_idx" ON "ultimate_adventures_accommodation" USING btree ("order");
  CREATE INDEX "ultimate_adventures_accommodation_parent_idx" ON "ultimate_adventures_accommodation" USING btree ("parent_id");
  CREATE INDEX "ultimate_adventures_meal_order_idx" ON "ultimate_adventures_meal" USING btree ("order");
  CREATE INDEX "ultimate_adventures_meal_parent_idx" ON "ultimate_adventures_meal" USING btree ("parent_id");
  CREATE INDEX "ultimate_adventures_overview_gallery_order_idx" ON "ultimate_adventures_overview_gallery" USING btree ("_order");
  CREATE INDEX "ultimate_adventures_overview_gallery_parent_id_idx" ON "ultimate_adventures_overview_gallery" USING btree ("_parent_id");
  CREATE INDEX "ultimate_adventures_overview_gallery_image_idx" ON "ultimate_adventures_overview_gallery" USING btree ("image_id");
  CREATE INDEX "ultimate_adventures_itineraries_accommodation_order_idx" ON "ultimate_adventures_itineraries_accommodation" USING btree ("order");
  CREATE INDEX "ultimate_adventures_itineraries_accommodation_parent_idx" ON "ultimate_adventures_itineraries_accommodation" USING btree ("parent_id");
  CREATE INDEX "ultimate_adventures_itineraries_meal_order_idx" ON "ultimate_adventures_itineraries_meal" USING btree ("order");
  CREATE INDEX "ultimate_adventures_itineraries_meal_parent_idx" ON "ultimate_adventures_itineraries_meal" USING btree ("parent_id");
  CREATE INDEX "ultimate_adventures_itineraries_order_idx" ON "ultimate_adventures_itineraries" USING btree ("_order");
  CREATE INDEX "ultimate_adventures_itineraries_parent_id_idx" ON "ultimate_adventures_itineraries" USING btree ("_parent_id");
  CREATE INDEX "ultimate_adventures_itineraries_media_idx" ON "ultimate_adventures_itineraries" USING btree ("media_id");
  CREATE INDEX "ultimate_adventures_itineraries_hotel_idx" ON "ultimate_adventures_itineraries" USING btree ("hotel_id");
  CREATE INDEX "ultimate_adventures_dates_order_idx" ON "ultimate_adventures_dates" USING btree ("_order");
  CREATE INDEX "ultimate_adventures_dates_parent_id_idx" ON "ultimate_adventures_dates" USING btree ("_parent_id");
  CREATE INDEX "ultimate_adventures_cost_order_idx" ON "ultimate_adventures_cost" USING btree ("_order");
  CREATE INDEX "ultimate_adventures_cost_parent_id_idx" ON "ultimate_adventures_cost" USING btree ("_parent_id");
  CREATE INDEX "ultimate_adventures_populated_authors_order_idx" ON "ultimate_adventures_populated_authors" USING btree ("_order");
  CREATE INDEX "ultimate_adventures_populated_authors_parent_id_idx" ON "ultimate_adventures_populated_authors" USING btree ("_parent_id");
  CREATE INDEX "ultimate_adventures_hero_image_idx" ON "ultimate_adventures" USING btree ("hero_image_id");
  CREATE INDEX "ultimate_adventures_overview_image_idx" ON "ultimate_adventures" USING btree ("overview_image_id");
  CREATE INDEX "ultimate_adventures_overview_video_overview_video_video_idx" ON "ultimate_adventures" USING btree ("overview_video_video_id");
  CREATE INDEX "ultimate_adventures_meta_meta_image_idx" ON "ultimate_adventures" USING btree ("meta_image_id");
  CREATE INDEX "ultimate_adventures_slug_idx" ON "ultimate_adventures" USING btree ("slug");
  CREATE INDEX "ultimate_adventures_updated_at_idx" ON "ultimate_adventures" USING btree ("updated_at");
  CREATE INDEX "ultimate_adventures_created_at_idx" ON "ultimate_adventures" USING btree ("created_at");
  CREATE INDEX "ultimate_adventures__status_idx" ON "ultimate_adventures" USING btree ("_status");
  CREATE INDEX "ultimate_adventures_rels_order_idx" ON "ultimate_adventures_rels" USING btree ("order");
  CREATE INDEX "ultimate_adventures_rels_parent_idx" ON "ultimate_adventures_rels" USING btree ("parent_id");
  CREATE INDEX "ultimate_adventures_rels_path_idx" ON "ultimate_adventures_rels" USING btree ("path");
  CREATE INDEX "ultimate_adventures_rels_users_id_idx" ON "ultimate_adventures_rels" USING btree ("users_id");
  CREATE INDEX "_ultimate_adventures_v_version_tour_highlights_order_idx" ON "_ultimate_adventures_v_version_tour_highlights" USING btree ("_order");
  CREATE INDEX "_ultimate_adventures_v_version_tour_highlights_parent_id_idx" ON "_ultimate_adventures_v_version_tour_highlights" USING btree ("_parent_id");
  CREATE INDEX "_ultimate_adventures_v_version_accommodation_order_idx" ON "_ultimate_adventures_v_version_accommodation" USING btree ("order");
  CREATE INDEX "_ultimate_adventures_v_version_accommodation_parent_idx" ON "_ultimate_adventures_v_version_accommodation" USING btree ("parent_id");
  CREATE INDEX "_ultimate_adventures_v_version_meal_order_idx" ON "_ultimate_adventures_v_version_meal" USING btree ("order");
  CREATE INDEX "_ultimate_adventures_v_version_meal_parent_idx" ON "_ultimate_adventures_v_version_meal" USING btree ("parent_id");
  CREATE INDEX "_ultimate_adventures_v_version_overview_gallery_order_idx" ON "_ultimate_adventures_v_version_overview_gallery" USING btree ("_order");
  CREATE INDEX "_ultimate_adventures_v_version_overview_gallery_parent_id_idx" ON "_ultimate_adventures_v_version_overview_gallery" USING btree ("_parent_id");
  CREATE INDEX "_ultimate_adventures_v_version_overview_gallery_image_idx" ON "_ultimate_adventures_v_version_overview_gallery" USING btree ("image_id");
  CREATE INDEX "_ultimate_adventures_v_version_itineraries_accommodation_order_idx" ON "_ultimate_adventures_v_version_itineraries_accommodation" USING btree ("order");
  CREATE INDEX "_ultimate_adventures_v_version_itineraries_accommodation_parent_idx" ON "_ultimate_adventures_v_version_itineraries_accommodation" USING btree ("parent_id");
  CREATE INDEX "_ultimate_adventures_v_version_itineraries_meal_order_idx" ON "_ultimate_adventures_v_version_itineraries_meal" USING btree ("order");
  CREATE INDEX "_ultimate_adventures_v_version_itineraries_meal_parent_idx" ON "_ultimate_adventures_v_version_itineraries_meal" USING btree ("parent_id");
  CREATE INDEX "_ultimate_adventures_v_version_itineraries_order_idx" ON "_ultimate_adventures_v_version_itineraries" USING btree ("_order");
  CREATE INDEX "_ultimate_adventures_v_version_itineraries_parent_id_idx" ON "_ultimate_adventures_v_version_itineraries" USING btree ("_parent_id");
  CREATE INDEX "_ultimate_adventures_v_version_itineraries_media_idx" ON "_ultimate_adventures_v_version_itineraries" USING btree ("media_id");
  CREATE INDEX "_ultimate_adventures_v_version_itineraries_hotel_idx" ON "_ultimate_adventures_v_version_itineraries" USING btree ("hotel_id");
  CREATE INDEX "_ultimate_adventures_v_version_dates_order_idx" ON "_ultimate_adventures_v_version_dates" USING btree ("_order");
  CREATE INDEX "_ultimate_adventures_v_version_dates_parent_id_idx" ON "_ultimate_adventures_v_version_dates" USING btree ("_parent_id");
  CREATE INDEX "_ultimate_adventures_v_version_cost_order_idx" ON "_ultimate_adventures_v_version_cost" USING btree ("_order");
  CREATE INDEX "_ultimate_adventures_v_version_cost_parent_id_idx" ON "_ultimate_adventures_v_version_cost" USING btree ("_parent_id");
  CREATE INDEX "_ultimate_adventures_v_version_populated_authors_order_idx" ON "_ultimate_adventures_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX "_ultimate_adventures_v_version_populated_authors_parent_id_idx" ON "_ultimate_adventures_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX "_ultimate_adventures_v_parent_idx" ON "_ultimate_adventures_v" USING btree ("parent_id");
  CREATE INDEX "_ultimate_adventures_v_version_version_hero_image_idx" ON "_ultimate_adventures_v" USING btree ("version_hero_image_id");
  CREATE INDEX "_ultimate_adventures_v_version_version_overview_image_idx" ON "_ultimate_adventures_v" USING btree ("version_overview_image_id");
  CREATE INDEX "_ultimate_adventures_v_version_overview_video_version_ov_idx" ON "_ultimate_adventures_v" USING btree ("version_overview_video_video_id");
  CREATE INDEX "_ultimate_adventures_v_version_meta_version_meta_image_idx" ON "_ultimate_adventures_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_ultimate_adventures_v_version_version_slug_idx" ON "_ultimate_adventures_v" USING btree ("version_slug");
  CREATE INDEX "_ultimate_adventures_v_version_version_updated_at_idx" ON "_ultimate_adventures_v" USING btree ("version_updated_at");
  CREATE INDEX "_ultimate_adventures_v_version_version_created_at_idx" ON "_ultimate_adventures_v" USING btree ("version_created_at");
  CREATE INDEX "_ultimate_adventures_v_version_version__status_idx" ON "_ultimate_adventures_v" USING btree ("version__status");
  CREATE INDEX "_ultimate_adventures_v_created_at_idx" ON "_ultimate_adventures_v" USING btree ("created_at");
  CREATE INDEX "_ultimate_adventures_v_updated_at_idx" ON "_ultimate_adventures_v" USING btree ("updated_at");
  CREATE INDEX "_ultimate_adventures_v_latest_idx" ON "_ultimate_adventures_v" USING btree ("latest");
  CREATE INDEX "_ultimate_adventures_v_autosave_idx" ON "_ultimate_adventures_v" USING btree ("autosave");
  CREATE INDEX "_ultimate_adventures_v_rels_order_idx" ON "_ultimate_adventures_v_rels" USING btree ("order");
  CREATE INDEX "_ultimate_adventures_v_rels_parent_idx" ON "_ultimate_adventures_v_rels" USING btree ("parent_id");
  CREATE INDEX "_ultimate_adventures_v_rels_path_idx" ON "_ultimate_adventures_v_rels" USING btree ("path");
  CREATE INDEX "_ultimate_adventures_v_rels_users_id_idx" ON "_ultimate_adventures_v_rels" USING btree ("users_id");
  CREATE INDEX "biking_adventures_tour_highlights_order_idx" ON "biking_adventures_tour_highlights" USING btree ("_order");
  CREATE INDEX "biking_adventures_tour_highlights_parent_id_idx" ON "biking_adventures_tour_highlights" USING btree ("_parent_id");
  CREATE INDEX "biking_adventures_accommodation_order_idx" ON "biking_adventures_accommodation" USING btree ("order");
  CREATE INDEX "biking_adventures_accommodation_parent_idx" ON "biking_adventures_accommodation" USING btree ("parent_id");
  CREATE INDEX "biking_adventures_meal_order_idx" ON "biking_adventures_meal" USING btree ("order");
  CREATE INDEX "biking_adventures_meal_parent_idx" ON "biking_adventures_meal" USING btree ("parent_id");
  CREATE INDEX "biking_adventures_overview_gallery_order_idx" ON "biking_adventures_overview_gallery" USING btree ("_order");
  CREATE INDEX "biking_adventures_overview_gallery_parent_id_idx" ON "biking_adventures_overview_gallery" USING btree ("_parent_id");
  CREATE INDEX "biking_adventures_overview_gallery_image_idx" ON "biking_adventures_overview_gallery" USING btree ("image_id");
  CREATE INDEX "biking_adventures_itineraries_accommodation_order_idx" ON "biking_adventures_itineraries_accommodation" USING btree ("order");
  CREATE INDEX "biking_adventures_itineraries_accommodation_parent_idx" ON "biking_adventures_itineraries_accommodation" USING btree ("parent_id");
  CREATE INDEX "biking_adventures_itineraries_meal_order_idx" ON "biking_adventures_itineraries_meal" USING btree ("order");
  CREATE INDEX "biking_adventures_itineraries_meal_parent_idx" ON "biking_adventures_itineraries_meal" USING btree ("parent_id");
  CREATE INDEX "biking_adventures_itineraries_order_idx" ON "biking_adventures_itineraries" USING btree ("_order");
  CREATE INDEX "biking_adventures_itineraries_parent_id_idx" ON "biking_adventures_itineraries" USING btree ("_parent_id");
  CREATE INDEX "biking_adventures_itineraries_media_idx" ON "biking_adventures_itineraries" USING btree ("media_id");
  CREATE INDEX "biking_adventures_itineraries_hotel_idx" ON "biking_adventures_itineraries" USING btree ("hotel_id");
  CREATE INDEX "biking_adventures_dates_order_idx" ON "biking_adventures_dates" USING btree ("_order");
  CREATE INDEX "biking_adventures_dates_parent_id_idx" ON "biking_adventures_dates" USING btree ("_parent_id");
  CREATE INDEX "biking_adventures_cost_order_idx" ON "biking_adventures_cost" USING btree ("_order");
  CREATE INDEX "biking_adventures_cost_parent_id_idx" ON "biking_adventures_cost" USING btree ("_parent_id");
  CREATE INDEX "biking_adventures_populated_authors_order_idx" ON "biking_adventures_populated_authors" USING btree ("_order");
  CREATE INDEX "biking_adventures_populated_authors_parent_id_idx" ON "biking_adventures_populated_authors" USING btree ("_parent_id");
  CREATE INDEX "biking_adventures_hero_image_idx" ON "biking_adventures" USING btree ("hero_image_id");
  CREATE INDEX "biking_adventures_overview_image_idx" ON "biking_adventures" USING btree ("overview_image_id");
  CREATE INDEX "biking_adventures_overview_video_overview_video_video_idx" ON "biking_adventures" USING btree ("overview_video_video_id");
  CREATE INDEX "biking_adventures_meta_meta_image_idx" ON "biking_adventures" USING btree ("meta_image_id");
  CREATE INDEX "biking_adventures_slug_idx" ON "biking_adventures" USING btree ("slug");
  CREATE INDEX "biking_adventures_updated_at_idx" ON "biking_adventures" USING btree ("updated_at");
  CREATE INDEX "biking_adventures_created_at_idx" ON "biking_adventures" USING btree ("created_at");
  CREATE INDEX "biking_adventures__status_idx" ON "biking_adventures" USING btree ("_status");
  CREATE INDEX "biking_adventures_rels_order_idx" ON "biking_adventures_rels" USING btree ("order");
  CREATE INDEX "biking_adventures_rels_parent_idx" ON "biking_adventures_rels" USING btree ("parent_id");
  CREATE INDEX "biking_adventures_rels_path_idx" ON "biking_adventures_rels" USING btree ("path");
  CREATE INDEX "biking_adventures_rels_users_id_idx" ON "biking_adventures_rels" USING btree ("users_id");
  CREATE INDEX "_biking_adventures_v_version_tour_highlights_order_idx" ON "_biking_adventures_v_version_tour_highlights" USING btree ("_order");
  CREATE INDEX "_biking_adventures_v_version_tour_highlights_parent_id_idx" ON "_biking_adventures_v_version_tour_highlights" USING btree ("_parent_id");
  CREATE INDEX "_biking_adventures_v_version_accommodation_order_idx" ON "_biking_adventures_v_version_accommodation" USING btree ("order");
  CREATE INDEX "_biking_adventures_v_version_accommodation_parent_idx" ON "_biking_adventures_v_version_accommodation" USING btree ("parent_id");
  CREATE INDEX "_biking_adventures_v_version_meal_order_idx" ON "_biking_adventures_v_version_meal" USING btree ("order");
  CREATE INDEX "_biking_adventures_v_version_meal_parent_idx" ON "_biking_adventures_v_version_meal" USING btree ("parent_id");
  CREATE INDEX "_biking_adventures_v_version_overview_gallery_order_idx" ON "_biking_adventures_v_version_overview_gallery" USING btree ("_order");
  CREATE INDEX "_biking_adventures_v_version_overview_gallery_parent_id_idx" ON "_biking_adventures_v_version_overview_gallery" USING btree ("_parent_id");
  CREATE INDEX "_biking_adventures_v_version_overview_gallery_image_idx" ON "_biking_adventures_v_version_overview_gallery" USING btree ("image_id");
  CREATE INDEX "_biking_adventures_v_version_itineraries_accommodation_order_idx" ON "_biking_adventures_v_version_itineraries_accommodation" USING btree ("order");
  CREATE INDEX "_biking_adventures_v_version_itineraries_accommodation_parent_idx" ON "_biking_adventures_v_version_itineraries_accommodation" USING btree ("parent_id");
  CREATE INDEX "_biking_adventures_v_version_itineraries_meal_order_idx" ON "_biking_adventures_v_version_itineraries_meal" USING btree ("order");
  CREATE INDEX "_biking_adventures_v_version_itineraries_meal_parent_idx" ON "_biking_adventures_v_version_itineraries_meal" USING btree ("parent_id");
  CREATE INDEX "_biking_adventures_v_version_itineraries_order_idx" ON "_biking_adventures_v_version_itineraries" USING btree ("_order");
  CREATE INDEX "_biking_adventures_v_version_itineraries_parent_id_idx" ON "_biking_adventures_v_version_itineraries" USING btree ("_parent_id");
  CREATE INDEX "_biking_adventures_v_version_itineraries_media_idx" ON "_biking_adventures_v_version_itineraries" USING btree ("media_id");
  CREATE INDEX "_biking_adventures_v_version_itineraries_hotel_idx" ON "_biking_adventures_v_version_itineraries" USING btree ("hotel_id");
  CREATE INDEX "_biking_adventures_v_version_dates_order_idx" ON "_biking_adventures_v_version_dates" USING btree ("_order");
  CREATE INDEX "_biking_adventures_v_version_dates_parent_id_idx" ON "_biking_adventures_v_version_dates" USING btree ("_parent_id");
  CREATE INDEX "_biking_adventures_v_version_cost_order_idx" ON "_biking_adventures_v_version_cost" USING btree ("_order");
  CREATE INDEX "_biking_adventures_v_version_cost_parent_id_idx" ON "_biking_adventures_v_version_cost" USING btree ("_parent_id");
  CREATE INDEX "_biking_adventures_v_version_populated_authors_order_idx" ON "_biking_adventures_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX "_biking_adventures_v_version_populated_authors_parent_id_idx" ON "_biking_adventures_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX "_biking_adventures_v_parent_idx" ON "_biking_adventures_v" USING btree ("parent_id");
  CREATE INDEX "_biking_adventures_v_version_version_hero_image_idx" ON "_biking_adventures_v" USING btree ("version_hero_image_id");
  CREATE INDEX "_biking_adventures_v_version_version_overview_image_idx" ON "_biking_adventures_v" USING btree ("version_overview_image_id");
  CREATE INDEX "_biking_adventures_v_version_overview_video_version_over_idx" ON "_biking_adventures_v" USING btree ("version_overview_video_video_id");
  CREATE INDEX "_biking_adventures_v_version_meta_version_meta_image_idx" ON "_biking_adventures_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_biking_adventures_v_version_version_slug_idx" ON "_biking_adventures_v" USING btree ("version_slug");
  CREATE INDEX "_biking_adventures_v_version_version_updated_at_idx" ON "_biking_adventures_v" USING btree ("version_updated_at");
  CREATE INDEX "_biking_adventures_v_version_version_created_at_idx" ON "_biking_adventures_v" USING btree ("version_created_at");
  CREATE INDEX "_biking_adventures_v_version_version__status_idx" ON "_biking_adventures_v" USING btree ("version__status");
  CREATE INDEX "_biking_adventures_v_created_at_idx" ON "_biking_adventures_v" USING btree ("created_at");
  CREATE INDEX "_biking_adventures_v_updated_at_idx" ON "_biking_adventures_v" USING btree ("updated_at");
  CREATE INDEX "_biking_adventures_v_latest_idx" ON "_biking_adventures_v" USING btree ("latest");
  CREATE INDEX "_biking_adventures_v_autosave_idx" ON "_biking_adventures_v" USING btree ("autosave");
  CREATE INDEX "_biking_adventures_v_rels_order_idx" ON "_biking_adventures_v_rels" USING btree ("order");
  CREATE INDEX "_biking_adventures_v_rels_parent_idx" ON "_biking_adventures_v_rels" USING btree ("parent_id");
  CREATE INDEX "_biking_adventures_v_rels_path_idx" ON "_biking_adventures_v_rels" USING btree ("path");
  CREATE INDEX "_biking_adventures_v_rels_users_id_idx" ON "_biking_adventures_v_rels" USING btree ("users_id");
  CREATE INDEX "holiday_packages_tour_highlights_order_idx" ON "holiday_packages_tour_highlights" USING btree ("_order");
  CREATE INDEX "holiday_packages_tour_highlights_parent_id_idx" ON "holiday_packages_tour_highlights" USING btree ("_parent_id");
  CREATE INDEX "holiday_packages_accommodation_order_idx" ON "holiday_packages_accommodation" USING btree ("order");
  CREATE INDEX "holiday_packages_accommodation_parent_idx" ON "holiday_packages_accommodation" USING btree ("parent_id");
  CREATE INDEX "holiday_packages_meal_order_idx" ON "holiday_packages_meal" USING btree ("order");
  CREATE INDEX "holiday_packages_meal_parent_idx" ON "holiday_packages_meal" USING btree ("parent_id");
  CREATE INDEX "holiday_packages_overview_gallery_order_idx" ON "holiday_packages_overview_gallery" USING btree ("_order");
  CREATE INDEX "holiday_packages_overview_gallery_parent_id_idx" ON "holiday_packages_overview_gallery" USING btree ("_parent_id");
  CREATE INDEX "holiday_packages_overview_gallery_image_idx" ON "holiday_packages_overview_gallery" USING btree ("image_id");
  CREATE INDEX "holiday_packages_itineraries_accommodation_order_idx" ON "holiday_packages_itineraries_accommodation" USING btree ("order");
  CREATE INDEX "holiday_packages_itineraries_accommodation_parent_idx" ON "holiday_packages_itineraries_accommodation" USING btree ("parent_id");
  CREATE INDEX "holiday_packages_itineraries_meal_order_idx" ON "holiday_packages_itineraries_meal" USING btree ("order");
  CREATE INDEX "holiday_packages_itineraries_meal_parent_idx" ON "holiday_packages_itineraries_meal" USING btree ("parent_id");
  CREATE INDEX "holiday_packages_itineraries_order_idx" ON "holiday_packages_itineraries" USING btree ("_order");
  CREATE INDEX "holiday_packages_itineraries_parent_id_idx" ON "holiday_packages_itineraries" USING btree ("_parent_id");
  CREATE INDEX "holiday_packages_itineraries_media_idx" ON "holiday_packages_itineraries" USING btree ("media_id");
  CREATE INDEX "holiday_packages_itineraries_hotel_idx" ON "holiday_packages_itineraries" USING btree ("hotel_id");
  CREATE INDEX "holiday_packages_cost_order_idx" ON "holiday_packages_cost" USING btree ("_order");
  CREATE INDEX "holiday_packages_cost_parent_id_idx" ON "holiday_packages_cost" USING btree ("_parent_id");
  CREATE INDEX "holiday_packages_populated_authors_order_idx" ON "holiday_packages_populated_authors" USING btree ("_order");
  CREATE INDEX "holiday_packages_populated_authors_parent_id_idx" ON "holiday_packages_populated_authors" USING btree ("_parent_id");
  CREATE INDEX "holiday_packages_hero_image_idx" ON "holiday_packages" USING btree ("hero_image_id");
  CREATE INDEX "holiday_packages_overview_image_idx" ON "holiday_packages" USING btree ("overview_image_id");
  CREATE INDEX "holiday_packages_overview_video_overview_video_video_idx" ON "holiday_packages" USING btree ("overview_video_video_id");
  CREATE INDEX "holiday_packages_meta_meta_image_idx" ON "holiday_packages" USING btree ("meta_image_id");
  CREATE INDEX "holiday_packages_slug_idx" ON "holiday_packages" USING btree ("slug");
  CREATE INDEX "holiday_packages_updated_at_idx" ON "holiday_packages" USING btree ("updated_at");
  CREATE INDEX "holiday_packages_created_at_idx" ON "holiday_packages" USING btree ("created_at");
  CREATE INDEX "holiday_packages__status_idx" ON "holiday_packages" USING btree ("_status");
  CREATE INDEX "holiday_packages_rels_order_idx" ON "holiday_packages_rels" USING btree ("order");
  CREATE INDEX "holiday_packages_rels_parent_idx" ON "holiday_packages_rels" USING btree ("parent_id");
  CREATE INDEX "holiday_packages_rels_path_idx" ON "holiday_packages_rels" USING btree ("path");
  CREATE INDEX "holiday_packages_rels_users_id_idx" ON "holiday_packages_rels" USING btree ("users_id");
  CREATE INDEX "_holiday_packages_v_version_tour_highlights_order_idx" ON "_holiday_packages_v_version_tour_highlights" USING btree ("_order");
  CREATE INDEX "_holiday_packages_v_version_tour_highlights_parent_id_idx" ON "_holiday_packages_v_version_tour_highlights" USING btree ("_parent_id");
  CREATE INDEX "_holiday_packages_v_version_accommodation_order_idx" ON "_holiday_packages_v_version_accommodation" USING btree ("order");
  CREATE INDEX "_holiday_packages_v_version_accommodation_parent_idx" ON "_holiday_packages_v_version_accommodation" USING btree ("parent_id");
  CREATE INDEX "_holiday_packages_v_version_meal_order_idx" ON "_holiday_packages_v_version_meal" USING btree ("order");
  CREATE INDEX "_holiday_packages_v_version_meal_parent_idx" ON "_holiday_packages_v_version_meal" USING btree ("parent_id");
  CREATE INDEX "_holiday_packages_v_version_overview_gallery_order_idx" ON "_holiday_packages_v_version_overview_gallery" USING btree ("_order");
  CREATE INDEX "_holiday_packages_v_version_overview_gallery_parent_id_idx" ON "_holiday_packages_v_version_overview_gallery" USING btree ("_parent_id");
  CREATE INDEX "_holiday_packages_v_version_overview_gallery_image_idx" ON "_holiday_packages_v_version_overview_gallery" USING btree ("image_id");
  CREATE INDEX "_holiday_packages_v_version_itineraries_accommodation_order_idx" ON "_holiday_packages_v_version_itineraries_accommodation" USING btree ("order");
  CREATE INDEX "_holiday_packages_v_version_itineraries_accommodation_parent_idx" ON "_holiday_packages_v_version_itineraries_accommodation" USING btree ("parent_id");
  CREATE INDEX "_holiday_packages_v_version_itineraries_meal_order_idx" ON "_holiday_packages_v_version_itineraries_meal" USING btree ("order");
  CREATE INDEX "_holiday_packages_v_version_itineraries_meal_parent_idx" ON "_holiday_packages_v_version_itineraries_meal" USING btree ("parent_id");
  CREATE INDEX "_holiday_packages_v_version_itineraries_order_idx" ON "_holiday_packages_v_version_itineraries" USING btree ("_order");
  CREATE INDEX "_holiday_packages_v_version_itineraries_parent_id_idx" ON "_holiday_packages_v_version_itineraries" USING btree ("_parent_id");
  CREATE INDEX "_holiday_packages_v_version_itineraries_media_idx" ON "_holiday_packages_v_version_itineraries" USING btree ("media_id");
  CREATE INDEX "_holiday_packages_v_version_itineraries_hotel_idx" ON "_holiday_packages_v_version_itineraries" USING btree ("hotel_id");
  CREATE INDEX "_holiday_packages_v_version_cost_order_idx" ON "_holiday_packages_v_version_cost" USING btree ("_order");
  CREATE INDEX "_holiday_packages_v_version_cost_parent_id_idx" ON "_holiday_packages_v_version_cost" USING btree ("_parent_id");
  CREATE INDEX "_holiday_packages_v_version_populated_authors_order_idx" ON "_holiday_packages_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX "_holiday_packages_v_version_populated_authors_parent_id_idx" ON "_holiday_packages_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX "_holiday_packages_v_parent_idx" ON "_holiday_packages_v" USING btree ("parent_id");
  CREATE INDEX "_holiday_packages_v_version_version_hero_image_idx" ON "_holiday_packages_v" USING btree ("version_hero_image_id");
  CREATE INDEX "_holiday_packages_v_version_version_overview_image_idx" ON "_holiday_packages_v" USING btree ("version_overview_image_id");
  CREATE INDEX "_holiday_packages_v_version_overview_video_version_overv_idx" ON "_holiday_packages_v" USING btree ("version_overview_video_video_id");
  CREATE INDEX "_holiday_packages_v_version_meta_version_meta_image_idx" ON "_holiday_packages_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_holiday_packages_v_version_version_slug_idx" ON "_holiday_packages_v" USING btree ("version_slug");
  CREATE INDEX "_holiday_packages_v_version_version_updated_at_idx" ON "_holiday_packages_v" USING btree ("version_updated_at");
  CREATE INDEX "_holiday_packages_v_version_version_created_at_idx" ON "_holiday_packages_v" USING btree ("version_created_at");
  CREATE INDEX "_holiday_packages_v_version_version__status_idx" ON "_holiday_packages_v" USING btree ("version__status");
  CREATE INDEX "_holiday_packages_v_created_at_idx" ON "_holiday_packages_v" USING btree ("created_at");
  CREATE INDEX "_holiday_packages_v_updated_at_idx" ON "_holiday_packages_v" USING btree ("updated_at");
  CREATE INDEX "_holiday_packages_v_latest_idx" ON "_holiday_packages_v" USING btree ("latest");
  CREATE INDEX "_holiday_packages_v_autosave_idx" ON "_holiday_packages_v" USING btree ("autosave");
  CREATE INDEX "_holiday_packages_v_rels_order_idx" ON "_holiday_packages_v_rels" USING btree ("order");
  CREATE INDEX "_holiday_packages_v_rels_parent_idx" ON "_holiday_packages_v_rels" USING btree ("parent_id");
  CREATE INDEX "_holiday_packages_v_rels_path_idx" ON "_holiday_packages_v_rels" USING btree ("path");
  CREATE INDEX "_holiday_packages_v_rels_users_id_idx" ON "_holiday_packages_v_rels" USING btree ("users_id");
  CREATE INDEX "destinations_populated_authors_order_idx" ON "destinations_populated_authors" USING btree ("_order");
  CREATE INDEX "destinations_populated_authors_parent_id_idx" ON "destinations_populated_authors" USING btree ("_parent_id");
  CREATE INDEX "destinations_hero_image_idx" ON "destinations" USING btree ("hero_image_id");
  CREATE INDEX "destinations_top_image_idx" ON "destinations" USING btree ("top_image_id");
  CREATE INDEX "destinations_meta_meta_image_idx" ON "destinations" USING btree ("meta_image_id");
  CREATE INDEX "destinations_slug_idx" ON "destinations" USING btree ("slug");
  CREATE INDEX "destinations_updated_at_idx" ON "destinations" USING btree ("updated_at");
  CREATE INDEX "destinations_created_at_idx" ON "destinations" USING btree ("created_at");
  CREATE INDEX "destinations__status_idx" ON "destinations" USING btree ("_status");
  CREATE INDEX "destinations_rels_order_idx" ON "destinations_rels" USING btree ("order");
  CREATE INDEX "destinations_rels_parent_idx" ON "destinations_rels" USING btree ("parent_id");
  CREATE INDEX "destinations_rels_path_idx" ON "destinations_rels" USING btree ("path");
  CREATE INDEX "destinations_rels_users_id_idx" ON "destinations_rels" USING btree ("users_id");
  CREATE INDEX "_destinations_v_version_populated_authors_order_idx" ON "_destinations_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX "_destinations_v_version_populated_authors_parent_id_idx" ON "_destinations_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX "_destinations_v_parent_idx" ON "_destinations_v" USING btree ("parent_id");
  CREATE INDEX "_destinations_v_version_version_hero_image_idx" ON "_destinations_v" USING btree ("version_hero_image_id");
  CREATE INDEX "_destinations_v_version_version_top_image_idx" ON "_destinations_v" USING btree ("version_top_image_id");
  CREATE INDEX "_destinations_v_version_meta_version_meta_image_idx" ON "_destinations_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_destinations_v_version_version_slug_idx" ON "_destinations_v" USING btree ("version_slug");
  CREATE INDEX "_destinations_v_version_version_updated_at_idx" ON "_destinations_v" USING btree ("version_updated_at");
  CREATE INDEX "_destinations_v_version_version_created_at_idx" ON "_destinations_v" USING btree ("version_created_at");
  CREATE INDEX "_destinations_v_version_version__status_idx" ON "_destinations_v" USING btree ("version__status");
  CREATE INDEX "_destinations_v_created_at_idx" ON "_destinations_v" USING btree ("created_at");
  CREATE INDEX "_destinations_v_updated_at_idx" ON "_destinations_v" USING btree ("updated_at");
  CREATE INDEX "_destinations_v_latest_idx" ON "_destinations_v" USING btree ("latest");
  CREATE INDEX "_destinations_v_autosave_idx" ON "_destinations_v" USING btree ("autosave");
  CREATE INDEX "_destinations_v_rels_order_idx" ON "_destinations_v_rels" USING btree ("order");
  CREATE INDEX "_destinations_v_rels_parent_idx" ON "_destinations_v_rels" USING btree ("parent_id");
  CREATE INDEX "_destinations_v_rels_path_idx" ON "_destinations_v_rels" USING btree ("path");
  CREATE INDEX "_destinations_v_rels_users_id_idx" ON "_destinations_v_rels" USING btree ("users_id");
  CREATE INDEX "hotels_image_idx" ON "hotels" USING btree ("image_id");
  CREATE INDEX "hotels_updated_at_idx" ON "hotels" USING btree ("updated_at");
  CREATE INDEX "hotels_created_at_idx" ON "hotels" USING btree ("created_at");
  CREATE UNIQUE INDEX "redirects_from_idx" ON "redirects" USING btree ("from");
  CREATE INDEX "redirects_updated_at_idx" ON "redirects" USING btree ("updated_at");
  CREATE INDEX "redirects_created_at_idx" ON "redirects" USING btree ("created_at");
  CREATE INDEX "redirects_rels_order_idx" ON "redirects_rels" USING btree ("order");
  CREATE INDEX "redirects_rels_parent_idx" ON "redirects_rels" USING btree ("parent_id");
  CREATE INDEX "redirects_rels_path_idx" ON "redirects_rels" USING btree ("path");
  CREATE INDEX "redirects_rels_posts_id_idx" ON "redirects_rels" USING btree ("posts_id");
  CREATE INDEX "redirects_rels_pages_id_idx" ON "redirects_rels" USING btree ("pages_id");
  CREATE INDEX "redirects_rels_biking_adventures_id_idx" ON "redirects_rels" USING btree ("biking_adventures_id");
  CREATE INDEX "redirects_rels_holiday_packages_id_idx" ON "redirects_rels" USING btree ("holiday_packages_id");
  CREATE INDEX "redirects_rels_destinations_id_idx" ON "redirects_rels" USING btree ("destinations_id");
  CREATE INDEX "forms_blocks_checkbox_order_idx" ON "forms_blocks_checkbox" USING btree ("_order");
  CREATE INDEX "forms_blocks_checkbox_parent_id_idx" ON "forms_blocks_checkbox" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_checkbox_path_idx" ON "forms_blocks_checkbox" USING btree ("_path");
  CREATE INDEX "forms_blocks_country_order_idx" ON "forms_blocks_country" USING btree ("_order");
  CREATE INDEX "forms_blocks_country_parent_id_idx" ON "forms_blocks_country" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_country_path_idx" ON "forms_blocks_country" USING btree ("_path");
  CREATE INDEX "forms_blocks_email_order_idx" ON "forms_blocks_email" USING btree ("_order");
  CREATE INDEX "forms_blocks_email_parent_id_idx" ON "forms_blocks_email" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_email_path_idx" ON "forms_blocks_email" USING btree ("_path");
  CREATE INDEX "forms_blocks_message_order_idx" ON "forms_blocks_message" USING btree ("_order");
  CREATE INDEX "forms_blocks_message_parent_id_idx" ON "forms_blocks_message" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_message_path_idx" ON "forms_blocks_message" USING btree ("_path");
  CREATE INDEX "forms_blocks_number_order_idx" ON "forms_blocks_number" USING btree ("_order");
  CREATE INDEX "forms_blocks_number_parent_id_idx" ON "forms_blocks_number" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_number_path_idx" ON "forms_blocks_number" USING btree ("_path");
  CREATE INDEX "forms_blocks_select_options_order_idx" ON "forms_blocks_select_options" USING btree ("_order");
  CREATE INDEX "forms_blocks_select_options_parent_id_idx" ON "forms_blocks_select_options" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_select_order_idx" ON "forms_blocks_select" USING btree ("_order");
  CREATE INDEX "forms_blocks_select_parent_id_idx" ON "forms_blocks_select" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_select_path_idx" ON "forms_blocks_select" USING btree ("_path");
  CREATE INDEX "forms_blocks_state_order_idx" ON "forms_blocks_state" USING btree ("_order");
  CREATE INDEX "forms_blocks_state_parent_id_idx" ON "forms_blocks_state" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_state_path_idx" ON "forms_blocks_state" USING btree ("_path");
  CREATE INDEX "forms_blocks_text_order_idx" ON "forms_blocks_text" USING btree ("_order");
  CREATE INDEX "forms_blocks_text_parent_id_idx" ON "forms_blocks_text" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_text_path_idx" ON "forms_blocks_text" USING btree ("_path");
  CREATE INDEX "forms_blocks_textarea_order_idx" ON "forms_blocks_textarea" USING btree ("_order");
  CREATE INDEX "forms_blocks_textarea_parent_id_idx" ON "forms_blocks_textarea" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_textarea_path_idx" ON "forms_blocks_textarea" USING btree ("_path");
  CREATE INDEX "forms_emails_order_idx" ON "forms_emails" USING btree ("_order");
  CREATE INDEX "forms_emails_parent_id_idx" ON "forms_emails" USING btree ("_parent_id");
  CREATE INDEX "forms_updated_at_idx" ON "forms" USING btree ("updated_at");
  CREATE INDEX "forms_created_at_idx" ON "forms" USING btree ("created_at");
  CREATE INDEX "form_submissions_submission_data_order_idx" ON "form_submissions_submission_data" USING btree ("_order");
  CREATE INDEX "form_submissions_submission_data_parent_id_idx" ON "form_submissions_submission_data" USING btree ("_parent_id");
  CREATE INDEX "form_submissions_form_idx" ON "form_submissions" USING btree ("form_id");
  CREATE INDEX "form_submissions_updated_at_idx" ON "form_submissions" USING btree ("updated_at");
  CREATE INDEX "form_submissions_created_at_idx" ON "form_submissions" USING btree ("created_at");
  CREATE INDEX "search_categories_order_idx" ON "search_categories" USING btree ("_order");
  CREATE INDEX "search_categories_parent_id_idx" ON "search_categories" USING btree ("_parent_id");
  CREATE INDEX "search_slug_idx" ON "search" USING btree ("slug");
  CREATE INDEX "search_meta_meta_image_idx" ON "search" USING btree ("meta_image_id");
  CREATE INDEX "search_updated_at_idx" ON "search" USING btree ("updated_at");
  CREATE INDEX "search_created_at_idx" ON "search" USING btree ("created_at");
  CREATE INDEX "search_rels_order_idx" ON "search_rels" USING btree ("order");
  CREATE INDEX "search_rels_parent_idx" ON "search_rels" USING btree ("parent_id");
  CREATE INDEX "search_rels_path_idx" ON "search_rels" USING btree ("path");
  CREATE INDEX "search_rels_posts_id_idx" ON "search_rels" USING btree ("posts_id");
  CREATE INDEX "search_rels_pages_id_idx" ON "search_rels" USING btree ("pages_id");
  CREATE INDEX "search_rels_biking_adventures_id_idx" ON "search_rels" USING btree ("biking_adventures_id");
  CREATE INDEX "search_rels_holiday_packages_id_idx" ON "search_rels" USING btree ("holiday_packages_id");
  CREATE INDEX "search_rels_destinations_id_idx" ON "search_rels" USING btree ("destinations_id");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_jobs_log_order_idx" ON "payload_jobs_log" USING btree ("_order");
  CREATE INDEX "payload_jobs_log_parent_id_idx" ON "payload_jobs_log" USING btree ("_parent_id");
  CREATE INDEX "payload_jobs_completed_at_idx" ON "payload_jobs" USING btree ("completed_at");
  CREATE INDEX "payload_jobs_total_tried_idx" ON "payload_jobs" USING btree ("total_tried");
  CREATE INDEX "payload_jobs_has_error_idx" ON "payload_jobs" USING btree ("has_error");
  CREATE INDEX "payload_jobs_task_slug_idx" ON "payload_jobs" USING btree ("task_slug");
  CREATE INDEX "payload_jobs_queue_idx" ON "payload_jobs" USING btree ("queue");
  CREATE INDEX "payload_jobs_wait_until_idx" ON "payload_jobs" USING btree ("wait_until");
  CREATE INDEX "payload_jobs_processing_idx" ON "payload_jobs" USING btree ("processing");
  CREATE INDEX "payload_jobs_updated_at_idx" ON "payload_jobs" USING btree ("updated_at");
  CREATE INDEX "payload_jobs_created_at_idx" ON "payload_jobs" USING btree ("created_at");
  CREATE INDEX "payload_folders_folder_type_order_idx" ON "payload_folders_folder_type" USING btree ("order");
  CREATE INDEX "payload_folders_folder_type_parent_idx" ON "payload_folders_folder_type" USING btree ("parent_id");
  CREATE INDEX "payload_folders_name_idx" ON "payload_folders" USING btree ("name");
  CREATE INDEX "payload_folders_folder_idx" ON "payload_folders" USING btree ("folder_id");
  CREATE INDEX "payload_folders_updated_at_idx" ON "payload_folders" USING btree ("updated_at");
  CREATE INDEX "payload_folders_created_at_idx" ON "payload_folders" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_posts_id_idx" ON "payload_locked_documents_rels" USING btree ("posts_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("categories_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_ultimate_adventures_id_idx" ON "payload_locked_documents_rels" USING btree ("ultimate_adventures_id");
  CREATE INDEX "payload_locked_documents_rels_biking_adventures_id_idx" ON "payload_locked_documents_rels" USING btree ("biking_adventures_id");
  CREATE INDEX "payload_locked_documents_rels_holiday_packages_id_idx" ON "payload_locked_documents_rels" USING btree ("holiday_packages_id");
  CREATE INDEX "payload_locked_documents_rels_destinations_id_idx" ON "payload_locked_documents_rels" USING btree ("destinations_id");
  CREATE INDEX "payload_locked_documents_rels_hotels_id_idx" ON "payload_locked_documents_rels" USING btree ("hotels_id");
  CREATE INDEX "payload_locked_documents_rels_redirects_id_idx" ON "payload_locked_documents_rels" USING btree ("redirects_id");
  CREATE INDEX "payload_locked_documents_rels_forms_id_idx" ON "payload_locked_documents_rels" USING btree ("forms_id");
  CREATE INDEX "payload_locked_documents_rels_form_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("form_submissions_id");
  CREATE INDEX "payload_locked_documents_rels_search_id_idx" ON "payload_locked_documents_rels" USING btree ("search_id");
  CREATE INDEX "payload_locked_documents_rels_payload_folders_id_idx" ON "payload_locked_documents_rels" USING btree ("payload_folders_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "settings_light_mode_icon_idx" ON "settings" USING btree ("light_mode_icon_id");
  CREATE INDEX "settings_light_mode_logo_idx" ON "settings" USING btree ("light_mode_logo_id");
  CREATE INDEX "settings_dark_mode_icon_idx" ON "settings" USING btree ("dark_mode_icon_id");
  CREATE INDEX "settings_dark_mode_logo_idx" ON "settings" USING btree ("dark_mode_logo_id");
  CREATE INDEX "header_nav_items_sub_links_sub_sub_links_order_idx" ON "header_nav_items_sub_links_sub_sub_links" USING btree ("_order");
  CREATE INDEX "header_nav_items_sub_links_sub_sub_links_parent_id_idx" ON "header_nav_items_sub_links_sub_sub_links" USING btree ("_parent_id");
  CREATE INDEX "header_nav_items_sub_links_order_idx" ON "header_nav_items_sub_links" USING btree ("_order");
  CREATE INDEX "header_nav_items_sub_links_parent_id_idx" ON "header_nav_items_sub_links" USING btree ("_parent_id");
  CREATE INDEX "header_nav_items_order_idx" ON "header_nav_items" USING btree ("_order");
  CREATE INDEX "header_nav_items_parent_id_idx" ON "header_nav_items" USING btree ("_parent_id");
  CREATE INDEX "header_rels_order_idx" ON "header_rels" USING btree ("order");
  CREATE INDEX "header_rels_parent_idx" ON "header_rels" USING btree ("parent_id");
  CREATE INDEX "header_rels_path_idx" ON "header_rels" USING btree ("path");
  CREATE INDEX "header_rels_pages_id_idx" ON "header_rels" USING btree ("pages_id");
  CREATE INDEX "header_rels_posts_id_idx" ON "header_rels" USING btree ("posts_id");
  CREATE INDEX "footer_quick_links_order_idx" ON "footer_quick_links" USING btree ("_order");
  CREATE INDEX "footer_quick_links_parent_id_idx" ON "footer_quick_links" USING btree ("_parent_id");
  CREATE INDEX "footer_adventure_rides_order_idx" ON "footer_adventure_rides" USING btree ("_order");
  CREATE INDEX "footer_adventure_rides_parent_id_idx" ON "footer_adventure_rides" USING btree ("_parent_id");
  CREATE INDEX "footer_destinations_order_idx" ON "footer_destinations" USING btree ("_order");
  CREATE INDEX "footer_destinations_parent_id_idx" ON "footer_destinations" USING btree ("_parent_id");
  CREATE INDEX "footer_rels_order_idx" ON "footer_rels" USING btree ("order");
  CREATE INDEX "footer_rels_parent_idx" ON "footer_rels" USING btree ("parent_id");
  CREATE INDEX "footer_rels_path_idx" ON "footer_rels" USING btree ("path");
  CREATE INDEX "footer_rels_pages_id_idx" ON "footer_rels" USING btree ("pages_id");
  CREATE INDEX "footer_rels_posts_id_idx" ON "footer_rels" USING btree ("posts_id");
  CREATE INDEX "sidebar_bottom_nav_items_order_idx" ON "sidebar_bottom_nav_items" USING btree ("_order");
  CREATE INDEX "sidebar_bottom_nav_items_parent_id_idx" ON "sidebar_bottom_nav_items" USING btree ("_parent_id");
  CREATE INDEX "sidebar_bottom_rels_order_idx" ON "sidebar_bottom_rels" USING btree ("order");
  CREATE INDEX "sidebar_bottom_rels_parent_idx" ON "sidebar_bottom_rels" USING btree ("parent_id");
  CREATE INDEX "sidebar_bottom_rels_path_idx" ON "sidebar_bottom_rels" USING btree ("path");
  CREATE INDEX "sidebar_bottom_rels_pages_id_idx" ON "sidebar_bottom_rels" USING btree ("pages_id");
  CREATE INDEX "sidebar_bottom_rels_posts_id_idx" ON "sidebar_bottom_rels" USING btree ("posts_id");
  CREATE INDEX "sidebar_top_links_order_idx" ON "sidebar_top_links" USING btree ("_order");
  CREATE INDEX "sidebar_top_links_parent_id_idx" ON "sidebar_top_links" USING btree ("_parent_id");
  CREATE INDEX "sidebar_top_rels_order_idx" ON "sidebar_top_rels" USING btree ("order");
  CREATE INDEX "sidebar_top_rels_parent_idx" ON "sidebar_top_rels" USING btree ("parent_id");
  CREATE INDEX "sidebar_top_rels_path_idx" ON "sidebar_top_rels" USING btree ("path");
  CREATE INDEX "sidebar_top_rels_pages_id_idx" ON "sidebar_top_rels" USING btree ("pages_id");
  CREATE INDEX "sidebar_top_rels_posts_id_idx" ON "sidebar_top_rels" USING btree ("posts_id");
  CREATE INDEX "inclusion_exclusion_inclusions_order_idx" ON "inclusion_exclusion_inclusions" USING btree ("_order");
  CREATE INDEX "inclusion_exclusion_inclusions_parent_id_idx" ON "inclusion_exclusion_inclusions" USING btree ("_parent_id");
  CREATE INDEX "inclusion_exclusion_exclusions_order_idx" ON "inclusion_exclusion_exclusions" USING btree ("_order");
  CREATE INDEX "inclusion_exclusion_exclusions_parent_id_idx" ON "inclusion_exclusion_exclusions" USING btree ("_parent_id");
  CREATE INDEX "inclusion_exclusion_package_inclusions_order_idx" ON "inclusion_exclusion_package_inclusions" USING btree ("_order");
  CREATE INDEX "inclusion_exclusion_package_inclusions_parent_id_idx" ON "inclusion_exclusion_package_inclusions" USING btree ("_parent_id");
  CREATE INDEX "inclusion_exclusion_package_exclusions_order_idx" ON "inclusion_exclusion_package_exclusions" USING btree ("_order");
  CREATE INDEX "inclusion_exclusion_package_exclusions_parent_id_idx" ON "inclusion_exclusion_package_exclusions" USING btree ("_parent_id");
  CREATE INDEX "inclusion_exclusion_ultimate_adventure_inclusions_order_idx" ON "inclusion_exclusion_ultimate_adventure_inclusions" USING btree ("_order");
  CREATE INDEX "inclusion_exclusion_ultimate_adventure_inclusions_parent_id_idx" ON "inclusion_exclusion_ultimate_adventure_inclusions" USING btree ("_parent_id");
  CREATE INDEX "inclusion_exclusion_ultimate_adventure_exclusions_order_idx" ON "inclusion_exclusion_ultimate_adventure_exclusions" USING btree ("_order");
  CREATE INDEX "inclusion_exclusion_ultimate_adventure_exclusions_parent_id_idx" ON "inclusion_exclusion_ultimate_adventure_exclusions" USING btree ("_parent_id");
  CREATE INDEX "riding_gears_media_idx" ON "riding_gears" USING btree ("media_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_hero_slides" CASCADE;
  DROP TABLE "pages_blocks_cta_links" CASCADE;
  DROP TABLE "pages_blocks_cta" CASCADE;
  DROP TABLE "pages_blocks_content_columns" CASCADE;
  DROP TABLE "pages_blocks_content" CASCADE;
  DROP TABLE "pages_blocks_media_block" CASCADE;
  DROP TABLE "pages_blocks_archive" CASCADE;
  DROP TABLE "pages_blocks_form_block" CASCADE;
  DROP TABLE "pages_blocks_content_with_media" CASCADE;
  DROP TABLE "pages_blocks_gallery_images" CASCADE;
  DROP TABLE "pages_blocks_gallery" CASCADE;
  DROP TABLE "pages_blocks_company_intro" CASCADE;
  DROP TABLE "pages_blocks_adventure_rides" CASCADE;
  DROP TABLE "pages_blocks_holiday_packages" CASCADE;
  DROP TABLE "pages_blocks_ultimate_adventures_block" CASCADE;
  DROP TABLE "pages_blocks_team" CASCADE;
  DROP TABLE "pages_blocks_contact_form" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "_pages_v_version_hero_slides" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_links" CASCADE;
  DROP TABLE "_pages_v_blocks_cta" CASCADE;
  DROP TABLE "_pages_v_blocks_content_columns" CASCADE;
  DROP TABLE "_pages_v_blocks_content" CASCADE;
  DROP TABLE "_pages_v_blocks_media_block" CASCADE;
  DROP TABLE "_pages_v_blocks_archive" CASCADE;
  DROP TABLE "_pages_v_blocks_form_block" CASCADE;
  DROP TABLE "_pages_v_blocks_content_with_media" CASCADE;
  DROP TABLE "_pages_v_blocks_gallery_images" CASCADE;
  DROP TABLE "_pages_v_blocks_gallery" CASCADE;
  DROP TABLE "_pages_v_blocks_company_intro" CASCADE;
  DROP TABLE "_pages_v_blocks_adventure_rides" CASCADE;
  DROP TABLE "_pages_v_blocks_holiday_packages" CASCADE;
  DROP TABLE "_pages_v_blocks_ultimate_adventures_block" CASCADE;
  DROP TABLE "_pages_v_blocks_team" CASCADE;
  DROP TABLE "_pages_v_blocks_contact_form" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "_pages_v_rels" CASCADE;
  DROP TABLE "posts_populated_authors" CASCADE;
  DROP TABLE "posts" CASCADE;
  DROP TABLE "posts_rels" CASCADE;
  DROP TABLE "_posts_v_version_populated_authors" CASCADE;
  DROP TABLE "_posts_v" CASCADE;
  DROP TABLE "_posts_v_rels" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "categories_breadcrumbs" CASCADE;
  DROP TABLE "categories" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "ultimate_adventures_tour_highlights" CASCADE;
  DROP TABLE "ultimate_adventures_accommodation" CASCADE;
  DROP TABLE "ultimate_adventures_meal" CASCADE;
  DROP TABLE "ultimate_adventures_overview_gallery" CASCADE;
  DROP TABLE "ultimate_adventures_itineraries_accommodation" CASCADE;
  DROP TABLE "ultimate_adventures_itineraries_meal" CASCADE;
  DROP TABLE "ultimate_adventures_itineraries" CASCADE;
  DROP TABLE "ultimate_adventures_dates" CASCADE;
  DROP TABLE "ultimate_adventures_cost" CASCADE;
  DROP TABLE "ultimate_adventures_populated_authors" CASCADE;
  DROP TABLE "ultimate_adventures" CASCADE;
  DROP TABLE "ultimate_adventures_rels" CASCADE;
  DROP TABLE "_ultimate_adventures_v_version_tour_highlights" CASCADE;
  DROP TABLE "_ultimate_adventures_v_version_accommodation" CASCADE;
  DROP TABLE "_ultimate_adventures_v_version_meal" CASCADE;
  DROP TABLE "_ultimate_adventures_v_version_overview_gallery" CASCADE;
  DROP TABLE "_ultimate_adventures_v_version_itineraries_accommodation" CASCADE;
  DROP TABLE "_ultimate_adventures_v_version_itineraries_meal" CASCADE;
  DROP TABLE "_ultimate_adventures_v_version_itineraries" CASCADE;
  DROP TABLE "_ultimate_adventures_v_version_dates" CASCADE;
  DROP TABLE "_ultimate_adventures_v_version_cost" CASCADE;
  DROP TABLE "_ultimate_adventures_v_version_populated_authors" CASCADE;
  DROP TABLE "_ultimate_adventures_v" CASCADE;
  DROP TABLE "_ultimate_adventures_v_rels" CASCADE;
  DROP TABLE "biking_adventures_tour_highlights" CASCADE;
  DROP TABLE "biking_adventures_accommodation" CASCADE;
  DROP TABLE "biking_adventures_meal" CASCADE;
  DROP TABLE "biking_adventures_overview_gallery" CASCADE;
  DROP TABLE "biking_adventures_itineraries_accommodation" CASCADE;
  DROP TABLE "biking_adventures_itineraries_meal" CASCADE;
  DROP TABLE "biking_adventures_itineraries" CASCADE;
  DROP TABLE "biking_adventures_dates" CASCADE;
  DROP TABLE "biking_adventures_cost" CASCADE;
  DROP TABLE "biking_adventures_populated_authors" CASCADE;
  DROP TABLE "biking_adventures" CASCADE;
  DROP TABLE "biking_adventures_rels" CASCADE;
  DROP TABLE "_biking_adventures_v_version_tour_highlights" CASCADE;
  DROP TABLE "_biking_adventures_v_version_accommodation" CASCADE;
  DROP TABLE "_biking_adventures_v_version_meal" CASCADE;
  DROP TABLE "_biking_adventures_v_version_overview_gallery" CASCADE;
  DROP TABLE "_biking_adventures_v_version_itineraries_accommodation" CASCADE;
  DROP TABLE "_biking_adventures_v_version_itineraries_meal" CASCADE;
  DROP TABLE "_biking_adventures_v_version_itineraries" CASCADE;
  DROP TABLE "_biking_adventures_v_version_dates" CASCADE;
  DROP TABLE "_biking_adventures_v_version_cost" CASCADE;
  DROP TABLE "_biking_adventures_v_version_populated_authors" CASCADE;
  DROP TABLE "_biking_adventures_v" CASCADE;
  DROP TABLE "_biking_adventures_v_rels" CASCADE;
  DROP TABLE "holiday_packages_tour_highlights" CASCADE;
  DROP TABLE "holiday_packages_accommodation" CASCADE;
  DROP TABLE "holiday_packages_meal" CASCADE;
  DROP TABLE "holiday_packages_overview_gallery" CASCADE;
  DROP TABLE "holiday_packages_itineraries_accommodation" CASCADE;
  DROP TABLE "holiday_packages_itineraries_meal" CASCADE;
  DROP TABLE "holiday_packages_itineraries" CASCADE;
  DROP TABLE "holiday_packages_cost" CASCADE;
  DROP TABLE "holiday_packages_populated_authors" CASCADE;
  DROP TABLE "holiday_packages" CASCADE;
  DROP TABLE "holiday_packages_rels" CASCADE;
  DROP TABLE "_holiday_packages_v_version_tour_highlights" CASCADE;
  DROP TABLE "_holiday_packages_v_version_accommodation" CASCADE;
  DROP TABLE "_holiday_packages_v_version_meal" CASCADE;
  DROP TABLE "_holiday_packages_v_version_overview_gallery" CASCADE;
  DROP TABLE "_holiday_packages_v_version_itineraries_accommodation" CASCADE;
  DROP TABLE "_holiday_packages_v_version_itineraries_meal" CASCADE;
  DROP TABLE "_holiday_packages_v_version_itineraries" CASCADE;
  DROP TABLE "_holiday_packages_v_version_cost" CASCADE;
  DROP TABLE "_holiday_packages_v_version_populated_authors" CASCADE;
  DROP TABLE "_holiday_packages_v" CASCADE;
  DROP TABLE "_holiday_packages_v_rels" CASCADE;
  DROP TABLE "destinations_populated_authors" CASCADE;
  DROP TABLE "destinations" CASCADE;
  DROP TABLE "destinations_rels" CASCADE;
  DROP TABLE "_destinations_v_version_populated_authors" CASCADE;
  DROP TABLE "_destinations_v" CASCADE;
  DROP TABLE "_destinations_v_rels" CASCADE;
  DROP TABLE "hotels" CASCADE;
  DROP TABLE "redirects" CASCADE;
  DROP TABLE "redirects_rels" CASCADE;
  DROP TABLE "forms_blocks_checkbox" CASCADE;
  DROP TABLE "forms_blocks_country" CASCADE;
  DROP TABLE "forms_blocks_email" CASCADE;
  DROP TABLE "forms_blocks_message" CASCADE;
  DROP TABLE "forms_blocks_number" CASCADE;
  DROP TABLE "forms_blocks_select_options" CASCADE;
  DROP TABLE "forms_blocks_select" CASCADE;
  DROP TABLE "forms_blocks_state" CASCADE;
  DROP TABLE "forms_blocks_text" CASCADE;
  DROP TABLE "forms_blocks_textarea" CASCADE;
  DROP TABLE "forms_emails" CASCADE;
  DROP TABLE "forms" CASCADE;
  DROP TABLE "form_submissions_submission_data" CASCADE;
  DROP TABLE "form_submissions" CASCADE;
  DROP TABLE "search_categories" CASCADE;
  DROP TABLE "search" CASCADE;
  DROP TABLE "search_rels" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_jobs_log" CASCADE;
  DROP TABLE "payload_jobs" CASCADE;
  DROP TABLE "payload_folders_folder_type" CASCADE;
  DROP TABLE "payload_folders" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "settings" CASCADE;
  DROP TABLE "header_nav_items_sub_links_sub_sub_links" CASCADE;
  DROP TABLE "header_nav_items_sub_links" CASCADE;
  DROP TABLE "header_nav_items" CASCADE;
  DROP TABLE "header" CASCADE;
  DROP TABLE "header_rels" CASCADE;
  DROP TABLE "footer_quick_links" CASCADE;
  DROP TABLE "footer_adventure_rides" CASCADE;
  DROP TABLE "footer_destinations" CASCADE;
  DROP TABLE "footer" CASCADE;
  DROP TABLE "footer_rels" CASCADE;
  DROP TABLE "ladakh_moto" CASCADE;
  DROP TABLE "sidebar_bottom_nav_items" CASCADE;
  DROP TABLE "sidebar_bottom" CASCADE;
  DROP TABLE "sidebar_bottom_rels" CASCADE;
  DROP TABLE "sidebar_top_links" CASCADE;
  DROP TABLE "sidebar_top" CASCADE;
  DROP TABLE "sidebar_top_rels" CASCADE;
  DROP TABLE "inclusion_exclusion_inclusions" CASCADE;
  DROP TABLE "inclusion_exclusion_exclusions" CASCADE;
  DROP TABLE "inclusion_exclusion" CASCADE;
  DROP TABLE "inclusion_exclusion_package_inclusions" CASCADE;
  DROP TABLE "inclusion_exclusion_package_exclusions" CASCADE;
  DROP TABLE "inclusion_exclusion_package" CASCADE;
  DROP TABLE "inclusion_exclusion_ultimate_adventure_inclusions" CASCADE;
  DROP TABLE "inclusion_exclusion_ultimate_adventure_exclusions" CASCADE;
  DROP TABLE "inclusion_exclusion_ultimate_adventure" CASCADE;
  DROP TABLE "tour_policies" CASCADE;
  DROP TABLE "things_to_keep_in_mind" CASCADE;
  DROP TABLE "riding_gears" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_cta_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_cta_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_content_columns_size";
  DROP TYPE "public"."enum_pages_blocks_content_columns_link_type";
  DROP TYPE "public"."enum_pages_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_archive_populate_by";
  DROP TYPE "public"."enum_pages_blocks_archive_relation_to";
  DROP TYPE "public"."enum_pages_hero_type";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_blocks_cta_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_size";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_archive_populate_by";
  DROP TYPE "public"."enum__pages_v_blocks_archive_relation_to";
  DROP TYPE "public"."enum__pages_v_version_hero_type";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum_posts_status";
  DROP TYPE "public"."enum__posts_v_version_status";
  DROP TYPE "public"."enum_users_designation";
  DROP TYPE "public"."enum_ultimate_adventures_accommodation";
  DROP TYPE "public"."enum_ultimate_adventures_meal";
  DROP TYPE "public"."enum_ultimate_adventures_itineraries_accommodation";
  DROP TYPE "public"."enum_ultimate_adventures_itineraries_meal";
  DROP TYPE "public"."enum_ultimate_adventures_itineraries_difficulty";
  DROP TYPE "public"."enum_ultimate_adventures_dates_status";
  DROP TYPE "public"."enum_ultimate_adventures_cost_travel_mode";
  DROP TYPE "public"."enum_ultimate_adventures_cost_vehicle_provided";
  DROP TYPE "public"."enum_ultimate_adventures_difficulty";
  DROP TYPE "public"."enum_ultimate_adventures_status";
  DROP TYPE "public"."enum__ultimate_adventures_v_version_accommodation";
  DROP TYPE "public"."enum__ultimate_adventures_v_version_meal";
  DROP TYPE "public"."enum__ultimate_adventures_v_version_itineraries_accommodation";
  DROP TYPE "public"."enum__ultimate_adventures_v_version_itineraries_meal";
  DROP TYPE "public"."enum__ultimate_adventures_v_version_itineraries_difficulty";
  DROP TYPE "public"."enum__ultimate_adventures_v_version_dates_status";
  DROP TYPE "public"."enum__ultimate_adventures_v_version_cost_travel_mode";
  DROP TYPE "public"."enum__ultimate_adventures_v_version_cost_vehicle_provided";
  DROP TYPE "public"."enum__ultimate_adventures_v_version_difficulty";
  DROP TYPE "public"."enum__ultimate_adventures_v_version_status";
  DROP TYPE "public"."enum_biking_adventures_accommodation";
  DROP TYPE "public"."enum_biking_adventures_meal";
  DROP TYPE "public"."enum_biking_adventures_itineraries_accommodation";
  DROP TYPE "public"."enum_biking_adventures_itineraries_meal";
  DROP TYPE "public"."enum_biking_adventures_itineraries_difficulty";
  DROP TYPE "public"."enum_biking_adventures_dates_status";
  DROP TYPE "public"."enum_biking_adventures_cost_travel_mode";
  DROP TYPE "public"."enum_biking_adventures_cost_vehicle_provided";
  DROP TYPE "public"."enum_biking_adventures_difficulty";
  DROP TYPE "public"."enum_biking_adventures_status";
  DROP TYPE "public"."enum__biking_adventures_v_version_accommodation";
  DROP TYPE "public"."enum__biking_adventures_v_version_meal";
  DROP TYPE "public"."enum__biking_adventures_v_version_itineraries_accommodation";
  DROP TYPE "public"."enum__biking_adventures_v_version_itineraries_meal";
  DROP TYPE "public"."enum__biking_adventures_v_version_itineraries_difficulty";
  DROP TYPE "public"."enum__biking_adventures_v_version_dates_status";
  DROP TYPE "public"."enum__biking_adventures_v_version_cost_travel_mode";
  DROP TYPE "public"."enum__biking_adventures_v_version_cost_vehicle_provided";
  DROP TYPE "public"."enum__biking_adventures_v_version_difficulty";
  DROP TYPE "public"."enum__biking_adventures_v_version_status";
  DROP TYPE "public"."enum_holiday_packages_accommodation";
  DROP TYPE "public"."enum_holiday_packages_meal";
  DROP TYPE "public"."enum_holiday_packages_itineraries_accommodation";
  DROP TYPE "public"."enum_holiday_packages_itineraries_meal";
  DROP TYPE "public"."enum_holiday_packages_itineraries_difficulty";
  DROP TYPE "public"."enum_holiday_packages_cost_travel_mode";
  DROP TYPE "public"."enum_holiday_packages_cost_vehicle_provided";
  DROP TYPE "public"."enum_holiday_packages_difficulty";
  DROP TYPE "public"."enum_holiday_packages_status";
  DROP TYPE "public"."enum__holiday_packages_v_version_accommodation";
  DROP TYPE "public"."enum__holiday_packages_v_version_meal";
  DROP TYPE "public"."enum__holiday_packages_v_version_itineraries_accommodation";
  DROP TYPE "public"."enum__holiday_packages_v_version_itineraries_meal";
  DROP TYPE "public"."enum__holiday_packages_v_version_itineraries_difficulty";
  DROP TYPE "public"."enum__holiday_packages_v_version_cost_travel_mode";
  DROP TYPE "public"."enum__holiday_packages_v_version_cost_vehicle_provided";
  DROP TYPE "public"."enum__holiday_packages_v_version_difficulty";
  DROP TYPE "public"."enum__holiday_packages_v_version_status";
  DROP TYPE "public"."enum_destinations_status";
  DROP TYPE "public"."enum__destinations_v_version_status";
  DROP TYPE "public"."enum_hotels_star_rating";
  DROP TYPE "public"."enum_redirects_to_type";
  DROP TYPE "public"."enum_forms_confirmation_type";
  DROP TYPE "public"."enum_payload_jobs_log_task_slug";
  DROP TYPE "public"."enum_payload_jobs_log_state";
  DROP TYPE "public"."enum_payload_jobs_task_slug";
  DROP TYPE "public"."enum_payload_folders_folder_type";
  DROP TYPE "public"."enum_header_nav_items_sub_links_sub_sub_links_link_type";
  DROP TYPE "public"."enum_header_nav_items_sub_links_link_type";
  DROP TYPE "public"."enum_header_nav_items_link_type";
  DROP TYPE "public"."enum_footer_quick_links_link_type";
  DROP TYPE "public"."enum_footer_adventure_rides_link_type";
  DROP TYPE "public"."enum_footer_destinations_link_type";
  DROP TYPE "public"."enum_sidebar_bottom_nav_items_link_type";
  DROP TYPE "public"."enum_sidebar_top_links_link_type";`)
}
