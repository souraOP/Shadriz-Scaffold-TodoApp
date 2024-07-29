import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import { betterSqlite, sdb } from "./sdb";

migrate(sdb, { migrationsFolder: "drizzle" });
betterSqlite.close()
