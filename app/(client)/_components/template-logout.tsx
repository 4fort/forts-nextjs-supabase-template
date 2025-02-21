"use client";

import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";
import React from "react";

export default function TemplateLogOut() {
  const supabase = createClient();

  return (
    <Button
      onClick={async () => {
        supabase.auth.signOut();
        redirect("/login");
      }}
    >
      Log Out
    </Button>
  );
}
