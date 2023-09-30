import config from './config/config.js';
import logger from './config/logger.js';
import { Sequelize } from 'sequelize';
import pg from 'pg';
import app from './app.js';
let server;
const sequelize = new Sequelize(config.database_db, config.user_db, config.password_db, {
  host: config.host_db,
  dialect: 'postgres',
  dialectModule: pg,
  logging: false,
});


try {
  await sequelize.authenticate().then(() => {
    logger.info('Подключился к Postgres');
    server = app.listen(config.port, () => {
      logger.info(`Сервер запустился на порту ${config.port}`);
    });
  }).catch((err) => {
    console.log('Ошибка подключения к Postgres: ', err.message);
  });
} catch(err) {
  console.log(err)
}

export default sequelize;