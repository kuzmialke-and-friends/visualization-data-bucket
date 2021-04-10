import Koa from 'koa';
import { router } from './routes/router';

export const startService = () => {
  const app = new Koa();

  app.use(router.routes()).use(router.allowedMethods());

  app.listen(process.env.SERVER_PORT);
};
