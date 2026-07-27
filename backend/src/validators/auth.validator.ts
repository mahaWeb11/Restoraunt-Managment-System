import { z } from "zod";

const nameSchema = z
  .string()
  .trim()
  .min(1, "Ovo polje je obavezno")
  .max(50, "Maksimalno 50 karaktera");

const emailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .email("Invalid email")
  .max(255, "Email je predug");

const passwordSchema = z
  .string()
  .min(6, "Lozinka mora imati najmanje 6 karaktera")
  .max(128, "Lozinka je preduga");

export const registerSchema = z.object({
  firstName: nameSchema,
  lastName: nameSchema,
  email: emailSchema,
  password: passwordSchema,
});

export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, "Lozinka je obavezna"),
});
