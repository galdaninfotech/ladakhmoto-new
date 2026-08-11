import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "hotels_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"caption" varchar
  );
  
  ALTER TABLE "hotels" DROP CONSTRAINT "hotels_image_id_media_id_fk";
  
  DROP INDEX "hotels_image_idx";
  ALTER TABLE "hotels_gallery" ADD CONSTRAINT "hotels_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "hotels_gallery" ADD CONSTRAINT "hotels_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hotels"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "hotels_gallery_order_idx" ON "hotels_gallery" USING btree ("_order");
  CREATE INDEX "hotels_gallery_parent_id_idx" ON "hotels_gallery" USING btree ("_parent_id");
  CREATE INDEX "hotels_gallery_image_idx" ON "hotels_gallery" USING btree ("image_id");
  ALTER TABLE "hotels" DROP COLUMN "image_id";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "hotels_gallery" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "hotels_gallery" CASCADE;
  ALTER TABLE "hotels" ADD COLUMN "image_id" integer NOT NULL;
  ALTER TABLE "hotels" ADD CONSTRAINT "hotels_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "hotels_image_idx" ON "hotels" USING btree ("image_id");`)
}
