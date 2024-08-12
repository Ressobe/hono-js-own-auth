import { Hono } from "hono";
import { db } from "./database/db";

const app = new Hono();

app.get("/", async (c) => {
  const user = await db.query.user.findFirst();
  return c.text(`User name: ${user?.name}`);
});

export default app;
