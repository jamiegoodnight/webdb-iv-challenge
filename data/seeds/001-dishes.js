exports.seed = function(knex, Promise) {
  return knex("dishes").insert([
    { name: "Pizza" }, // 1
    { name: "Tacos" }, // 2
    { name: "Pies" }, // 3
    { name: "Vegetarian" } // 4
  ]);
};
