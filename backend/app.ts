import express from "express";

// ROUTERS
import authRoutes from "./src/routes/auth.route.js";
import restaurantRoutes from "./src/routes/restoraunt.route.js";
import categoryRoutes from "./src/routes/category.route.js";
import productRoutes from "./src/routes/product.route.js";
import dashboardRoutes from "./src/routes/dashboard.route.js";
import adminRoutes from "./src/routes/admin.route.js";

import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);

app.get("/", (req, res) => {
  res.json({ hello: "Hiii" });
});

app.use("/auth", authRoutes);
app.use("/restoraunts", restaurantRoutes);
app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);
app.use("/dashboard", dashboardRoutes);
app.use("/admin", adminRoutes);

export default app;
