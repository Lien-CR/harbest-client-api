import express from "express";
import cors from "cors";
import { sequelize } from "./src/models/index.js";
import userRoutes from "./src/routes/userRoutes.js";
import apiKeyRoutes from "./src/routes/apiKeyRoutes.js";
import healthRoutes from "./src/routes/healthRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Mount route modules
app.use("/users", userRoutes);
app.use("/api", apiKeyRoutes);
app.use("/health", healthRoutes);

// Start the server after DB connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Connected to MySQL database.");

    app.listen(5000, () => {
      console.log("🚀 Server running on http://localhost:5000");
    });
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  }
})();
