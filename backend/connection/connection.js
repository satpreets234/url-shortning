const Sequelize = require('sequelize');
const sequelize = new Sequelize('url-shortner', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports= sequelize;
