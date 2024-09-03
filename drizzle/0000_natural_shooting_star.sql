CREATE TABLE IF NOT EXISTS "refreshTokens" (
	"token" text PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"email" text,
	"password" text,
	"created_at" timestamp DEFAULT '2024-09-03 16:52:05.629'
);
