import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AUTH_COOKIE_NAME } from "../config/cookie.config.js";
import type { AuthRequest } from "../types/express.type.js";

export const requireAuth = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  const token = req.cookies?.[AUTH_COOKIE_NAME];

  if (!token) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      id: number;
      role: string;
      restaurantId: number | null;
    };

    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
