## About This Template ✨

This template is a lightweight Next.js project with Supabase Auth integration, styled with **shadcn/ui**.

### Installation 🔧

Clone this repository without Git history and install dependencies:

#### Windows

```sh
git clone --depth=1 https://github.com/4fort/forts-nextjs-supabase-template.git
rd /s /q forts-nextjs-supabase-template\.git
cd forts-nextjs-supabase-template
npm install
```

#### macOS & Linux

```sh
git clone --depth=1 https://github.com/4fort/forts-nextjs-supabase-template.git
rm -rf forts-nextjs-supabase-template/.git
cd forts-nextjs-supabase-template
npm install
```

Rename the project in `package.json` if needed.

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

Open [http://localhost:3000](http://localhost:3000/) in your browser.

### Learn More 📚

For more details, check out:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Supabase Documentation](https://supabase.com/docs/guides)

### Deployment 🌍

Deploy your Next.js app easily with [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

For more details, see the [Next.js deployment guide](https://nextjs.org/docs/app/building-your-application/deploying).
