/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('empresas').then(function (exists) {
      if (!exists) {
          return knex.schema.createTable('empresas', function (table) {
              table.increments('id').primary();
              table.string('nombre').notNullable();
              table.string('direccion').notNullable();
              table.string('telefono').notNullable();
              table.integer('habilidad_id').unsigned().references('id').inTable('habilidades');
              table.string('descripcion_trabajo').notNullable();
              table.float('horas_trabajo').notNullable();
              table.float('costo_hora').notNullable();
          });
      }
  });
};

/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.down = function (knex) {
  return knex.schema.hasTable('empresas').then(function (exists) {
      if (exists) {
          return knex.schema.dropTable('empresas');
      }
  });
};
