"use server";

import { db } from "@/lib/db";
import { insertTodoSchema, todo } from "@/schema/todo";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";

export interface UpdateTodoState {
  errors?: {
    title?: string[];
    done?: string[];
  };
  message?: string;
}

export async function updateTodo(
  prevState: UpdateTodoState,
  formData: FormData
): Promise<UpdateTodoState> {
  const session = await auth();
  if (!session) {
    throw new Error("access denied")
  }

  const validatedFields = insertTodoSchema.safeParse({
    id: parseInt(formData.get("id") as string),
    title: formData.get("title") as string,
    done: !!formData.get("done"),

  });
  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);

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
  await db
    .update(todo)
    .set({
      title: validatedFields.data.title,
      done: validatedFields.data.done,
    })
    .where(eq(todo.id, validatedFields.data.id));

  revalidatePath("/todo");
  revalidatePath("/todo/" + validatedFields.data.id);
  revalidatePath("/todo/" + validatedFields.data.id + "/edit");

  return {
    message: "success",
  };
}
