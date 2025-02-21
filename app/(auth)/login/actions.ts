import { login } from "@/lib/supabase/supabase-auth";
import { LoginFormValuesType } from "./_lib/loginFormSchema";

export default function handleSubmit(values: LoginFormValuesType) {
  const formData = new FormData();
  formData.append("email", values.email);
  formData.append("password", values.password);

  login(formData);
  return;
}
