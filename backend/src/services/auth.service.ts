import { User } from "../models/User.js";
import { hashPassword, comparePassword } from "../utils/password.js";
import { generateToken } from "../utils/jwt.js";
import type { RegisterData, LoginData } from "../types/auth.type.js";
import { sanitizeUser } from "../utils/sanitizeUser.js";

export const registerUser = async (data: RegisterData) => {
  const existingUser = await User.findOne({
    where: {
      email: data.email,
    },
  });

  if (existingUser) throw new Error("Email vec postooji");

  const hashedPassword = await hashPassword(data.password);

  const user = await User.create({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: hashedPassword,
  });

  return sanitizeUser(user);
};
export const loginUser = async (data: LoginData) => {
  const user = await User.unscoped().findOne({
    where: { email: data.email },
  });

  if (!user) {
    throw new Error("Invalidni kredencijali");
  }

  const isValid = await comparePassword(
    data.password,
    user.getDataValue("password"),
  );

  if (!isValid) {
    throw new Error("Invalidni kredencijali");
  }

  const token = generateToken({
    id: user.getDataValue("id"),
    role: user.getDataValue("role"),
  });

  return {
    token,
    user: sanitizeUser(user),
  };
};
