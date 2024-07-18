import axios from 'axios';

import { HttpResponse } from '@/models/HttpResponse';
import { Quote } from '@/models/Quote';

const instance = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TEST_BEARER_TOKEN}`,
  },
  withCredentials: true,
});

export default instance;

export const getDailyQuote = async (): Promise<HttpResponse<Quote>> => {
  const { data } =
    await instance.get<HttpResponse<Quote>>(`/api/getDailyQuote`);
  return data;
};
