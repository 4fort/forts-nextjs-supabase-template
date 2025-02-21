"use server";

import { LoginFormValuesType } from "@/app/(auth)/login/_lib/loginFormSchema";
import { SignUpFormValuesType } from "@/app/(auth)/sign-up/_lib/signUpFormSchema";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function success() {
  revalidatePath("/", "layout");
  redirect("/");
}

export async function login(formData: FormData) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  } satisfies LoginFormValuesType;

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.log(error);
    redirect("/login?error=login");
  }

  success();
}

export async function signUp(formData: FormData) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  } satisfies SignUpFormValuesType;

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect("/sign-up?error=sign-up");
  }

  success();
}

export async function signOut() {
  const supabase = await createClient();

  await supabase.auth.signOut();

  success();
}
