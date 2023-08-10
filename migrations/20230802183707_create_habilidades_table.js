/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('habilidades').then(function (exists) {
      if (!exists) {
          return knex.schema.createTable('habilidades', function (table) {
              table.increments('id').primary();
              table.string('nombre').notNullable();
              table.text('descripcion').notNullable();
              table.string('trabajo_descripcion');
          });
      }
  });
};

/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.down = function (knex) {
  return knex.schema.hasTable('habilidades').then(function (exists) {
      if (exists) {
          return knex.schema.dropTable('habilidades');
      }
  });
};
