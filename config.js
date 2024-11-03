const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('railway', 'root', 'UrvWpHpUFvxttqJdrcsgBmIjNeftoTcf', {
  host: 'autorack.proxy.rlwy.net',
  port: 35608,
  dialect: 'mysql',
});

module.exports = sequelize;
