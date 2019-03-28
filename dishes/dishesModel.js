const db = require("../data/dbConfig");

module.exports = {
  getDishes,
  getDish,
  addDish
};

function getDishes() {
  return db("dishes");
}

function getDishById(id) {
  return db("dishes")
    .where({ id })
    .first();
}

function addDish(dish) {
  return db("dishes")
    .insert(dish)
    .then(ids => {
      return getDishById(ids[0]);
    });
}

function getDish(id) {
  return db("dishes")
    .innerJoin("recipes", "recipes.dish_id", "dishes.id")
    .select({
      dish: "dishes.Name",
      recipe: "recipes.Name",
      recipe_id: "recipes.id",
      id: "dishes.id"
    })
    .where({ "dishes.id": id });
}
