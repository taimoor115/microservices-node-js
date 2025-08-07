const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
const PORT = 5452;

// Middleware
app.use(express.json());

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "API Gateway is running" });
});

// Example proxy routes - configure these based on your microservices
app.use(
  "/api/users",
  createProxyMiddleware({
    target: "http://localhost:3001",
    changeOrigin: true,
  })
);

app.use(
  "/api/products",
  createProxyMiddleware({
    target: "http://localhost:3002",
    changeOrigin: true,
  })
);

app.use(
  "/api/orders",
  createProxyMiddleware({
    target: "http://localhost:3003",
    changeOrigin: true,
  })
);

// Default route
app.get("/", (req, res) => {
  res.json({ message: "Online Shopping API Gateway" });
});

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
