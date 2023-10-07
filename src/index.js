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
// TODO: Сделать обратный вызов подклбчения к базе, и ждать подключение, пробовать подключиться каждые 5 сек(Оказывается в контейнерах оно само перезапускается при ошибке. Значит править на локлке. Хз оправдано ли это). Сделать задержку при первом полдключении.
export default sequelize;