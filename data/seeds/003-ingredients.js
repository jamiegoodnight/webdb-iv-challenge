exports.seed = function(knex, Promise) {
  return knex("students").insert([
    { name: "cup of buffalo mozzarella cheese" }, // 1
    { name: "pitted cherries" }, // 2
    { name: "cup of orange zest" }, // 3
    { name: "tablespoon of salt" } // 4
  ]);
};
