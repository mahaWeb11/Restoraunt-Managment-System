import {
  addCategory,
  getCategories,
} from "../controllers/category.controller.js";
import { requireRole } from "../middleware/role.middleware.js";
import { requireAuth } from "../middleware/auth.middleware.js";
import { createCategorySchema } from "../validators/category.validator.js";
import { Router } from "express";
import { validate } from "../middleware/validate.middleware.js";

const router = Router();

router.post(
  "/",
  requireAuth,
  requireRole("OWNER"),
  validate(createCategorySchema),
  addCategory,
);
router.get("/", requireAuth, getCategories);

export default router;
