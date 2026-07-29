import { Product, Category } from "../models/index.js";
import type { CreateProductData } from "../types/product.type.js";

export const createProduct = async (
  restaurantId: Number,
  data: CreateProductData,
) => {
  const category = await Category.findOne({
    where: { id: data.categoryId, restaurantId },
  });

  if (!category)
    throw new Error("Kategorija ne postoji ili ne pripada tvom restoranu");

  const product = await Product.create({
    name: data.name,
    description: data.description ?? null,
    price: data.price,
    imageUrl: data.imageUrl ?? null,
    categoryId: data.categoryId,
    restaurantId,
  });

  return product;
};

export const getProductsByRestaurant = async (restaurantId: number) => {
  return Product.findAll({
    where: { restaurantId },
    include: [{ association: "category" }],
  });
};
