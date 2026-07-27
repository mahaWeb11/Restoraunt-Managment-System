import { User } from "./User.js";
import { Restaurant } from "./Restoraunt.js";
import { Category } from "./Category.js";
import { Product } from "./Product.js";
import { Order } from "./Order.js";
import { OrderItem } from "./OrderItem.js";
import { Invoice } from "./Invoice.js";

export const setupAssociations = () => {
  // 1 korisnik (OWNER) moze imati vise restorana -> jedan naprema vise
  User.hasMany(Restaurant, { foreignKey: "ownerId", as: "restaurants" });
  Restaurant.belongsTo(User, { foreignKey: "ownerId", as: "owner" });

  // 1 restoran ima vise zaposlenih (WAITER) -> jedan naprema vise
  Restaurant.hasMany(User, { foreignKey: "restaurantId", as: "staff" });
  User.belongsTo(Restaurant, { foreignKey: "restaurantId", as: "restaurant" });

  // 1 restoran ima vise kategorija (pica, glavna jela itd) -> jedan naprema vise
  Restaurant.hasMany(Category, {
    foreignKey: "restaurantId",
    as: "categories",
  });
  Category.belongsTo(Restaurant, {
    foreignKey: "restaurantId",
    as: "restaurant",
  });

  // 1 kategorija ima vise proizvoda -> jedan naprema visee
  Category.hasMany(Product, { foreignKey: "categoryId", as: "products" });
  Product.belongsTo(Category, { foreignKey: "categoryId", as: "category" });

  // 1 restoran ima vise proizvoda -> jedan naprema vise
  Restaurant.hasMany(Product, { foreignKey: "restaurantId", as: "products" });
  Product.belongsTo(Restaurant, {
    foreignKey: "restaurantId",
    as: "restaurant",
  });

  // 1 restoran ima vise narudzbi -> jedan naprema viseee
  Restaurant.hasMany(Order, { foreignKey: "restaurantId", as: "orders" });
  Order.belongsTo(Restaurant, { foreignKey: "restaurantId", as: "restaurant" });

  // 1 konobarr moze napraviti vise narudzbi -> jedan naprema visee
  User.hasMany(Order, { foreignKey: "waiterId", as: "orders" });
  Order.belongsTo(User, { foreignKey: "waiterId", as: "waiter" });

  // 1 narudzbaa ima vise stavki (OrderItem) -> jedan naprema vise
  Order.hasMany(OrderItem, { foreignKey: "orderId", as: "items" });
  OrderItem.belongsTo(Order, { foreignKey: "orderId", as: "order" });

  // 1 proizvod se moze naci u vise stavki narudzbi -> jedan naprema vise
  Product.hasMany(OrderItem, { foreignKey: "productId", as: "orderItems" });
  OrderItem.belongsTo(Product, { foreignKey: "productId", as: "product" });

  // 1 narudzba ima tacno 1 fakturu -> jedan naprema jedan
  Order.hasOne(Invoice, { foreignKey: "orderId", as: "invoice" });
  Invoice.belongsTo(Order, { foreignKey: "orderId", as: "order" });

  // 1 restoran ima vise faktura -> jedan naprema vise
  Restaurant.hasMany(Invoice, { foreignKey: "restaurantId", as: "invoices" });
  Invoice.belongsTo(Restaurant, {
    foreignKey: "restaurantId",
    as: "restaurant",
  });
};
