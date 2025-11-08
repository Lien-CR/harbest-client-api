import express from "express";
import { sequelize } from "../models/index.js";

const router = express.Router();

// GET /health — check server and DB
router.get("/", async (req, res) => {
  try {
    await sequelize.authenticate();
    res.status(200).json({
      status: "ok",
      database: "connected",
      uptime: process.uptime(),
      timestamp: new Date(),
    });
  } catch (err) {
    console.error("Health check failed:", err);
    res.status(500).json({
      status: "error",
      database: "disconnected",
      message: err.message,
    });
  }
});

export default router;
