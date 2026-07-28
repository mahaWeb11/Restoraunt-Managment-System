import { Category } from "../models/index.js";
import type { CreateCategoryData } from "../types/category.type.js";

export const createCategory = async (
  restaurantId: number,
  data: CreateCategoryData,
) => {
  const category = await Category.create({
    name: data.name,
    sortOrder: data.sortOrder ?? 0,
    restaurantId,
  });

  return category;
};

export const getCategoriesByRestaurant = async (restaurantId: number) => {
  return Category.findAll({
    where: { restaurantId },
    order: [["sortOrder", "ASC"]],
  });
};
