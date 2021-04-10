import Router from '@koa/router';
import { datasetMiddleware } from './datasets/middleware';

export const router = new Router();

router.get('/datasets/:id', datasetMiddleware);
