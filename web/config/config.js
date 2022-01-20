require('dotenv').config();
const env = process.env;
module.exports = {
  development: {
    username: env.MYSQL_USER,
    password: env.MYSQL_PASSWORD,
    database: env.MYSQL_DATABASE,
    host: 'mysql',
    dialect: 'mysql',
    pool: {
      max: 5,
      idle: 30000,
      acquire: 60000,
    },
  },
  test: {
    username: 'root',
    password: null,
    database: 'autoinven_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: null,
    database: 'autoinven_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
