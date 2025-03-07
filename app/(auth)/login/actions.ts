import { login } from "@/lib/supabase/supabase-auth";
import { LoginFormValuesType } from "./_lib/loginFormSchema";

export default async function handleSubmit(values: LoginFormValuesType) {
  const formData = new FormData();
  formData.append("email", values.email);
  formData.append("password", values.password);

  await login(formData);
  return;
}
