import { useQuery } from '@tanstack/react-query';

import { getSuggestQuestions } from '@/api/suggest-questions';
import queryKeys from '@/utils/queryKeys';

const useSuggestQuestionsQuery = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: [queryKeys.suggestQuestions()],
    queryFn: () => getSuggestQuestions(),
  });

  return { data, error, isLoading };
};

export default useSuggestQuestionsQuery;
