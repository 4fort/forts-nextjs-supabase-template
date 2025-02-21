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
    <div className="container mx-auto p-6 space-y-4">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Welcome to Your Account</h1>
        <TemplateLogOut />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>User Information</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="max-h-[200px] overflow-auto bg-accent p-4 rounded-lg">
            {JSON.stringify(user, null, 2)}
          </pre>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>NextJS + Supabase with Auth setup Template</CardTitle>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </div>
  );
}
