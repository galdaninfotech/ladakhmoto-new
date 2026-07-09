import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_highlights_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__highlights_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE "highlights_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar
  );
  
  CREATE TABLE "highlights" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"intro" jsonb,
  	"description" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_highlights_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_highlights_v_version_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_highlights_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_intro" jsonb,
  	"version_description" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__highlights_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "highlights_id" integer;
  ALTER TABLE "highlights_gallery" ADD CONSTRAINT "highlights_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "highlights_gallery" ADD CONSTRAINT "highlights_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."highlights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "highlights" ADD CONSTRAINT "highlights_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_highlights_v_version_gallery" ADD CONSTRAINT "_highlights_v_version_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_highlights_v_version_gallery" ADD CONSTRAINT "_highlights_v_version_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_highlights_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_highlights_v" ADD CONSTRAINT "_highlights_v_parent_id_highlights_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."highlights"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_highlights_v" ADD CONSTRAINT "_highlights_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "highlights_gallery_order_idx" ON "highlights_gallery" USING btree ("_order");
  CREATE INDEX "highlights_gallery_parent_id_idx" ON "highlights_gallery" USING btree ("_parent_id");
  CREATE INDEX "highlights_gallery_image_idx" ON "highlights_gallery" USING btree ("image_id");
  CREATE INDEX "highlights_meta_meta_image_idx" ON "highlights" USING btree ("meta_image_id");
  CREATE INDEX "highlights_slug_idx" ON "highlights" USING btree ("slug");
  CREATE INDEX "highlights_updated_at_idx" ON "highlights" USING btree ("updated_at");
  CREATE INDEX "highlights_created_at_idx" ON "highlights" USING btree ("created_at");
  CREATE INDEX "highlights__status_idx" ON "highlights" USING btree ("_status");
  CREATE INDEX "_highlights_v_version_gallery_order_idx" ON "_highlights_v_version_gallery" USING btree ("_order");
  CREATE INDEX "_highlights_v_version_gallery_parent_id_idx" ON "_highlights_v_version_gallery" USING btree ("_parent_id");
  CREATE INDEX "_highlights_v_version_gallery_image_idx" ON "_highlights_v_version_gallery" USING btree ("image_id");
  CREATE INDEX "_highlights_v_parent_idx" ON "_highlights_v" USING btree ("parent_id");
  CREATE INDEX "_highlights_v_version_meta_version_meta_image_idx" ON "_highlights_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_highlights_v_version_version_slug_idx" ON "_highlights_v" USING btree ("version_slug");
  CREATE INDEX "_highlights_v_version_version_updated_at_idx" ON "_highlights_v" USING btree ("version_updated_at");
  CREATE INDEX "_highlights_v_version_version_created_at_idx" ON "_highlights_v" USING btree ("version_created_at");
  CREATE INDEX "_highlights_v_version_version__status_idx" ON "_highlights_v" USING btree ("version__status");
  CREATE INDEX "_highlights_v_created_at_idx" ON "_highlights_v" USING btree ("created_at");
  CREATE INDEX "_highlights_v_updated_at_idx" ON "_highlights_v" USING btree ("updated_at");
  CREATE INDEX "_highlights_v_latest_idx" ON "_highlights_v" USING btree ("latest");
  CREATE INDEX "_highlights_v_autosave_idx" ON "_highlights_v" USING btree ("autosave");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_highlights_fk" FOREIGN KEY ("highlights_id") REFERENCES "public"."highlights"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_highlights_id_idx" ON "payload_locked_documents_rels" USING btree ("highlights_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "highlights_gallery" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "highlights" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_highlights_v_version_gallery" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_highlights_v" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "highlights_gallery" CASCADE;
  DROP TABLE "highlights" CASCADE;
  DROP TABLE "_highlights_v_version_gallery" CASCADE;
  DROP TABLE "_highlights_v" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_highlights_fk";
  
  DROP INDEX "payload_locked_documents_rels_highlights_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "highlights_id";
  DROP TYPE "public"."enum_highlights_status";
  DROP TYPE "public"."enum__highlights_v_version_status";`)
}
