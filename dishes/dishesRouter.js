const express = require("express");

const db = require("./dishesModel");

const router = express.Router();

router.get("/", (req, res) => {
  db.getDishes()
    .then(dishes => {
      res.status(200).json(dishes);
    })
    .catch(err => {
      res.status(500).json({ message: "The dishes could not be retrieved!" });
    });
});

// POST a new dish -----------

router.post("/", (req, res) => {
  const newDish = req.body;

  if (newDish.name) {
    db.addDish(newDish)
      .then(dish => {
        res.status(201).json(dish);
      })
      .catch(err => {
        res
          .status(500)
          .json({ message: "There was an error saving your dish!" });
      });
  } else {
    res.status(400).json({ message: "Please provide a name for your dish!" });
  }
});

// GET a dish object with the specified id and its recipe objects ----------

router.get("/:id/recipes", (req, res) => {
  const id = req.params.id;

  db.getDish(id)
    .then(dish => {
      if (dish) {
        res.status(200).json(dish);
      } else {
        res.status(404).json({
          message: "The dish with the specified id could not be found!"
        });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "There was a problem retrieving your dish!" });
    });
});

module.exports = router;
