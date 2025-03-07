import { signUp } from "@/lib/supabase/supabase-auth";
import { SignUpFormValuesType } from "./_lib/signUpFormSchema";

export default async function handleSubmit(values: SignUpFormValuesType) {
  const formData = new FormData();
  formData.append("email", values.email);
  formData.append("password", values.password);

  signUp(formData);
  return;
}
