import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    role: {
      type: DataTypes.ENUM("ADMIN", "OWNER", "WAITER"),
      allowNull: false,
      defaultValue: "WAITER",
    },

    restaurantId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "restaurants",
        key: "id",
      },
    },
  },
  {
    tableName: "users",
    timestamps: true,
    defaultScope: {
      attributes: {
        exclude: ["password"],
      },
    },
  },
);
