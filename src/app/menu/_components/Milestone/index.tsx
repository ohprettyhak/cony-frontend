'use client';
import { useQueryClient } from '@tanstack/react-query';
import { Fragment, ReactElement, useState, useEffect, useRef } from 'react';

import CheckCircleIcon from '@/assets/icons/check_circle.svg';
import RadioButtonUncheckedIcon from '@/assets/icons/radio_button_unchecked.svg';
import Card from '@/components/Card';
import useCreateTaskMutation from '@/hooks/mutations/useCreateTaskMutation';
import useUpdateTaskMutation from '@/hooks/mutations/useUpdateTaskMutation';
import useTasksQuery from '@/hooks/queries/useTasksQuery';
import { Task, TaskPayload } from '@/models/Tasks';
import { sprinkles } from '@/styles/sprinkles.css';
import { theme } from '@/styles/theme.css';
import queryKeys from '@/utils/queryKeys';

import * as styles from './Milestone.css';

const Milestone = (): ReactElement | null => {
  const queryClient = useQueryClient();
  const { data } = useTasksQuery();
  const [milestones, setMilestones] = useState<Task[]>(data?.data || []);
  const pendingMutations = useRef(0);

  const handleSettled = async () => {
    pendingMutations.current -= 1;
    if (pendingMutations.current === 0) {
      await queryClient.invalidateQueries({ queryKey: [queryKeys.tasks()] });
    }
  };

  const { mutate: createTaskMutation } = useCreateTaskMutation(handleSettled);
  const { mutate: updateTaskMutation } = useUpdateTaskMutation(handleSettled);
  // const { mutate: deleteTaskMutation } = useDeleteTaskMutation(handleSettled);

  useEffect(() => {
    if (data?.data) {
      setMilestones(data.data);
    }
  }, [data]);

  const handleCreate = () => {
    const task: TaskPayload = { content: '새로운 마일스톤', completed: false };
    pendingMutations.current += 1;
    createTaskMutation(task, {
      onSuccess: response => {
        setMilestones(prevMilestones => [...prevMilestones, response.data]);
      },
    });
  };

  const handleToggle = (id: number, content: string, status: boolean) => {
    const updatedMilestones = milestones.map(milestone =>
      milestone.id === id ? { ...milestone, completed: !status } : milestone,
    );
    setMilestones(updatedMilestones);

    const task: TaskPayload = { content, completed: !status };
    pendingMutations.current += 1;
    updateTaskMutation({ id, payload: task });
  };

  return (
    <div
      className={sprinkles({
        marginTop: 'lg',
        marginLeft: 'sm',
        marginRight: 'sm',
      })}
    >
      <Card>
        <h3 className={styles.title}>마일스톤</h3>
        <ul className={styles.list}>
          {milestones.map((milestone, index) => {
            const { id, content, completed } = milestone;
            return (
              <Fragment key={id}>
                <li
                  className={styles.item}
                  style={{ opacity: completed ? '0.2' : '1' }}
                >
                  <button onClick={() => handleToggle(id, content, completed)}>
                    {completed ? (
                      <CheckCircleIcon
                        width={24}
                        height={24}
                        color={theme.colors.gray950}
                      />
                    ) : (
                      <RadioButtonUncheckedIcon
                        width={24}
                        height={24}
                        color={theme.colors.gray950}
                      />
                    )}
                  </button>
                  {content}
                </li>
                {milestones.length !== index - 1 && (
                  <hr className={styles.itemDivider} />
                )}
              </Fragment>
            );
          })}
        </ul>
        <button className={styles.createButton} onClick={handleCreate}>
          새로운 마일스톤 추가하기
        </button>
      </Card>
    </div>
  );
};

export default Milestone;
