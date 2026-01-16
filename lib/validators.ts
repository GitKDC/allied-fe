import { z } from "zod";

export const loginSchema = z.object({
  employeeCode: z
    .string()
    .min(1, "Employee code is required")
    .regex(/^\d+$/, "Employee code must be numeric"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),
});

export type LoginFormData = z.infer<typeof loginSchema>;

