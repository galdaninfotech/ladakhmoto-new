import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_hero_slides" ADD COLUMN "offer_url" varchar;
  ALTER TABLE "_pages_v_version_hero_slides" ADD COLUMN "offer_url" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_hero_slides" DROP COLUMN "offer_url";
  ALTER TABLE "_pages_v_version_hero_slides" DROP COLUMN "offer_url";`)
}
