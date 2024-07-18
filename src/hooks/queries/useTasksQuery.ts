import { useQuery } from '@tanstack/react-query';

import { getTasks } from '@/api/tasks';
import queryKeys from '@/utils/queryKeys';

const useTasksQuery = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: [queryKeys.tasks()],
    queryFn: () => getTasks(),
  });

  return { data, error, isLoading };
};

export default useTasksQuery;
