import TodoDeleteForm from "@/components/todo/todo-delete-form";
import { db } from "@/lib/db";
import { todo } from "@/schema/todo";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const data = await db.query.todo.findFirst({ where: eq(todo.id, id) });

  if (!data) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Delete todo</h1>
      <TodoDeleteForm data={data} />
    </div>
  );
}
