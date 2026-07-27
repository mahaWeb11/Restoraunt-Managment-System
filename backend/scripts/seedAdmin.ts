import "../src/models/index.js"; // trigeruje setupAssociations() i konekciju
import { sequelize } from "../src/config/database.js";
import { User } from "../src/models/index.js";
import { hashPassword } from "../src/utils/password.js";

const seedAdmin = async () => {
  try {
    await sequelize.authenticate();

    const existingAdmin = await User.findOne({
      where: { email: "admin@example.com" },
    });

    if (existingAdmin) {
      console.log("Admin already exists, skipping.");
      process.exit(0);
    }

    const hashedPassword = await hashPassword("SuperSigurnaSifra123!");

    await User.create({
      firstName: "Super",
      lastName: "Admin",
      email: "admin@example.com",
      password: hashedPassword,
      role: "ADMIN",
    });

    console.log("Admin created successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding admin:", error);
    process.exit(1);
  }
};

seedAdmin();
