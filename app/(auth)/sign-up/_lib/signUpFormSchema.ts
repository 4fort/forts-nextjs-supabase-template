"use client";

import { z } from "zod";

const signUpFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type SignUpFormValuesType = z.infer<typeof signUpFormSchema>;

export default signUpFormSchema;
