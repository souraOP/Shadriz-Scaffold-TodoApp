"use client";

import { deleteTodo, DeleteTodoState } from "@/actions/todo/delete-todo";
import { Button } from "../ui/button";
import { useFormState } from "react-dom";
import { Todo } from "@/schema/todo";

export default function TodoDeleteForm({ data }: { data: Todo }) {
  const initialState: DeleteTodoState = {};
  const [state, dispatch] = useFormState(deleteTodo, initialState);

  return (
    <div>
      <form action={dispatch}>
        <input type="hidden" name="id" value={data.id} />
        <Button type="submit" variant="destructive">
          Delete
        </Button>
      </form>
    </div>
  );
}
