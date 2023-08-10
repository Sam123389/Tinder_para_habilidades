module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      database: 'tinder_para_habilidades',
      port: 5432,
      user: 'postgres',
      password: '1233893087'
    },
    useNullAsDefault: true
  },
  
  staging: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      database: 'tinder_para_habilidades',
      port: 5432,
      user: 'postgres',
      password: '1233893087'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      database: 'tinder_para_habilidades',
      port: 5432,
      user: 'postgres',
      password: '1233893087'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    useNullAsDefault: true
  }
};
