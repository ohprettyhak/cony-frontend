import { useMutation } from '@tanstack/react-query';

import { putTask } from '@/api/tasks';
import { TaskPayload } from '@/models/Tasks';

type UpdateTaskMutationParams = {
  id: number;
  payload: TaskPayload;
};

const useUpdateTaskMutation = (onSettledCallback?: () => void) => {
  return useMutation({
    mutationFn: ({ id, payload }: UpdateTaskMutationParams) =>
      putTask(id, payload),
    onSettled: async () => {
      if (onSettledCallback) onSettledCallback();
    },
  });
};

export default useUpdateTaskMutation;
