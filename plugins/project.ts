import { go_api_v1 } from './axios';

const getNewCount = async () => {
  const res = await go_api_v1.get<number>('/projects/new_count');
  return res.data;
};

export { getNewCount };
