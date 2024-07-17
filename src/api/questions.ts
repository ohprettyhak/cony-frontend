import instance from '@/api/index';
import { HttpResponse } from '@/models/HttpResponse';
import { RecordQuestionResponse } from '@/models/RecordQuestionResponse';

export const getQuestions = async (): Promise<
  HttpResponse<RecordQuestionResponse>
> => {
  const { data } =
    await instance.get<HttpResponse<RecordQuestionResponse>>(`/questions`);
  return data;
};
