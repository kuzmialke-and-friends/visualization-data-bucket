import { promises as fs } from 'fs';
import { Middleware } from 'koa';

const readJson = async (dataset: string, id: string) => {
  try {
    const rawDataset = await fs.readFile(`datasets/${dataset}/${id}`, 'utf8');

    return JSON.parse(rawDataset);
  } catch {
    return null;
  }
};

export const datasetMiddleware: Middleware = async (ctx, next) => {
  const { dataset = '', id = '' } = ctx.params;

  const data = await readJson(dataset, id);

  if (!data) {
    ctx.throw(404);
  }

  ctx.type = 'application/json';
  ctx.body = data;
  await next();
};
