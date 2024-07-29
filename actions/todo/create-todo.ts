"use server";

import { db } from "@/lib/db";
import { insertTodoSchema, todo } from "@/schema/todo";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";

export interface CreateTodoState {
  errors?: {
    title?: string[];
    done?: string[];
  };
  message?: string;
}

export async function createTodo(
  prevState: CreateTodoState,
  formData: FormData
): Promise<CreateTodoState> {
  const session = await auth();
  if (!session) {
    throw new Error("access denied")
  }

  const validatedFields = insertTodoSchema.safeParse({
    title: formData.get("title") as string,
    done: !!formData.get("done"),

  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "error",
    };
  }
  await db.insert(todo).values({
    title: validatedFields.data.title,
    done: validatedFields.data.done,
  });
  revalidatePath("/todo");
  redirect("/todo");
}
