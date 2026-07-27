import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const OrderItem = sequelize.define(
  "OrderItem",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },

    priceAtOrder: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },

    notes: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "orders",
        key: "id",
      },
    },

    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "products",
        key: "id",
      },
    },
  },
  {
    tableName: "order_items",
    timestamps: true,
  },
);
