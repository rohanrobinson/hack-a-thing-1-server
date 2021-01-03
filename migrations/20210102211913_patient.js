
exports.up = function(knex, Promise) {
  return knex.schema.createTable('patient', (table) => {
      table.increments();
      table.text('name').notNullable();
      table.text('gender').notNullable();
      table.decimal('weight').notNullable();
      table.integer('age').notNullable();
      table.text('symptom').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('patient');
};
