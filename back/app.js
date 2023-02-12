//importe express
const express = require("express");
//application
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const orderRoutes = require("./route/product");
const dotenv = require("dotenv");
const result = dotenv.config();
app.use(express.json()); // remplace body-parser
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "PUT", "POST", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "Origin", "Accept"],
    credentials: true,
  })
);

mongoose
  .connect(
    `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@${process.env.URL}`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use("/api", orderRoutes);

module.exports = app;
