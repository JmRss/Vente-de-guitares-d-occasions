const express = require("express");
const router = express.Router();
const productCtrl = require("../controller/product");

router.post("/order", productCtrl.orderProducts);
router.get("/order/:orderId", productCtrl.orderInfo);

module.exports = router;
