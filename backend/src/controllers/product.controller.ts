import {
  createProduct,
  getProductsByRestaurant,
} from "../services/product.service.js";
import type { Response } from "express";
import type { AuthRequest } from "../types/express.type.js";

export const addProduct = async (req: AuthRequest, res: Response) => {
  try {
    const restaurantId = req.user?.restaurantId;

    if (!restaurantId) {
      return res.status(403).json({ msg: "Korisnik nema restoran" });
    }

    const product = await createProduct(restaurantId, req.body);
    res.status(201).json({ message: "Proizvod kreiran", product });
  } catch (error: any) {
    res.status(400).json({ msg: error.message });
  }
};

export const getProducts = async (req: AuthRequest, res: Response) => {
  try {
    const restaurantId = req.user?.restaurantId;

    if (!restaurantId) {
      return res
        .status(400)
        .json({ message: "Korisnik nema pridruzen restoran" });
    }

    const products = await getProductsByRestaurant(restaurantId);
    res.status(200).json({ products });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
