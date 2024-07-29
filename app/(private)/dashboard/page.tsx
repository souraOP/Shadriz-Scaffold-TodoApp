export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Statistics</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-900 shadow-md p-4 rounded-lg">
            <h3 className="text-xl font-bold">Users</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">1,234</p>
          </div>
          <div className="bg-white dark:bg-gray-900 shadow-md p-4 rounded-lg">
            <h3 className="text-xl font-bold">Revenue</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">$12,345</p>
          </div>
          <div className="bg-white dark:bg-gray-900 shadow-md p-4 rounded-lg">
            <h3 className="text-xl font-bold">Sessions</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">567</p>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
        <ul className="bg-white dark:bg-gray-900 shadow-md rounded-lg divide-y divide-gray-200">
          <li className="p-4 hover:bg-gray-100 dark:hover:bg-gray-950">
            <p className="text-gray-600 dark:text-gray-300">User A signed up</p>
            <p className="text-gray-400 text-sm">2 hours ago</p>
          </li>
          <li className="p-4 hover:bg-gray-100 dark:hover:bg-gray-950">
            <p className="text-gray-600 dark:text-gray-300">
              User B made a purchase
            </p>
            <p className="text-gray-400 text-sm">4 hours ago</p>
          </li>
          <li className="p-4 hover:bg-gray-100 dark:hover:bg-gray-950">
            <p className="text-gray-600 dark:text-gray-300">User C logged in</p>
            <p className="text-gray-400 text-sm">6 hours ago</p>
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
        <ul className="bg-white dark:bg-gray-900 shadow-md rounded-lg divide-y divide-gray-200">
          <li className="p-4 hover:bg-gray-100 dark:hover:bg-gray-950">
            <p className="text-gray-600 dark:text-gray-300">
              You have a new message
            </p>
            <p className="text-gray-400 text-sm">10 minutes ago</p>
          </li>
          <li className="p-4 hover:bg-gray-100 dark:hover:bg-gray-950">
            <p className="text-gray-600 dark:text-gray-300">
              Your order has been shipped
            </p>
            <p className="text-gray-400 text-sm">1 hour ago</p>
          </li>
          <li className="p-4 hover:bg-gray-100 dark:hover:bg-gray-950">
            <p className="text-gray-600 dark:text-gray-300">
              System update available
            </p>
            <p className="text-gray-400 text-sm">3 hours ago</p>
          </li>
        </ul>
      </section>
    </div>
  );
}
