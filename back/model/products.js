const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  email: { type: String, required: true },
  basket: { type: Array, required: true },
  orderId: { type: String, required: true },
});

module.exports = mongoose.model("products", productsSchema);
