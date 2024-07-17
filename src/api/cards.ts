import instance from '@/api/index';
import { Card } from '@/models/Card';
import { HttpResponse } from '@/models/HttpResponse';

export const getCards = async (): Promise<HttpResponse<Card[]>> => {
  const { data } = await instance.get<HttpResponse<Card[]>>(`/cards`);
  return data;
};
