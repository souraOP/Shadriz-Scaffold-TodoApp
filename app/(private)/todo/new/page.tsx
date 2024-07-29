import TodoCreateForm from "@/components/todo/todo-create-form";

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Create todo</h1>
      <TodoCreateForm />
    </div>
  );
}
