const perks = [
  { perk_name: 'Bond' },
  { perk_name: 'Prove Thyself' },
  { perk_name: 'Leader' },
  { perk_name: 'Quick & Quiet' },
  { perk_name: 'Sprint Burst' },
  { perk_name: 'Adrenaline' },
  { perk_name: 'Empathy' },
  { perk_name: 'Botany Knowledge' },
  { perk_name: 'Self-Care' },
  { perk_name: 'Iron Will' },
  { perk_name: 'Calm Spirit' },
  { perk_name: 'Saboteur' },
  // { perk_name: '' },
]

exports.perks = perks;

exports.seed = function (knex) {
  return knex('perks').insert(perks)
}