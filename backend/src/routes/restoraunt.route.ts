import { Router } from "express";
import { requireAuth } from "../middleware/auth.middleware.js";
import { requireRole } from "../middleware/role.middleware.js";
import {
  createRestaurant,
  getRestaurants,
  getMyRestaurant,
} from "../controllers/restoraunt.controller.js";

const router = Router();

router.post("/", requireAuth, requireRole("ADMIN"), createRestaurant);
router.get("/", requireAuth, requireRole("ADMIN"), getRestaurants);
router.get("/me", requireAuth, getMyRestaurant);
//router.get("/:id", requireAuth, getRestaurant);

export default router;
