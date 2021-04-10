import Router from '@koa/router';
import { datasetMiddleware } from './datasets/middleware';

export const router = new Router();

router.get('/datasets/:dataset/:id', datasetMiddleware);
router.get('/health', async (ctx, next) => {
  await next();

  ctx.body = 'Ok';
});
