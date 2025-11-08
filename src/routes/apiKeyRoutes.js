import express from "express";
import crypto from "crypto";
import { ApiKey } from "../models/index.js";

const router = express.Router();

function generateApiKey() {
  return crypto.randomBytes(24).toString("hex");
}

router.post("/generate-key", async (req, res) => {
  try {
    const key = generateApiKey();
    const apiKey = await ApiKey.create({ key });
    res.json({ apiKey: apiKey.key });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate API key" });
  }
});

export default router;
