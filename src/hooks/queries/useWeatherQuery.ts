import { useQuery } from '@tanstack/react-query';

import { getWeather } from '@/api/weather';
import queryKeys from '@/utils/queryKeys';

interface weatherQueryProps {
  lat?: number;
  lng?: number;
  lang?: string;
}

const useWeatherQuery = ({ lat, lng, lang = 'KO' }: weatherQueryProps) => {
  const { data, error, isLoading } = useQuery({
    queryKey: [queryKeys.weather(lat!, lng!, lang)],
    queryFn: () => getWeather(lat!, lng!, lang),
    enabled: !!lat && !!lng,
  });

  return { data, error, isLoading };
};

export default useWeatherQuery;
