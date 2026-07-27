import { User } from "./User.js";
import { Restaurant } from "./Restoraunt.js";
import { Category } from "./Category.js";
import { Product } from "./Product.js";
import { Order } from "./Order.js";
import { OrderItem } from "./OrderItem.js";
import { Invoice } from "./Invoice.js";
import { setupAssociations } from "./associations.js";

setupAssociations();

export { User, Restaurant, Category, Product, Order, OrderItem, Invoice };
