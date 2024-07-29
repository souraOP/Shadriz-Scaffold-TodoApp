import {
  sqliteTable,
  integer,
  text,
  boolean,
} from "drizzle-orm/sqlite-core";
import { createInsertSchema } from "drizzle-zod";
import { uuidv7 } from "uuidv7";
import { sql } from "drizzle-orm";

export const todo = sqliteTable(
  "todo",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    title: text("title"),
    done: integer("done", { mode: "boolean" } ),
  }
)

export type Todo = typeof todo.$inferSelect;

export const insertTodoSchema = createInsertSchema(todo)
