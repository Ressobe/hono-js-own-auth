import { eq } from "drizzle-orm";
import { db } from "./db";
import { refreshTokens } from "./schema";

export async function insertToken(token: string) {
  await db.insert(refreshTokens).values({ token });
}

export async function getToken(token: string) {
  return await db.query.refreshTokens.findFirst({
    where: eq(refreshTokens.token, token),
  });
}
