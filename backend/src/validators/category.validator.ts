import { z } from "zod";

export const createCategorySchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Naziv kategorije je obavezan")
    .max(50, "Maksimalno 50 karaktera"),
  sortOrder: z
    .number()
    .int("sortOrder mora biti cijeli broj")
    .min(0, "sortOrder ne moze biti negativan")
    .optional(),
});
