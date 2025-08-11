const express = require("express");
const proxy = require("express-http-proxy");

const app = express();
const PORT = 8000;

// Middleware
app.use(express.json());

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "API Gateway is running" });
});

app.use("/customer", proxy("http://localhost:8001"));

app.use("/", proxy("http://localhost:8002"));

app.use("/shopping", proxy("http://localhost:8003"));

// Default route
app.get("/", (req, res) => {
  res.json({ message: "Online Shopping API Gateway" });
});

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
