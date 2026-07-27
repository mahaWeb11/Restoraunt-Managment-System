import dotenv from "dotenv";
import app from "./app.js";
import { sequelize } from "./src/config/database.js";
import "./src/models/index.js";

dotenv.config();

try {
  await sequelize.authenticate();
  console.log("Database connected");

  await sequelize.sync();

  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
} catch (err) {
  console.error(err);
}
