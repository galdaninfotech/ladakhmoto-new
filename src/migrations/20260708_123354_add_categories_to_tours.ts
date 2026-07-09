import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "cost_condition_conditions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"condition" varchar
  );
  
  CREATE TABLE "cost_condition" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "ultimate_adventures_rels" ADD COLUMN "categories_id" integer;
  ALTER TABLE "_ultimate_adventures_v_rels" ADD COLUMN "categories_id" integer;
  ALTER TABLE "biking_adventures_rels" ADD COLUMN "categories_id" integer;
  ALTER TABLE "_biking_adventures_v_rels" ADD COLUMN "categories_id" integer;
  ALTER TABLE "holiday_packages_rels" ADD COLUMN "categories_id" integer;
  ALTER TABLE "_holiday_packages_v_rels" ADD COLUMN "categories_id" integer;
  ALTER TABLE "cost_condition_conditions" ADD CONSTRAINT "cost_condition_conditions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cost_condition"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "cost_condition_conditions_order_idx" ON "cost_condition_conditions" USING btree ("_order");
  CREATE INDEX "cost_condition_conditions_parent_id_idx" ON "cost_condition_conditions" USING btree ("_parent_id");
  ALTER TABLE "ultimate_adventures_rels" ADD CONSTRAINT "ultimate_adventures_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ultimate_adventures_v_rels" ADD CONSTRAINT "_ultimate_adventures_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "biking_adventures_rels" ADD CONSTRAINT "biking_adventures_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_biking_adventures_v_rels" ADD CONSTRAINT "_biking_adventures_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "holiday_packages_rels" ADD CONSTRAINT "holiday_packages_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_holiday_packages_v_rels" ADD CONSTRAINT "_holiday_packages_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "ultimate_adventures_rels_categories_id_idx" ON "ultimate_adventures_rels" USING btree ("categories_id");
  CREATE INDEX "_ultimate_adventures_v_rels_categories_id_idx" ON "_ultimate_adventures_v_rels" USING btree ("categories_id");
  CREATE INDEX "biking_adventures_rels_categories_id_idx" ON "biking_adventures_rels" USING btree ("categories_id");
  CREATE INDEX "_biking_adventures_v_rels_categories_id_idx" ON "_biking_adventures_v_rels" USING btree ("categories_id");
  CREATE INDEX "holiday_packages_rels_categories_id_idx" ON "holiday_packages_rels" USING btree ("categories_id");
  CREATE INDEX "_holiday_packages_v_rels_categories_id_idx" ON "_holiday_packages_v_rels" USING btree ("categories_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "cost_condition_conditions" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cost_condition" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "cost_condition_conditions" CASCADE;
  DROP TABLE "cost_condition" CASCADE;
  ALTER TABLE "ultimate_adventures_rels" DROP CONSTRAINT "ultimate_adventures_rels_categories_fk";
  
  ALTER TABLE "_ultimate_adventures_v_rels" DROP CONSTRAINT "_ultimate_adventures_v_rels_categories_fk";
  
  ALTER TABLE "biking_adventures_rels" DROP CONSTRAINT "biking_adventures_rels_categories_fk";
  
  ALTER TABLE "_biking_adventures_v_rels" DROP CONSTRAINT "_biking_adventures_v_rels_categories_fk";
  
  ALTER TABLE "holiday_packages_rels" DROP CONSTRAINT "holiday_packages_rels_categories_fk";
  
  ALTER TABLE "_holiday_packages_v_rels" DROP CONSTRAINT "_holiday_packages_v_rels_categories_fk";
  
  DROP INDEX "ultimate_adventures_rels_categories_id_idx";
  DROP INDEX "_ultimate_adventures_v_rels_categories_id_idx";
  DROP INDEX "biking_adventures_rels_categories_id_idx";
  DROP INDEX "_biking_adventures_v_rels_categories_id_idx";
  DROP INDEX "holiday_packages_rels_categories_id_idx";
  DROP INDEX "_holiday_packages_v_rels_categories_id_idx";
  ALTER TABLE "ultimate_adventures_rels" DROP COLUMN "categories_id";
  ALTER TABLE "_ultimate_adventures_v_rels" DROP COLUMN "categories_id";
  ALTER TABLE "biking_adventures_rels" DROP COLUMN "categories_id";
  ALTER TABLE "_biking_adventures_v_rels" DROP COLUMN "categories_id";
  ALTER TABLE "holiday_packages_rels" DROP COLUMN "categories_id";
  ALTER TABLE "_holiday_packages_v_rels" DROP COLUMN "categories_id";`)
}
