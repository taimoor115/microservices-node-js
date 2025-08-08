const express = require("express");

const app = express();
const PORT = 8003;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Shopping service is running" });
});

app.listen(PORT, () => {
  console.log(`Shopping service running on port ${PORT}`);
});
