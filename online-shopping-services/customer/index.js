const express = require("express");

const app = express();
const PORT = process.env.PORT;

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
app.listen(8001, () => {
  console.log(`Customer service running on port ${PORT}`);
});

module.exports = app;
