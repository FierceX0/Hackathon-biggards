import express from "express";
import { getHospitalDashboard } from "../controllers/hospitalController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/dashboard", protect, getHospitalDashboard);

export default router;
