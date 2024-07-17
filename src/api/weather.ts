import instance from '@/api/index';
import { HttpResponse } from '@/models/HttpResponse';
import { Weather } from '@/models/Weather';

export const getWeather = async (
  lat: number,
  lng: number,
  lang = 'KO',
): Promise<HttpResponse<Weather>> => {
  const { data } = await instance.get<HttpResponse<Weather>>(`/weather`, {
    params: { lat, lng, lang },
  });
  return data;
};
