const perks = [
  { perk_name: 'Bond' },
  { perk_name: '' },
]

exports.perks = perks;

exports.seed = function (knex) {
  return knex('perks').insert(perks)
}