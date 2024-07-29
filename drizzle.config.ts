import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

export default defineConfig({
  dialect: "sqlite",
  schema: "./schema/*",
  dbCredentials: {
    url: process.env.DB_URL!,
  },
  verbose: true,
  strict: true,
  out: "./drizzle",
});
