const Sequelize = require('sequelize');

const sequelize = new Sequelize('url-shortner', 'root', 'Satpreet@13', {
  host: 'localhost',
  dialect: 'mysql',
});
sequelize.authenticate()
  .then((success) => {
    // Start server and log a message when it's ready
    console.log(success);
  })
  .catch((error) => {
    console.error('Failed to connect to database:', error);
  });

module.exports= sequelize;