import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_blocks_deal_of_the_day" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"enabled" boolean DEFAULT true,
  	"image_id" integer,
  	"title" varchar,
  	"sub_title" varchar,
  	"description" varchar,
  	"start_date" timestamp(3) with time zone,
  	"end_date" timestamp(3) with time zone,
  	"price" varchar,
  	"url" varchar,
  	"button_text" varchar DEFAULT 'View Deal',
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_deal_of_the_day" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"enabled" boolean DEFAULT true,
  	"image_id" integer,
  	"title" varchar,
  	"sub_title" varchar,
  	"description" varchar,
  	"start_date" timestamp(3) with time zone,
  	"end_date" timestamp(3) with time zone,
  	"price" varchar,
  	"url" varchar,
  	"button_text" varchar DEFAULT 'View Deal',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_deal_of_the_day" ADD CONSTRAINT "pages_blocks_deal_of_the_day_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_deal_of_the_day" ADD CONSTRAINT "pages_blocks_deal_of_the_day_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_deal_of_the_day" ADD CONSTRAINT "_pages_v_blocks_deal_of_the_day_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_deal_of_the_day" ADD CONSTRAINT "_pages_v_blocks_deal_of_the_day_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_deal_of_the_day_order_idx" ON "pages_blocks_deal_of_the_day" USING btree ("_order");
  CREATE INDEX "pages_blocks_deal_of_the_day_parent_id_idx" ON "pages_blocks_deal_of_the_day" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_deal_of_the_day_path_idx" ON "pages_blocks_deal_of_the_day" USING btree ("_path");
  CREATE INDEX "pages_blocks_deal_of_the_day_image_idx" ON "pages_blocks_deal_of_the_day" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_deal_of_the_day_order_idx" ON "_pages_v_blocks_deal_of_the_day" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_deal_of_the_day_parent_id_idx" ON "_pages_v_blocks_deal_of_the_day" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_deal_of_the_day_path_idx" ON "_pages_v_blocks_deal_of_the_day" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_deal_of_the_day_image_idx" ON "_pages_v_blocks_deal_of_the_day" USING btree ("image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_deal_of_the_day" CASCADE;
  DROP TABLE "_pages_v_blocks_deal_of_the_day" CASCADE;`)
}
