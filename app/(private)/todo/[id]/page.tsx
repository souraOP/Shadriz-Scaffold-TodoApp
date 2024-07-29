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
      <h1 className="text-3xl font-bold mb-6">todo</h1>
      <div>
        {Object.entries(data).map((entry) => (
          <p key={entry[0]}>
            {entry[0]}: {JSON.stringify(entry[1])}
          </p>
        ))}
      </div>
    </div>
  );
}
