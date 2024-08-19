import { text, timestamp, pgTable } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email"),
  password: text("password"),
  createdAt: timestamp("created_at").default(new Date()),
});
