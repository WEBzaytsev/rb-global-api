import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import config from './config/config.js';
import morgan from './config/morgan.js';
import cors from 'cors';
import httpStatus from 'http-status';
import routes from './routes/index.js';
import { errorConverter, errorHandler } from './middlewares/error.js';
import ApiError from './utils/ApiError.js';
const app = express();

if (config.env !== 'test') {
    app.use(morgan.successHandler);
    app.use(morgan.errorHandler);
}

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.options('*', cors());
app.use(compression());


app.use('/api/v1', routes);

// Любой неизвестный API ошибка 404
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

app.use(errorConverter);
app.use(errorHandler);

export default app;