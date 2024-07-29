"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Todo } from "@/schema/todo";

export const columns: ColumnDef<Todo>[] = [
  {
    accessorKey: "id",
    header: "id",
  },
  {
    accessorKey: "title",
    header: "title",
  },
  {
    accessorKey: "done",
    header: "done",
  },
  {
    id: "actions",
    cell: (({ row }) => {
        const id = row.getValue("id");
        return (
          <div className="text-blue-500">
              <a href={`/todo/${id}`}>view</a> | <a href={`/todo/${id}/edit`}>edit</a> | <a href={`/todo/${id}/delete`}>delete</a>
          </div>
        )
    })
  }
];
