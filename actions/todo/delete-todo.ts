"use server";

import { db } from "@/lib/db";
import { insertTodoSchema, todo } from "@/schema/todo";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export interface DeleteTodoState {
  errors?: {
    id?: string[];
  };
  message?: string;
}

export async function deleteTodo(
  prevState: DeleteTodoState,
  formData: FormData
): Promise<DeleteTodoState> {
  const session = await auth();
  if (!session) {
    throw new Error("access denied")
  }

  const validatedFields = insertTodoSchema.safeParse({
    id: parseInt(formData.get("id") as string),

  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "error",
    };
  }
  if (!validatedFields.data.id) {
    return {
      message: "error",
    };
  }
  await db.delete(todo).where(eq(todo.id, validatedFields.data.id));
  revalidatePath("/todo");
  redirect("/todo");
}
