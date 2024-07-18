import { useMutation } from '@tanstack/react-query';

import { deleteTask } from '@/api/tasks';

const useDeleteTaskMutation = (onSettledCallback?: () => void) => {
  return useMutation({
    mutationFn: (id: number) => deleteTask(id),
    onSettled: async () => {
      if (onSettledCallback) onSettledCallback();
    },
  });
};

export default useDeleteTaskMutation;
