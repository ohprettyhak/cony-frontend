import instance from '@/api/index';
import { HttpResponse } from '@/models/HttpResponse';
import { SuggestQuestionsResponse } from '@/models/SuggestQuestions';
import { Task, TaskPayload } from '@/models/Tasks';

export const getTasks = async (): Promise<HttpResponse<Task[]>> => {
  const { data } = await instance.get<HttpResponse<Task[]>>(`/tasks`);
  return data;
};

export const postTask = async (
  payload: TaskPayload,
): Promise<HttpResponse<Task>> => {
  const { data } = await instance.post<HttpResponse<Task>>(`/tasks`, payload);
  return data;
};

export const putTask = async (
  id: number,
  payload: TaskPayload,
): Promise<HttpResponse<Task>> => {
  const { data } = await instance.put<HttpResponse<Task>>(
    `/tasks/${id}`,
    payload,
  );
  return data;
};

export const deleteTask = async (id: number): Promise<void> => {
  const { data } = await instance.delete<void>(`/tasks/${id}`);
  return data;
};
