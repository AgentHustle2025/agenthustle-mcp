import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

// Security middleware: check API_KEY from headers
app.use((req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth || auth !== `Bearer ${process.env.API_KEY}`) {
    return res.status(403).json({ error: "Unauthorized" });
  }
  next();
});

// Root route — test if server is running
app.get("/", (req, res) => {
  res.json({ message: "🚀 AgentHustle MCP Server Active" });
});

// Example API route: Create DFY affiliate funnel
app.post("/create-funnel", (req, res) => {
  const { name, niche } = req.body;

  const funnel = {
    headline: `🔥 Dominate ${niche} in 2025 with ${name}'s AI Funnel`,
    steps: ["Lead Magnet", "Email Sequence", "Offer Page"],
    cta: "Click here to deploy instantly."
  };

  res.json(funnel);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✅ AgentHustle MCP running on port ${port}`);
});
