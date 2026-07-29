import type { Response } from "express";
import type { AuthRequest } from "../types/express.type.js";
import { getDashboardStats } from "../services/dashboard.service.js";

export const getDashboard = async (req: AuthRequest, res: Response) => {
  try {
    const restaurantId = req.user?.restaurantId;

    if (!restaurantId)
      return res.status(400).json({ message: "Korisnik nema restoran" });

    const stats = await getDashboardStats(restaurantId);
    res.status(200).json(stats);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
