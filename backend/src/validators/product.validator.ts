import { z } from "zod";

export const createProductSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Naziv proizvoda je obavezan")
    .max(100, "Maksimalno 100 karaktera"),
  description: z
    .string()
    .trim()
    .max(1000, "Maksimalno 1000 karaktera")
    .optional(),
  price: z
    .number()
    .positive("Cijena mora biti veca od 0")
    .multipleOf(0.01, "Cijena moze imati najvise dvije decimale"),
  imageUrl: z.string().trim().url("Neispravan URL").optional(),
  categoryId: z.number().int().positive("categoryId je obavezan"),
});
