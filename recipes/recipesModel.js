const db = require("../data/dbConfig");

module.exports = {
  getRecipes,
  addRecipe
};

function getRecipes() {
  return db("recipes");
}

function getRecipeById(id) {
  return db("recipes")
    .where({ id })
    .first();
}

function addRecipe(recipe) {
  return db("recipes")
    .insert(recipe)
    .then(ids => {
      return getRecipeById(ids[0]);
    });
}
