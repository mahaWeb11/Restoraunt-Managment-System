import express from "express";
import authRoutes from "./src/routes/auth.route.js";
import restaurantRoutes from "./src/routes/restoraunt.route.js";
import categoryRoutes from "./src/routes/category.route.js";
import productRoutes from "./src/routes/product.route.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({ hello: "Hiii" });
});

app.use("/auth", authRoutes);
app.use("/restoraunts", restaurantRoutes);
app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);

export default app;
