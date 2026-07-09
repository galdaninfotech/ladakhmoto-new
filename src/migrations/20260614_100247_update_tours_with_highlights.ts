import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "ultimate_adventures_rels" ADD COLUMN "highlights_id" integer;
  ALTER TABLE "_ultimate_adventures_v_rels" ADD COLUMN "highlights_id" integer;
  ALTER TABLE "biking_adventures_rels" ADD COLUMN "highlights_id" integer;
  ALTER TABLE "_biking_adventures_v_rels" ADD COLUMN "highlights_id" integer;
  ALTER TABLE "holiday_packages_rels" ADD COLUMN "highlights_id" integer;
  ALTER TABLE "_holiday_packages_v_rels" ADD COLUMN "highlights_id" integer;
  ALTER TABLE "ultimate_adventures_rels" ADD CONSTRAINT "ultimate_adventures_rels_highlights_fk" FOREIGN KEY ("highlights_id") REFERENCES "public"."highlights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ultimate_adventures_v_rels" ADD CONSTRAINT "_ultimate_adventures_v_rels_highlights_fk" FOREIGN KEY ("highlights_id") REFERENCES "public"."highlights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "biking_adventures_rels" ADD CONSTRAINT "biking_adventures_rels_highlights_fk" FOREIGN KEY ("highlights_id") REFERENCES "public"."highlights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_biking_adventures_v_rels" ADD CONSTRAINT "_biking_adventures_v_rels_highlights_fk" FOREIGN KEY ("highlights_id") REFERENCES "public"."highlights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "holiday_packages_rels" ADD CONSTRAINT "holiday_packages_rels_highlights_fk" FOREIGN KEY ("highlights_id") REFERENCES "public"."highlights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_holiday_packages_v_rels" ADD CONSTRAINT "_holiday_packages_v_rels_highlights_fk" FOREIGN KEY ("highlights_id") REFERENCES "public"."highlights"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "ultimate_adventures_rels_highlights_id_idx" ON "ultimate_adventures_rels" USING btree ("highlights_id");
  CREATE INDEX "_ultimate_adventures_v_rels_highlights_id_idx" ON "_ultimate_adventures_v_rels" USING btree ("highlights_id");
  CREATE INDEX "biking_adventures_rels_highlights_id_idx" ON "biking_adventures_rels" USING btree ("highlights_id");
  CREATE INDEX "_biking_adventures_v_rels_highlights_id_idx" ON "_biking_adventures_v_rels" USING btree ("highlights_id");
  CREATE INDEX "holiday_packages_rels_highlights_id_idx" ON "holiday_packages_rels" USING btree ("highlights_id");
  CREATE INDEX "_holiday_packages_v_rels_highlights_id_idx" ON "_holiday_packages_v_rels" USING btree ("highlights_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "ultimate_adventures_rels" DROP CONSTRAINT "ultimate_adventures_rels_highlights_fk";
  
  ALTER TABLE "_ultimate_adventures_v_rels" DROP CONSTRAINT "_ultimate_adventures_v_rels_highlights_fk";
  
  ALTER TABLE "biking_adventures_rels" DROP CONSTRAINT "biking_adventures_rels_highlights_fk";
  
  ALTER TABLE "_biking_adventures_v_rels" DROP CONSTRAINT "_biking_adventures_v_rels_highlights_fk";
  
  ALTER TABLE "holiday_packages_rels" DROP CONSTRAINT "holiday_packages_rels_highlights_fk";
  
  ALTER TABLE "_holiday_packages_v_rels" DROP CONSTRAINT "_holiday_packages_v_rels_highlights_fk";
  
  DROP INDEX "ultimate_adventures_rels_highlights_id_idx";
  DROP INDEX "_ultimate_adventures_v_rels_highlights_id_idx";
  DROP INDEX "biking_adventures_rels_highlights_id_idx";
  DROP INDEX "_biking_adventures_v_rels_highlights_id_idx";
  DROP INDEX "holiday_packages_rels_highlights_id_idx";
  DROP INDEX "_holiday_packages_v_rels_highlights_id_idx";
  ALTER TABLE "ultimate_adventures_rels" DROP COLUMN "highlights_id";
  ALTER TABLE "_ultimate_adventures_v_rels" DROP COLUMN "highlights_id";
  ALTER TABLE "biking_adventures_rels" DROP COLUMN "highlights_id";
  ALTER TABLE "_biking_adventures_v_rels" DROP COLUMN "highlights_id";
  ALTER TABLE "holiday_packages_rels" DROP COLUMN "highlights_id";
  ALTER TABLE "_holiday_packages_v_rels" DROP COLUMN "highlights_id";`)
}
