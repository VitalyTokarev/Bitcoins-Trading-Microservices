
import express, { Express, Router } from 'express';
import { getIdneityRoutes } from './identity';
import middlewares from '../middlewares';

const { expressLogger, handleErrors, loggerMiddleware } = middlewares;

const app: Express = express();
const router: Router = express.Router();

getIdneityRoutes(router);

app.use(expressLogger);
app.use(express.json());
app.use(loggerMiddleware);
app.use('/', router);
app.use(handleErrors);

export default app;
