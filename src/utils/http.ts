import { config } from '../config';

export const httpGet = async <T>(entity: string) => {
  const res = await fetch(`${config.baseApiUrl}/${entity}`);
  return res.json() as Promise<T>;
};
