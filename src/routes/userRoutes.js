import express from "express";
import { User } from "../models/index.js";
import { authenticateKey } from "./middleware/authMiddleware.js";

const router = express.Router();

// GET /users — requires valid API key
router.get("/", authenticateKey, async (req, res) => {
  try {
    const users = await User.findAll({
      where: { company_id: req.company_id }, // only users from that company
      attributes: ["id", "name", "email"],   // optional: limit columns
    });

    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

export default router;
