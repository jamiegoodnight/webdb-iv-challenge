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

function getDish(dishId) {
  return db("recipes").where({ dish_id: dishId });
}
