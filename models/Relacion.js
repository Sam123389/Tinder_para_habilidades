const knex = require('knex');
const dbConfig = require('../knexfile');
const db = knex(dbConfig.development);

class Relacion {
  constructor() {
    this.tableName = 'relaciones';
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
}

module.exports = Relacion;
