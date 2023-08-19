import express from "express";
import { protect, restricteTo } from "../controllers/authController.js";
import { createOffer } from "../controllers/offerController.js";

const router = express.Router();

router.post("/", protect, restricteTo("recruter"), createOffer);

export default router;
