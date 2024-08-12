import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import * as schema from "./schema";

const client = new Client({
  connectionString: "postgres://myuser:mypassword@localhost:5432/mydatabase",
});

await client.connect();
const db = drizzle(client, { schema });

export { db };
