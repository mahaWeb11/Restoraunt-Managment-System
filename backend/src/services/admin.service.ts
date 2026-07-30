import { Restaurant, User } from "../models/index.js";

export const getAdminStats = async () => {
  const [restaurantCount, ownerCount, waiterCount] = await Promise.all([
    Restaurant.count(),
    User.count({ where: { role: "OWNER" } }),
    User.count({ where: { role: "WAITER" } }),
  ]);

  return {
    restaurantCount,
    ownerCount,
    waiterCount,
  };
};
