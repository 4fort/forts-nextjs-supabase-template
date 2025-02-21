"use client";

import { z } from "zod";

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type LoginFormValuesType = z.infer<typeof loginFormSchema>;

export default loginFormSchema;
