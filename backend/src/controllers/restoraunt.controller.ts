import type { Response } from "express";
import type { AuthRequest } from "../middleware/auth.middleware.js";
import {
  createRestaurantWithOwner,
  getAllRestaurants,
  getRestaurantById,
} from "../services/restoraunt.service.js";

export const createRestaurant = async (req: AuthRequest, res: Response) => {
  try {
    const result = await createRestaurantWithOwner(req.body);

    res.status(201).json({
      message: "Restoraunt and owner created",
      ...result,
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getRestaurants = async (_req: AuthRequest, res: Response) => {
  try {
    const restaurants = await getAllRestaurants();
    res.status(200).json({ restaurants });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getRestaurant = async (req: AuthRequest, res: Response) => {
  try {
    const restaurant = await getRestaurantById(Number(req.params.id));
    res.status(200).json({ restaurant });
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};
