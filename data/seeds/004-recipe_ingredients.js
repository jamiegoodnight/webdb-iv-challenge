exports.seed = function(knex, Promise) {
  return knex("cohort_students").insert([
    { dish_id: 1, ingredient_id: 1 }, // 1
    { dish_id: 1, ingredient_id: 2 }, // 2
    { dish_id: 2, ingredient_id: 2 }, // 3
    { dish_id: 2, ingredient_id: 3 }, // 4
    { dish_id: 2, ingredient_id: 4 }, // 5
    { dish_id: 3, ingredient_id: 1 }, // 6
    { dish_id: 3, ingredient_id: 2 }, // 7
    { dish_id: 4, ingredient_id: 1 }, // 8
    { dish_id: 4, ingredient_id: 4 } // 9
  ]);
};
