import { useQuery } from '@tanstack/react-query';

import { getDailyQuote } from '@/api';
import queryKeys from '@/utils/queryKeys';

const useDailyQuoteQuery = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: [queryKeys.dailyQuote()],
    queryFn: () => getDailyQuote(),
  });

  return { data, error, isLoading };
};

export default useDailyQuoteQuery;
