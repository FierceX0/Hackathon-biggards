import express from "express";
import { getDonorDashboard } from "../controllers/donorController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/dashboard", protect, getDonorDashboard);

export default router;
