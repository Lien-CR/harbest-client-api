import { ApiKey } from "../../models/index.js";

export const authenticateKey = async (req, res, next) => {
  const apiKey = req.header("x-api-key");

  if (!apiKey) {
    return res.status(401).json({ error: "Missing API key" });
  }

  try {
    const validKey = await ApiKey.findOne({ where: { key: apiKey } });

    if (!validKey) {
      return res.status(403).json({ error: "Invalid API key" });
    }
    req.company_id = validKey.company_id;
    next();
  } catch (err) {
    console.error("Auth error:", err);
    res.status(500).json({ error: "Internal authentication error" });
  }
};
