ALTER TABLE "user" ADD PRIMARY KEY ("id");--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "created_at" SET DEFAULT '2024-08-13 16:59:38.984';--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN IF EXISTS "updated_at";