const express = require("express");

const dishesRouter = require("./dishes/dishesRouter");
const recipesRouter = require("./recipes/recipesRouter");

const server = express();

server.use(express.json());

server.use("/api/dishes", dishesRouter);
server.use("/api/recipes", recipesRouter);

module.exports = server;
