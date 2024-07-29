"use client";

import { createTodo, CreateTodoState } from "@/actions/todo/create-todo";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { useFormState } from "react-dom";

export default function TodoCreateForm() {
  const initialState: CreateTodoState = {};
  const [state, dispatch] = useFormState(createTodo, initialState);

  return (
    <div>
      <form action={dispatch} className="flex flex-col gap-2">
        <div>
          <Label>title</Label>
          <Textarea name="title" />
          {state.errors?.title?.map((error) => (
            <p className="text-red-500" key={error}>{error}</p>
          ))}
        </div>
        <div>
          <Label>done</Label>
          <Checkbox name="done" />
          {state.errors?.done?.map((error) => (
            <p className="text-red-500" key={error}>{error}</p>
          ))}
        </div>
        <div>
          <Button type="submit">Submit</Button>
        </div>
        <div>
          {state.message === "error" && <p className="text-red-500">error</p>}
        </div>
      </form>
    </div>
  );
}
