const knex = require('knex');
const dbConfig = require('../knexfile');
const db = knex(dbConfig.development);

class Habilidad {
  constructor() {
    this.tableName = 'habilidades';
  }

  getAll() {
    return db.select('*').from(this.tableName);
  }

  getById(id) {
    return db.select('*').from(this.tableName).where({ id }).first();
  }

  create(data) {
    return db.insert(data).into(this.tableName);
  }

  update(id, data) {
    return db.update(data).from(this.tableName).where({ id });
  }

  delete(id) {
    return db.del().from(this.tableName).where({ id });
  }
}

module.exports = Habilidad;
