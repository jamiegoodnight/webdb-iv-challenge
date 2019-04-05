exports.seed = function(knex, Promise) {
  return knex("recipes").insert([
    { name: "New York Style Pizza", dish_id: 1 }, // 1
    { name: "Cheese Pizza", dish_id: 1 }, // 2
    { name: "Sausage Pizza", dish_id: 1 }, // 3
    { name: "Three-Cheese Taco", dish_id: 2 }, // 4
    { name: "Hard-Shell Taco", dish_id: 2 }, // 5
    { name: "Soft-Shell Taco", dish_id: 2 }, // 6
    { name: "Pecan Pie", dish_id: 3 }, // 7
    { name: "Derby Pie", dish_id: 3 }, // 8
    { name: "Cherry Pie", dish_id: 3 }, // 9
    { name: "Impossible Burger", dish_id: 4 }, // 10
    { name: "Cheesy Broccoli", dish_id: 4 }, // 11
    { name: "Cardboard", dish_id: 4 } // 12
  ]);
};
