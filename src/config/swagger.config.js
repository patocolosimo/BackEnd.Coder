const express = require("express");
const { specs, swaggerUi } = require("./swagger");

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

const productsRouter = require("./routes/products");
const cartsRouter = require("./routes/carts");

app.use("/products", productsRouter);
app.use("/carts", cartsRouter);
