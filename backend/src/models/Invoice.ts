import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Invoice = sequelize.define(
  "Invoice",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    invoiceNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    totalAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },

    paymentMethod: {
      type: DataTypes.ENUM("CASH", "CARD", "ONLINE"),
      allowNull: false,
    },

    status: {
      type: DataTypes.ENUM("PAID", "UNPAID"),
      allowNull: false,
      defaultValue: "UNPAID",
    },

    issuedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },

    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true, // jedna faktura po porudzbini
      references: {
        model: "orders",
        key: "id",
      },
    },

    restaurantId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "restaurants",
        key: "id",
      },
    },
  },
  {
    tableName: "invoices",
    timestamps: true,
  },
);
