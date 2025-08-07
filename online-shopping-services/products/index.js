const express = require("express");

const app = express();
const PORT = process.env.PORT || 5354;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Products service is running" });
});

app.listen(PORT, () => {
  console.log(`Products service running on port ${PORT}`);
});
