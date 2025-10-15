import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Root route — test if the server works
app.get("/", (req, res) => {
  res.send("🚀 AgentHustle MCP server is running successfully!");
});

// Example route: simulate creating a DFY affiliate funnel
app.post("/create-funnel", (req, res) => {
  const { clientName, niche } = req.body;

  const funnel = {
    client: clientName,
    niche,
    headline: `🔥 Ready to Dominate the ${niche} Market?`,
    emailSequence: [
      "Welcome Email: Introduce your story + hook",
      "Email 2: Share value + mini win",
      "Email 3: Present your affiliate offer",
      "Email 4: Close with urgency",
    ],
    cta: "Click here to launch your funnel now!",
  };

  res.json({
    status: "success",
    message: "DFY funnel created successfully!",
    funnel,
  });
});

app.listen(port, () => {
  console.log(`✅ AgentHustle MCP running on port ${port}`);
});
