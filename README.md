## About This Template ✨

This template is a lightweight Next.js project with Supabase Auth integration, styled with **shadcn/ui**.

### Installation 🔧

To quickly set up this template, use the CLI:

```sh
npx fort-setup <./destination/project-name> | <project-name>
```

This command will automatically scaffold the project in the specified destination.

### Setting Up Supabase 🛠️

Before running the project, you need to set up a Supabase project and configure the environment variables.

1. Go to [Supabase](https://supabase.com) and create a new project.
2. Once the project is created, navigate to **Project Settings > API**.
3. Copy the **Supabase URL** and **Anon Key**.
4. Create a `.env.local` file in the root directory of your project and add the following:

   ```sh
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

5. Save the file and proceed to start the development server.

### Tech Stack 🛠️

- **Next.js**
  ```sh
  npx create-next-app@latest
  ```
- **Supabase SDK**
  ```sh
  npm install @supabase/supabase-js @supabase/ssr
  ```
- **UI Components:** shadcn/ui
- **Forms & Validation:** React Hook Form + Zod

### Authentication 🔒

Supabase handles authentication on the server side, providing secure session management.

Forms are built with **shadcn/ui**, validated using **Zod** and **React Hook Form**. Feel free to modify as needed.

### Getting Started 🚀

Run the development server:

```sh
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Learn More 📚

For more details, check out:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Supabase Documentation](https://supabase.com/docs/guides)

### Deployment 🌍

Deploy your Next.js app easily with [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

For more details, see the [Next.js deployment guide](https://nextjs.org/docs/app/building-your-application/deploying).
