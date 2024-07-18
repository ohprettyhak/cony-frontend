import instance from '@/api/index';
import { HttpResponse } from '@/models/HttpResponse';
import { SuggestQuestionsResponse } from '@/models/SuggestQuestions';

export const getSuggestQuestions = async (): Promise<
  HttpResponse<SuggestQuestionsResponse>
> => {
  const { data } =
    await instance.get<HttpResponse<SuggestQuestionsResponse>>(
      `/suggest-questions`,
    );
  return data;
};
