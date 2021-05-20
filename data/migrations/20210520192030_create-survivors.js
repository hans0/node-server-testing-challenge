
exports.up = function(knex) {
  return knex.schema
    .createTable('survivors', tbl => {
      tbl.increments('survivor_id')
      tbl.text('survivor_name', 128)
        .unique()
        .notNullable()
    })
    .createTable('perks', tbl => {
      tbl.increments('perk_id')
      tbl.text('perk_name', 128)
        .unique()
        .notNullable()
      tbl.text('perk_description', 1024)
    })
    .createTable('unique-survivor-perks', tbl => {
      tbl.integer('survivor_id')
        .unsigned()
        .notNullable()
        .references('survivor_id')
        .inTable('survivors')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      tbl.integer('perk_id')
        .unsigned()
        .notNullable()
        .references('perk_id')
        .inTable('perks')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('unique-survivor-perks')
    .dropTableIfExists('perks')
    .dropTableIfExists('survivors')
};
