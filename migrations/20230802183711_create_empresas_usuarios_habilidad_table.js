/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('relaciones').then(function (exists) {
      if (!exists) {
          return knex.schema.createTable('relaciones', function (table) {
              table.increments('id').primary();
              table.integer('empresa_id').unsigned().references('id').inTable('empresas');
              table.integer('usuario_id').unsigned().references('id').inTable('usuarios');
              table.integer('habilidad_id').unsigned().references('id').inTable('habilidades');
          });
      }
  });
};

/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.down = function (knex) {
  return knex.schema.hasTable('relaciones').then(function (exists) {
      if (exists) {
          return knex.schema.dropTable('relaciones');
      }
  });
};
