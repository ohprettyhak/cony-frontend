import { useQuery } from '@tanstack/react-query';

import { getCards } from '@/api/cards';
import queryKeys from '@/utils/queryKeys';

const useCardsQuery = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: [queryKeys.cards()],
    queryFn: () => getCards(),
  });

  return { data, error, isLoading };
};

export default useCardsQuery;
