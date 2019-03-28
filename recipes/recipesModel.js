const db = require("../data/dbConfig");

module.exports = {
  getRecipes,
  addRecipe
};

function getRecipes() {
  return db("recipes")
    .innerJoin("dishes", "recipes.dish_id", "dishes.id")
    .select({
      dish: "dishes.Name",
      recipe: "recipes.Name",
      dish_id: "recipes.dish_id",
      id: "recipes.id"
    });
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
