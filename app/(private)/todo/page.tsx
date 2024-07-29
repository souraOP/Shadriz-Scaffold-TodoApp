import { columns } from "@/components/todo/todo-columns";
import { DataTable } from "@/components/ui/data-table";
import { db } from "@/lib/db";

export default async function Page() {
  const data = await db.query.todo.findMany();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">todo</h1>
      <div className="text-right mr-2">
        <a href="todo/new" className="text-blue-500">
          new
        </a>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
