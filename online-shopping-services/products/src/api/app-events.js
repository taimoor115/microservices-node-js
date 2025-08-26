const ProductService = require("../services/product-service");

module.exports = (app) => {
  const service = new ProductService();
  app.use("/app-events", async (req, res) => {
    const { payload } = req.body;
    service.SubscribeEvents(payload);
    console.log("============ Received Product app event =============");
    return res.status(200).json(payload);
  });
};
