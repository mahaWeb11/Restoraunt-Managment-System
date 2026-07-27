import express from "express";
import authRoutes from "./src/routes/auth.route.js";
import restaurantRoutes from "./src/routes/restoraunt.route.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({ hello: "Hiii" });
});

app.use("/auth", authRoutes);
app.use("/restoraunts", restaurantRoutes);

export default app;
