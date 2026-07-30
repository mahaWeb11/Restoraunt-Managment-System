import type { Category } from "../types/category.type.ts";

export interface Product {
  id: number;
  name: string;
  description: string | null;
  price: string;
  imageUrl: string | null;
  categoryId: number;
  category?: Category;
}
