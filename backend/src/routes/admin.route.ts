import { Router } from "express";
import { requireAuth } from "../middleware/auth.middleware.js";
import { requireRole } from "../middleware/role.middleware.js";
import { getStats } from "../controllers/admin.controller.js";

const router = Router();

router.get("/dashboard", requireAuth, requireRole("ADMIN"), getStats);

export default router;
