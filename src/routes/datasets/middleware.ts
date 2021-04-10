import { promises as fs } from 'fs';
import { Middleware } from 'koa';

const readJson = async (id: string) => {
  const rawDataset = await fs.readFile(`datasets/${id}`, 'utf8');

  if (!rawDataset) {
    return null;
  }

  try {
    return JSON.parse(rawDataset);
  } catch { 
    return null;
  }
};

export const datasetMiddleware: Middleware = async (ctx, next) => {
  const dataset = ctx.params.id ? await readJson(ctx.params.id) : null;

  if (!dataset) {
    ctx.throw(404);
  }

  ctx.type = 'application/json';
  ctx.body = dataset;
  await next();
};
