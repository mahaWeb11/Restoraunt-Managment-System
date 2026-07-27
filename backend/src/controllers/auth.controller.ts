import type { Request, Response } from "express";
import { registerUser, loginUser } from "../services/auth.service.js";
import {
  AUTH_COOKIE_NAME,
  authCookieOptions,
  clearCookieOptions,
} from "../config/cookie.config.js";

export const register = async (req: Request, res: Response) => {
  try {
    const user = await registerUser(req.body);

    res.status(201).json({
      message: "User created",
      user,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
};
export const login = async (req: Request, res: Response) => {
  try {
    const { token, user } = await loginUser(req.body);

    res.cookie(AUTH_COOKIE_NAME, token, authCookieOptions);

    res.status(200).json({
      message: "Login successful",
      user,
    });
  } catch (error: any) {
    res.status(401).json({
      message: error.message,
    });
  }
};

export const logout = (_req: Request, res: Response) => {
  res.clearCookie(AUTH_COOKIE_NAME, clearCookieOptions);

  res.status(200).json({
    message: "Logout successful",
  });
};
