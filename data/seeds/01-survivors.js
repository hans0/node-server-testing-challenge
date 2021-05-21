const survivors = [
  { survivor_name: 'Dwight Fairfield' },
  { survivor_name: 'Meg Thomas' },
  { survivor_name: 'Claudette Morel' },
  { survivor_name: 'Jake Park' },
]

exports.survivors = survivors;

exports.seed = function (knex) {
  return knex('survivors').insert(survivors);
}