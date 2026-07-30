import type { Request, Response } from "express";
import { getAdminStats } from "../services/admin.service.js";

export const getStats = async (_req: Request, res: Response) => {
  try {
    const stats = await getAdminStats();
    res.status(200).json(stats);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
