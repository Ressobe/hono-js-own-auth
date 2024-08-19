import { eq } from "drizzle-orm";
import { db } from "./db";
import { users } from "./schema";

export async function createUser(
  name: string,
  email: string,
  password: string,
) {
  return await db.insert(users).values({
    name,
    email,
    password,
  });
}

export async function getUserByEmail(email: string) {
  return await db.query.users.findFirst({
    where: eq(users.email, email),
  });
}

export async function getUserById(userId: string) {
  return await db.query.users.findFirst({
    where: eq(users.id, userId),
  });
}
