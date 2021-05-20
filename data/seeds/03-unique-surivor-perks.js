const uniqueSurvivorPerks = [
  { survivor_id: 1, perk_id: 1},
  { survivor_id: 1, perk_id: 2},
  { survivor_id: 1, perk_id: 3},
  { survivor_id: 2, perk_id: 4},
  { survivor_id: 2, perk_id: 5},
  { survivor_id: 2, perk_id: 6},
  { survivor_id: 3, perk_id: 7},
  { survivor_id: 3, perk_id: 8},
  { survivor_id: 3, perk_id: 9},
  { survivor_id: 4, perk_id: 10},
  { survivor_id: 4, perk_id: 11},
  { survivor_id: 4, perk_id: 12},

]

exports.uniqueSurvivorPerks = uniqueSurvivorPerks;

exports.seed = function (knex) {
  return knex('unique-survivor-perks').insert(uniqueSurvivorPerks);
}