import { sequelize } from "../config/database.js";
import { User, Restaurant } from "../models/index.js";
import { hashPassword } from "../utils/password.js";
import { sanitizeUser } from "../utils/sanitizeUser.js";
import type { CreateRestaurantData } from "../types/restoraunt.type.js";

export const createRestaurantWithOwner = async (data: CreateRestaurantData) => {
  const existingUser = await User.findOne({
    where: { email: data.owner.email },
  });

  if (existingUser) throw new Error("Email vec postojii");

  const result = await sequelize.transaction(async (t) => {
    const hashedPassword = await hashPassword(data.owner.password);

    const owner = await User.create(
      {
        firstName: data.owner.firstName,
        lastName: data.owner.lastName,
        email: data.owner.email,
        password: hashedPassword,
        role: "OWNER",
      },
      { transaction: t },
    );

    const restaurant = await Restaurant.create(
      {
        name: data.name,
        address: data.address,
        phone: data.phone,
        ownerId: owner.getDataValue("id"),
      },
      { transaction: t },
    );

    return { owner, restaurant };
  });

  return {
    restaurant: result.restaurant.get({ plain: true }),
    owner: sanitizeUser(result.owner),
  };
};

export const getAllRestaurants = async () => {
  return Restaurant.findAll({
    include: [{ association: "owner", attributes: { exclude: ["password"] } }],
  });
};

export const getRestaurantById = async (id: number) => {
  const restaurant = await Restaurant.findByPk(id, {
    include: [{ association: "owner", attributes: { exclude: ["password"] } }],
  });

  if (!restaurant) throw new Error("Restoran nije naden");

  return restaurant;
};
