"use client";

import "@/styles/docs.css";

const readme = `<h1>🍱 shadriz</h1>
<h2>Full Stack TypeScript Scaffolding Inspired by Ruby on Rails</h2>
<p>shadriz is a full stack automation tool for building TypeScript web applications using a curated selection of technologies.</p>
<p>shadriz is not a dependency that is added to your project. Instead, it is a command line code generation tool.</p>
<p>Spend more time creating, less time on boilerplate. Ship in minutes instead of days. Free. Open Source.</p>
<h2>⌨️ Tech Stack</h2>
<ul>
<li><a href="https://nextjs.org/">Next.js</a> - React Framework</li>
<li><a href="https://ui.shadcn.com/">shadcn/ui</a> - UI Components</li>
<li><a href="https://orm.drizzle.team/">Drizzle ORM</a> - Object Relational Mapper</li>
<li><a href="https://tailwindcss.com/">TailwindCSS</a> - CSS Framework</li>
<li><a href="https://authjs.dev/">Auth.js</a> - Authentication</li>
<li><a href="https://zod.dev/">zod</a> - Validation</li>
</ul>
<h2>🚀 Getting started</h2>
<h3>Step 1: Create new project</h3>
<p>Start by creating a new Next.js project using <code>create-next-app</code>.</p>
<pre><code class="language-bash">npx create-next-app@latest my-app --typescript --eslint --tailwind --app --no-src-dir --no-import-alias
</code></pre>
<h3>Step 2: Run the CLI</h3>
<p>Run the <code>shadriz</code> init command to setup your project.</p>
<pre><code class="language-bash">npx shadriz@latest init
</code></pre>
<h3>Step 3: Configure project</h3>
<p>You will be asked a few questions to configure database and Auth.js. Note: You must choose <code>jwt</code> if credentials is selected.</p>
<pre><code>Which database library would you like to use? pg
Do you want to use Auth.js for authentication? yes
Which auth providers would you like to use? github, credentials
Which session strategy would you like to use? jwt
Do you want to add a dark mode toggle? yes
</code></pre>
<h3>Step 4: Complete project configuration</h3>
<p>After initialization, you will be prompted to complete a few additional tasks:</p>
<ul>
<li>Update the database url in <code>.env.local</code> to point to your database.</li>
<li>Run migrations.</li>
<li>Set up the providers.</li>
<li>Create a test user if <code>credentials</code> was selected.</li>
</ul>
<h3>Step 5: Scaffold a full stack component</h3>
<p>You can now scaffold full stack components.</p>
<p>This command will generate the CRUD UI, database migrations, server actions, and server components of a full stack component. The columns option <code>-c</code> or <code>--columns</code> takes a space-separated string of column configurations in the following format: <code>column_name:data_type:column_arg1:column_arg2</code>.</p>
<p>Shadriz supports a variety of primary key configurations, foreign key configuration, and default functions as shown in the &quot;blog&quot; examples below. See <a href="https://orm.drizzle.team/docs/column-types/pg">Drizzle ORM docs</a> for a comprehensive list of data types and more advanced configurations.</p>
<p>The views are placed into the <code>(public)</code> route group by default. To make the views and actions require authentication, add a <code>-p</code> or <code>--private</code> flag to place everything into the <code>(private)</code> route group. Note: the private flag can only be used if Auth.js has already been configured.</p>
<h4>postgresql examples</h4>
<pre><code class="language-bash"># postgresql uuid primary key examples:
scaffold post -d postgresql -c id:uuid:pk:default-uuidv7 title:text created_at:timestamp:default-now
scaffold post -d postgresql -c id:uuid:pk:default-uuidv4 title:text created_at:timestamp:default-now

# postgresql auto increment primary key examples:
scaffold post -d postgresql -c id:bigserial:pk title:text created_at:timestamp:default-now
scaffold post -d postgresql -c id:serial:pk title:text created_at:timestamp:default-now

# postgresql foreign key examples:
scaffold post -d postgresql -c id:bigserial:pk title:text
scaffold comment -d postgresql -c id:bigserial:pk post_id:bigint:fk-post.id content:text
</code></pre>
<h4>mysql examples</h4>
<pre><code class="language-bash"># mysql uuid primary key examples:
scaffold post -d mysql -c id:varchar:pk:default-uuidv7 title:varchar created_at:timestamp:default-now
scaffold post -d mysql -c id:varchar:pk:default-uuidv4 title:varchar created_at:timestamp:default-now

# mysql auto increment primary key examples:
scaffold post -d mysql -c id:serial:pk title:varchar created_at:timestamp:default-now
scaffold post -d mysql -c id:integer:pk-auto title:varchar created_at:timestamp:default-now

# mysql foreign key examples:
scaffold post -d mysql -c id:serial:pk title:varchar
scaffold comment -d mysql -c id:serial:pk post_id:bigint:fk-post.id content:text
</code></pre>
<h4>sqlite examples</h4>
<pre><code class="language-bash"># sqlite uuid primary key examples:
scaffold post -d sqlite -c id:text:pk:default-uuidv7 title:text created_at:text:default-now
scaffold post -d sqlite -c id:text:pk:default-uuidv4 title:text created_at:text:default-now

# sqlite auto increment primary key examples:
scaffold post -d sqlite -c id:integer:pk-auto title:text created_at:text:default-now

# sqlite foreign key examples:
scaffold post -d sqlite -c id:integer:pk-auto title:text
scaffold post -d sqlite -c id:integer:pk-auto post_id:integer:fk-post.id content:text
</code></pre>
<h3>Step 6: Run migrations</h3>
<p>After scaffolding, you&#39;ll have to run <code>npx drizzle-kit generate</code>.</p>
<p>Then you will have to run <code>npx drizzle-kit migrate</code> to apply the migrations.</p>
<h2>💡 Inspirations</h2>
<h3>Ruby on Rails</h3>
<p>shadriz is inspired by the <strong>convention over configuration</strong> philosophy of Ruby on Rails, which allows anyone to rapidly prototype applications in minutes.</p>
<p>🍣 shadriz is an <a href="https://dhh.dk/2012/rails-is-omakase.html">omakase</a> of the author&#39;s preferred TypeScript ingredients.</p>
<p>Nostalgia for Ruby on Rails style development is one motivation that led to the creation of shadriz.</p>
<h3>Next.js</h3>
<p>shadriz generates Next.js and React code that uses latest techniques, such as <strong>server components and server actions</strong>.</p>
<p>Next.js provides many conveniences out of the box, such file system routing, server side rendering, code bundling, and more.</p>
<h3>shadcn/ui</h3>
<p>shadriz is inspired by the <strong>non-dependency and transparency</strong> of shadcn/ui, the tool that allows anyone to automatically copy and paste beautifully styled radix ui components into their projects.</p>
<p>shadriz essentially generates full stack components into your Next.js project. You have full control of the code that is generated instead of the code being hidden behind an external package.</p>
<p>Like shadcn/ui, shadriz is not a dependency that you add to your node project. Instead, it is a CLI tool that installs third party packages and generates code.</p>
<h3>Drizzle ORM</h3>
<p>shadriz uses Drizzle ORM for the best-of-both world of <strong>sql-like</strong> and <strong>relational queres</strong>, as well as automatic <strong>schema generation</strong> and <strong>database migrations</strong>.</p>
<p>shadriz takes the automations one step further by generating the configuration files required to start using Drizzle ORM.</p>
<p>Like Drizzle ORM, shadriz supports 3 database dialects: postgresql, mysql, and sqlite.</p>
<h3>TailwindCSS</h3>
<p>shadriz is based on shadcn/ui which has it&#39;s <strong>styling based on TailwindCSS</strong>, a CSS framework which provides reusable utility classes. TailwindCSS is chosen for it&#39;s benefits on <strong>development speed</strong> and <strong>composability</strong>.</p>
<p>TailwindCSS simplifies and improves scalability of styling by coupling markup with style.</p>
<h3>Auth.js</h3>
<p>shadriz uses Auth.js for it&#39;s authentication solution. However, running the Auth.js automation is totally optional, as some applications may not need authentication or a different auth solution is preferred.</p>
<p>With one command, you can have authentication mostly setup and configured. Just add the client ids and secrets to the <code>.env.local</code> file and you&#39;re good to go.</p>
<p>shadriz also provides a <code>script/create-user.ts</code> script to create users. This is also provided as an example on how to leverage Drizzle ORM in backend scripting using TypeScript. Note: this script is only generated if <code>credentials</code> is chosen as a provider.</p>
<h3>Zod</h3>
<p>shadriz uses <code>zod</code> and <code>drizzle-zod</code> for data validations. Each server action that is generated by the scaffolding tool will also contain zod validations to check for the correctness of data being submitted.</p>
<p><code>drizzle-zod</code> automatically creates a zod schema based on a drizzle table. This reduces boilerplate. However, if specific validations are needed, the generated zod schemas can be extended to have custom validation rules.</p>
<h2>Author</h2>
<p>Built by <a href="https://www.travisluong.com">travisluong</a>. Source code available on <a href="https://www.github.com/travisluong/shadriz">github</a>.</p>
<h2>License</h2>
<p>MIT</p>
`;

export default function Page() {
  return <div className="container shadriz-docs">
      <div dangerouslySetInnerHTML={ { __html: readme } }>
      </div>
  </div>;
}
