import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_hero_slides" ADD COLUMN "offer_title" varchar;
  ALTER TABLE "pages_hero_slides" ADD COLUMN "offer_description" varchar;
  ALTER TABLE "pages_hero_slides" ADD COLUMN "offer_btn_text" varchar;
  ALTER TABLE "pages_hero_slides" ADD COLUMN "cta1_text" varchar;
  ALTER TABLE "pages_hero_slides" ADD COLUMN "cta2_text" varchar;
  ALTER TABLE "_pages_v_version_hero_slides" ADD COLUMN "offer_title" varchar;
  ALTER TABLE "_pages_v_version_hero_slides" ADD COLUMN "offer_description" varchar;
  ALTER TABLE "_pages_v_version_hero_slides" ADD COLUMN "offer_btn_text" varchar;
  ALTER TABLE "_pages_v_version_hero_slides" ADD COLUMN "cta1_text" varchar;
  ALTER TABLE "_pages_v_version_hero_slides" ADD COLUMN "cta2_text" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_hero_slides" DROP COLUMN "offer_title";
  ALTER TABLE "pages_hero_slides" DROP COLUMN "offer_description";
  ALTER TABLE "pages_hero_slides" DROP COLUMN "offer_btn_text";
  ALTER TABLE "pages_hero_slides" DROP COLUMN "cta1_text";
  ALTER TABLE "pages_hero_slides" DROP COLUMN "cta2_text";
  ALTER TABLE "_pages_v_version_hero_slides" DROP COLUMN "offer_title";
  ALTER TABLE "_pages_v_version_hero_slides" DROP COLUMN "offer_description";
  ALTER TABLE "_pages_v_version_hero_slides" DROP COLUMN "offer_btn_text";
  ALTER TABLE "_pages_v_version_hero_slides" DROP COLUMN "cta1_text";
  ALTER TABLE "_pages_v_version_hero_slides" DROP COLUMN "cta2_text";`)
}
