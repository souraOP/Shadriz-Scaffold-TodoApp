import TodoUpdateForm from "@/components/todo/todo-update-form";
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
      <h1 className="text-3xl font-bold mb-6">Update todo</h1>
      <TodoUpdateForm data={data} />
    </div>
  );
}
