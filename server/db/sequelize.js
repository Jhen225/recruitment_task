const Sequelize = require('sequelize');
const logger = require('../common/logger');
const app_logger = logger.getLogger("service");

const sequelize = new Sequelize(
    process.env.DB_NAME || 'recruitment_task',
    process.env.DB_USER || 'postgres',
    process.env.DB_PASS || 'postgres',
    {
        host: 'localhost',
        dialect: 'postgres',
        logging: false
    }
);

sequelize
  .authenticate()
  .then(() => {
    app_logger.info('Database connection has been established successfully.');
    console.log('Database connection has been established successfully.')
  })
  .catch(err => {
    app_logger.error(`Unable to connect to the database: ${err}`);
    console.log(`Unable to connect to the database: ${err}`)
    process.exit();
  })
  .catch(err => {
    app_logger.error(`Unable to connect to the database: ${err}`);
  });

module.exports = sequelize;
global.sequelize = sequelize;