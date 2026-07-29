import { Category, Product } from "../models/index.js";

export const getDashboardStats = async (restaurantId: number) => {
  const [categoryCount, productCount] = await Promise.all([
    Category.count({ where: { restaurantId } }),
    Product.count({ where: { restaurantId } }),
  ]);

  const ordersToday = 0;
  const revenueToday = 0;

  return {
    categoryCount,
    productCount,
    ordersToday,
    revenueToday,
  };
};
