const express = require("express");

const db = require("./recipesModel");

const router = express.Router();

router.get("/", (req, res) => {
  db.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: "The recipes could not be retrieved!" });
    });
});

// POST a new recipe -----------

router.post("/", (req, res) => {
  const newRecipe = req.body;

  if (newRecipe.name) {
    db.insert(newRecipe)
      .then(recipe => {
        res.status(201).json(recipe);
      })
      .catch(err => {
        res
          .status(500)
          .json({ message: "There was an error saving your recipe!" });
      });
  } else {
    res.status(400).json({ message: "Please provide a name for your recipe!" });
  }
});
