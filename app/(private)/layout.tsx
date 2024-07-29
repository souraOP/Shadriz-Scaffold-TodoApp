import { auth, signOut } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DashboardIcon,
  ExitIcon,
  GearIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) {
    redirect("/signin");
  }
  return (
    <div>
      <header className="bg-gray-300 dark:bg-gray-900">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold">
            🍱 <a href="/">shadriz</a>
          </div>
          <div>
            <Avatar>
              <AvatarImage src={session.user?.image ?? undefined} />
              <AvatarFallback>
                {session.user?.email?.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className="w-1/4 bg-gray-100 dark:bg-gray-950 shadow-md min-h-screen">
          <nav className="px-6 py-8">
            <ul>
              <li className="mb-4">
                <a
                  href="/dashboard"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 font-semibold"
                >
                  <DashboardIcon /> Dashboard
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="/profile"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 font-semibold"
                >
                  <PersonIcon /> Profile
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="/settings"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 font-semibold"
                >
                  <GearIcon /> Settings
                </a>
              </li>
              <li className="mb-4">
                <form
                  action={async () => {
                    "use server";
                    await signOut({ redirectTo: "/" });
                  }}
                >
                  <button
                    type="submit"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 font-semibold"
                  >
                    <ExitIcon /> Sign Out
                  </button>
                </form>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="w-3/4 p-6 bg-white dark:bg-black">{children}</main>
      </div>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 shadriz</p>
        </div>
      </footer>
    </div>
  );
}
