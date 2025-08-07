const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic route
app.get("/", (req, res) => {
  res.json({ message: "Customer service is running!" });
});

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK", service: "customer" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Customer service running on port ${PORT}`);
});

module.exports = app;
