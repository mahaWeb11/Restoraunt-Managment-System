import type { AuthRequest } from "../types/express.type.js";
import {
  createCategory,
  getCategoriesByRestaurant,
} from "../services/category.service.js";
import type { Response } from "express";

export const addCategory = async (req: AuthRequest, res: Response) => {
  try {
    const restorauntId = req.user?.restaurantId;

    if (!restorauntId)
      return res.status(400).json({ msg: "Korisnik nema restoran" });

    const category = await createCategory(restorauntId, req.body);

    res.status(201).json({ message: "Kategorija kreirana", category });
  } catch (error: any) {
    res.status(400).json({ msg: error.message });
  }
};

export const getCategories = async (req: AuthRequest, res: Response) => {
  try {
    const restorauntId = req.user?.restaurantId;

    if (!restorauntId) {
      return res
        .status(400)
        .json({ message: "Korisnik nema pridruzen restoran" });
    }

    const categories = await getCategoriesByRestaurant(restorauntId);
    res.status(200).json({ categories });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
