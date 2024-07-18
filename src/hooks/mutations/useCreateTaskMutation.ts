import { useMutation } from '@tanstack/react-query';

import { postTask } from '@/api/tasks';
import { TaskPayload } from '@/models/Tasks';

const useCreateTaskMutation = (onSettledCallback?: () => void) => {
  return useMutation({
    mutationFn: (payload: TaskPayload) => postTask(payload),
    onSettled: async () => {
      if (onSettledCallback) onSettledCallback();
    },
  });
};

export default useCreateTaskMutation;
