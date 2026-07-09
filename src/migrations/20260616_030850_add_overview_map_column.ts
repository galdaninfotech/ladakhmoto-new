import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "ultimate_adventures_tour_highlights" CASCADE;
  DROP TABLE "_ultimate_adventures_v_version_tour_highlights" CASCADE;
  DROP TABLE "biking_adventures_tour_highlights" CASCADE;
  DROP TABLE "_biking_adventures_v_version_tour_highlights" CASCADE;
  DROP TABLE "holiday_packages_tour_highlights" CASCADE;
  DROP TABLE "_holiday_packages_v_version_tour_highlights" CASCADE;
  ALTER TABLE "ultimate_adventures" ADD COLUMN "overview_map" varchar;
  ALTER TABLE "_ultimate_adventures_v" ADD COLUMN "version_overview_map" varchar;
  ALTER TABLE "biking_adventures" ADD COLUMN "overview_map" varchar;
  ALTER TABLE "_biking_adventures_v" ADD COLUMN "version_overview_map" varchar;
  ALTER TABLE "holiday_packages" ADD COLUMN "overview_map" varchar;
  ALTER TABLE "_holiday_packages_v" ADD COLUMN "version_overview_map" varchar;
  ALTER TABLE "ultimate_adventures_itineraries" DROP COLUMN "highlights";
  ALTER TABLE "_ultimate_adventures_v_version_itineraries" DROP COLUMN "highlights";
  ALTER TABLE "biking_adventures_itineraries" DROP COLUMN "highlights";
  ALTER TABLE "_biking_adventures_v_version_itineraries" DROP COLUMN "highlights";
  ALTER TABLE "holiday_packages_itineraries" DROP COLUMN "highlights";
  ALTER TABLE "_holiday_packages_v_version_itineraries" DROP COLUMN "highlights";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "ultimate_adventures_tour_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"highlight" varchar
  );
  
  CREATE TABLE "_ultimate_adventures_v_version_tour_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"highlight" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "biking_adventures_tour_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"highlight" varchar
  );
  
  CREATE TABLE "_biking_adventures_v_version_tour_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"highlight" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "holiday_packages_tour_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"highlight" varchar
  );
  
  CREATE TABLE "_holiday_packages_v_version_tour_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"highlight" varchar,
  	"_uuid" varchar
  );
  
  ALTER TABLE "ultimate_adventures_itineraries" ADD COLUMN "highlights" varchar;
  ALTER TABLE "_ultimate_adventures_v_version_itineraries" ADD COLUMN "highlights" varchar;
  ALTER TABLE "biking_adventures_itineraries" ADD COLUMN "highlights" varchar;
  ALTER TABLE "_biking_adventures_v_version_itineraries" ADD COLUMN "highlights" varchar;
  ALTER TABLE "holiday_packages_itineraries" ADD COLUMN "highlights" varchar;
  ALTER TABLE "_holiday_packages_v_version_itineraries" ADD COLUMN "highlights" varchar;
  ALTER TABLE "ultimate_adventures_tour_highlights" ADD CONSTRAINT "ultimate_adventures_tour_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ultimate_adventures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ultimate_adventures_v_version_tour_highlights" ADD CONSTRAINT "_ultimate_adventures_v_version_tour_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_ultimate_adventures_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "biking_adventures_tour_highlights" ADD CONSTRAINT "biking_adventures_tour_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."biking_adventures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_biking_adventures_v_version_tour_highlights" ADD CONSTRAINT "_biking_adventures_v_version_tour_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_biking_adventures_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "holiday_packages_tour_highlights" ADD CONSTRAINT "holiday_packages_tour_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."holiday_packages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_holiday_packages_v_version_tour_highlights" ADD CONSTRAINT "_holiday_packages_v_version_tour_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_holiday_packages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "ultimate_adventures_tour_highlights_order_idx" ON "ultimate_adventures_tour_highlights" USING btree ("_order");
  CREATE INDEX "ultimate_adventures_tour_highlights_parent_id_idx" ON "ultimate_adventures_tour_highlights" USING btree ("_parent_id");
  CREATE INDEX "_ultimate_adventures_v_version_tour_highlights_order_idx" ON "_ultimate_adventures_v_version_tour_highlights" USING btree ("_order");
  CREATE INDEX "_ultimate_adventures_v_version_tour_highlights_parent_id_idx" ON "_ultimate_adventures_v_version_tour_highlights" USING btree ("_parent_id");
  CREATE INDEX "biking_adventures_tour_highlights_order_idx" ON "biking_adventures_tour_highlights" USING btree ("_order");
  CREATE INDEX "biking_adventures_tour_highlights_parent_id_idx" ON "biking_adventures_tour_highlights" USING btree ("_parent_id");
  CREATE INDEX "_biking_adventures_v_version_tour_highlights_order_idx" ON "_biking_adventures_v_version_tour_highlights" USING btree ("_order");
  CREATE INDEX "_biking_adventures_v_version_tour_highlights_parent_id_idx" ON "_biking_adventures_v_version_tour_highlights" USING btree ("_parent_id");
  CREATE INDEX "holiday_packages_tour_highlights_order_idx" ON "holiday_packages_tour_highlights" USING btree ("_order");
  CREATE INDEX "holiday_packages_tour_highlights_parent_id_idx" ON "holiday_packages_tour_highlights" USING btree ("_parent_id");
  CREATE INDEX "_holiday_packages_v_version_tour_highlights_order_idx" ON "_holiday_packages_v_version_tour_highlights" USING btree ("_order");
  CREATE INDEX "_holiday_packages_v_version_tour_highlights_parent_id_idx" ON "_holiday_packages_v_version_tour_highlights" USING btree ("_parent_id");
  ALTER TABLE "ultimate_adventures" DROP COLUMN "overview_map";
  ALTER TABLE "_ultimate_adventures_v" DROP COLUMN "version_overview_map";
  ALTER TABLE "biking_adventures" DROP COLUMN "overview_map";
  ALTER TABLE "_biking_adventures_v" DROP COLUMN "version_overview_map";
  ALTER TABLE "holiday_packages" DROP COLUMN "overview_map";
  ALTER TABLE "_holiday_packages_v" DROP COLUMN "version_overview_map";`)
}
