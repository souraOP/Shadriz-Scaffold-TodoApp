"use client";

import { updateTodo, UpdateTodoState } from "@/actions/todo/update-todo";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { useFormState } from "react-dom";
import { Todo } from "@/schema/todo";

export default function TodoUpdateForm({ data }: { data: Todo }) {
  const initialState: UpdateTodoState = {};
  const [state, dispatch] = useFormState(updateTodo, initialState);

  return (
    <div>
      <form action={dispatch} className="flex flex-col gap-2">
        <input type="hidden" name="id" value={ data.id } />
        <div>
          <Label>id</Label>
          <Input disabled defaultValue={ data.id } />
        </div>
        <div>
          <Label>title</Label>
          <Textarea name="title" defaultValue={ data.title ?? "" } />
          {state.errors?.title?.map((error) => (
            <p className="text-red-500" key={error}>{error}</p>
          ))}
        </div>
        <div>
          <Label>done</Label>
          <Checkbox name="done" defaultChecked={ data.done ?? false } />
          {state.errors?.done?.map((error) => (
            <p className="text-red-500" key={error}>{error}</p>
          ))}
        </div>
        <div>
          <Button type="submit">Submit</Button>
        </div>
        <div>
          {state.message === "error" && <p className="text-red-500">error</p>}
          {state.message === "success" && (
            <p className="text-green-500">success</p>
          )}
        </div>
      </form>
    </div>
  );
}
