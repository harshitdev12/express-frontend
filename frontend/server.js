const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;



const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:5000";

app.use(express.static(path.join(__dirname, "public")));

app.get("/api-proxy", async (req, res) => {
  try {
    const r = await fetch(`${BACKEND_URL}/api/hello`);
    const data = await r.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Backend unreachable", details: err.message });
  }
});

app.listen(PORT, "0.0.0.0", () => console.log(`Frontend running on port ${3000}`));