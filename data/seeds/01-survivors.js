const survivors = [
  { survivor_name: 'Dwight Whiteguy' },
  { survivor_name: 'Meg Thomas' },
  { survivor_name: 'Claudette Morel' },
  { survivor_name: 'Jake Park' },
]

export.survivors = survivors;

exports.seed = function (knex) {
  return knex('survivors').insert(survivors);
}