"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import TemplateLogOut from "./_components/template-logout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function TemplatePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="container mx-auto p-8 space-y-6">
      <div className="flex items-center justify-between border-b pb-4">
        <h1 className="text-4xl font-extrabold tracking-tight">
          🚀 Next.js + Supabase Auth Template
        </h1>
        <TemplateLogOut />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>User Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-accent rounded-lg overflow-auto max-h-56">
            <pre className="text-sm">{JSON.stringify(user, null, 2)}</pre>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>About This Template</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            This template is a lightweight Next.js project with Supabase Auth
            integration, styled with <strong>shadcn/ui</strong>.
          </p>
          <div className="space-y-2">
            <h2 className="text-lg font-bold">Tech Stack</h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>
                Next.js{" "}
                <code className="bg-muted text-muted-foreground px-1 py-0.5 rounded">
                  npx create-next-app@latest
                </code>
              </li>
              <li>
                Supabase SDK{" "}
                <code className="bg-muted text-muted-foreground px-1 py-0.5 rounded">
                  npm install @supabase/supabase-js @supabase/ssr
                </code>
              </li>
              <li>
                UI Components: <strong>shadcn/ui</strong>
              </li>
              <li>
                Forms & Validation: <strong>React Hook Form + Zod</strong>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold">Authentication</h2>
            <p>
              Supabase handles authentication on the server side, providing
              secure session management.
            </p>
            <p>
              Forms are built with <strong>shadcn/ui</strong>, validated using{" "}
              <strong>Zod</strong> and <strong>React Hook Form</strong>. Feel
              free to modify as needed.
            </p>
          </div>
        </CardContent>
      </Card>
      <div className="text-center text-sm text-muted-foreground mt-6 border-t pt-4">
        <p>
          Made with ❤️ by <strong>4Fort</strong>. This template is{" "}
          <strong>free to use</strong> however you like.
        </p>
        <a
          href="https://github.com/4fort/forts-nextjs-supabase-template"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          👉 View on GitHub
        </a>
      </div>
    </div>
  );
}
