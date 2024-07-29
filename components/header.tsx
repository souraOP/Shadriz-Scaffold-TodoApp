import { ModeToggle } from "@/components/mode-toggle";

export default function Header() {
  return (
    <header className="bg-white dark:bg-black">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div>
          🍱{" "}
          <a href="/" className="font-bold">
            shadriz
          </a>
        </div>
        <div>
          <a
            href="/dashboard"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 mr-4"
          >
            Dashboard
          </a>
          <a href="/docs" className="text-gray-700 dark:text-gray-200 hover:text-blue-500 mr-4">
            Docs
          </a>
          <a href="/signin" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">
            Sign In
          </a>
          <div className="ml-5 inline-block">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
