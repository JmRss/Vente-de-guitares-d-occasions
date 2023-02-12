const Product = require("../model/products");
const { v4: uuid } = require("uuid");

exports.orderProducts = (req, res) => {
  const myUUID = uuid();

  const products = new Product({
    ...req.body,
    orderId: myUUID,
  });
  products
    .save()
    .then(() => {
      res.status(201).json({ message: "Objet sauvegardé", orderId: myUUID });
    })
    .catch((error) => {
      res.status(400).json({ error: error });
    });
};

exports.orderInfo = (req, res) => {
  Product.findOne({ orderId: req.params.orderId })
    .then((order) => {
      res.status(200).json(order);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};
