import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Page() {
  return (
    <div>
      <Header />
      <section className="bg-white dark:bg-black">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Full Stack TypeScript Automation
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400 dark:text-gray-200">
            Ship in minutes instead of days. Spend more time creating. Less time
            on boilerplate. Free. Open Source.
          </p>
          <a
            href="/docs"
            className="mt-6 inline-block bg-black text-white dark:bg-white dark:text-black py-2 px-6 rounded-full shadow-md hover:bg-black/90 transition duration-300"
          >
            Get Started
          </a>
        </div>
      </section>

      <section className="container bg-gray-100 dark:bg-gray-900 mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Technologies
        </h2>
        <div className="mt-12 flex flex-wrap">
          <div className="w-full md:w-1/3 px-4 py-6">
            <h3 className="text-2xl font-bold">Next.js</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              React framework. Server components. Server actions.
            </p>
          </div>
          <div className="w-full md:w-1/3 px-4 py-6">
            <h3 className="text-2xl font-bold">shadcn/ui</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Pre-styled Radix UI components.
            </p>
          </div>
          <div className="w-full md:w-1/3 px-4 py-6">
            <h3 className="text-2xl font-bold">Drizzle ORM</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              SQL-like and Relational queries. Database migrations.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap">
          <div className="w-full md:w-1/3 px-4 py-6">
            <h3 className="text-2xl font-bold">Auth.js</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Authentication. OAuth.
            </p>
          </div>
          <div className="w-full md:w-1/3 px-4 py-6">
            <h3 className="text-2xl font-bold">TailwindCSS</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Utility-first CSS framework.
            </p>
          </div>
          <div className="w-full md:w-1/3 px-4 py-6">
            <h3 className="text-2xl font-bold">Zod</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Data validations.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
