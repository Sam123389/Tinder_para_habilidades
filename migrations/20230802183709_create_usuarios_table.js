/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('usuarios').then(function (exists) {
      if (!exists) {
          return knex.schema.createTable('usuarios', function (table) {
              table.increments('id').primary();
              table.string('nombre').notNullable();
              table.string('correo_electronico').notNullable();
              table.boolean('introvertido').defaultTo(false);
              table.integer('habilidad_id').unsigned().references('id').inTable('habilidades');
              table.float('tarifa_hora').notNullable();
          });
      }
  });
};

/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.down = function (knex) {
  return knex.schema.hasTable('usuarios').then(function (exists) {
      if (exists) {
          return knex.schema.dropTable('usuarios');
      }
  });
};
