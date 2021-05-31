import './utils/logger';
import express, { Express } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

import middlewares from './middlewares';
import { services } from './consts';

const { expressLogger, handleErrors, loggerMiddleware } = middlewares;

const port = process.env.PORT;

const app: Express = express();

app.use(expressLogger);
app.use(express.json());
app.use(loggerMiddleware);
services.forEach(({ nameRoute, url }) => {
  if (Array.isArray(nameRoute)) {
    nameRoute.forEach(item => app.use(createProxyMiddleware(`/${item}`, { target: url, changeOrigin: true })));
  } else {
    app.use(createProxyMiddleware(`/${nameRoute}`, { target: url, changeOrigin: true }));
  }
});
app.use(handleErrors);

app.listen(port, () => global.logger.info(`Running on port ${port}`));
