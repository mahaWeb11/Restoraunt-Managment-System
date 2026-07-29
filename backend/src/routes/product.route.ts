import { Router } from "express";
import { requireAuth } from "../middleware/auth.middleware.js";
import { requireRole } from "../middleware/role.middleware.js";
import { validate } from "../middleware/validate.middleware.js";
import { createProductSchema } from "../validators/product.validator.js";
import { addProduct, getProducts } from "../controllers/product.controller.js";

const router = Router();

router.post(
  "/",
  requireAuth,
  requireRole("OWNER"),
  validate(createProductSchema),
  addProduct,
);

router.get("/", requireAuth, getProducts);

export default router;
