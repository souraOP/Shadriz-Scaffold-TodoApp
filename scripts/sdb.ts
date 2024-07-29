import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

export const betterSqlite = new Database(process.env.DB_URL);
export const sdb = drizzle(betterSqlite);