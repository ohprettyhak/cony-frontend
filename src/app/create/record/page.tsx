'use client';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  Fragment,
  ReactElement,
  Suspense,
  useEffect,
  useState,
  useCallback,
} from 'react';

import MicIcon from '@/assets/icons/mic.svg';
import NextPlanIcon from '@/assets/icons/next_plan.svg';
import PauseIcon from '@/assets/icons/pause.svg';
import { ChipRadioButton, ChipRadioGroup } from '@/components/ChipRadioGroup';
import Layout from '@/components/layouts/Layout';
import useSuggestQuestionsQuery from '@/hooks/queries/useSuggestQuestionsQuery';
import useSpeechRecognition from '@/hooks/useSpeechRecognition';
import { SuggestQuestionCategory } from '@/models/SuggestQuestions';
import { sprinkles } from '@/styles/sprinkles.css';
import { theme } from '@/styles/theme.css';

import * as styles from './page.css';

const SuspenseContent = (): ReactElement => {
  const router = useRouter();
  const { data } = useSuggestQuestionsQuery();
  const suggestQuestions = data?.data;

  const searchParams = useSearchParams();
  const categories: SuggestQuestionCategory[] =
    suggestQuestions?.categories || [];
  const current: number =
    Number(searchParams.get('category')) || categories[0]?.id;

  const {
    isListening,
    transcript,
    interimTranscript,
    startListening,
    stopListening,
    resetTranscript,
  } = useSpeechRecognition();

  const [title, setTitle] = useState(
    '직장에서 친구나 동료에게 의욕을 북돋아준 일이 있었나요?',
  );

  const changeTitle = useCallback(() => {
    setTitle('퇴근을 앞당기게 하는 사용자님의 비결은 무엇인가요?');
    stopListening();
    setTimeout(() => {
      resetTranscript();
      startListening();
    }, 100);
  }, [resetTranscript, startListening, stopListening]);

  useEffect(() => {
    startListening();

    const timer = setTimeout(changeTitle, 10000);

    return () => {
      clearTimeout(timer);
      stopListening();
      resetTranscript();
    };
  }, [changeTitle, startListening, stopListening, resetTranscript]);

  return (
    <Fragment>
      <div className={styles.status}>
        <div className={styles.statusInner}>
          <div className={sprinkles({ layout: 'columnCenterX' })}>
            <span className={styles.recordStatus}>
              {isListening ? '녹음 중이에요' : '녹음이 종료되었어요'}
            </span>
            <h3 className={styles.recordTitle}>{title}</h3>
            <p className={styles.recordText}>
              {transcript} {interimTranscript}
            </p>
          </div>
        </div>
      </div>

      <div className={styles.controller}>
        <div className={styles.controllerInner}>
          <p className={styles.controllerText}>질문을 선택할 수 있어요</p>

          <div className={styles.categoryContainer}>
            <ChipRadioGroup
              name="category"
              value={current?.toString()}
              bgColor="#30325B"
              textColor={theme.colors.perano50}
              bgColorAccent={theme.colors.perano50}
              textColorAccent={theme.colors.perano950}
            >
              {categories.map(category => (
                <ChipRadioButton
                  value={category.id.toString()}
                  key={category.id}
                >
                  <Link href={`/create/record?category=${category.id}`}>
                    {category.text}
                  </Link>
                </ChipRadioButton>
              ))}
            </ChipRadioGroup>
          </div>

          <div
            className={sprinkles({
              display: 'flex',
              marginTop: 'xl',
              gap: 'sm',
            })}
          >
            <button
              className={styles.nextStepIcon}
              onClick={() => router.replace('/create')}
            >
              <NextPlanIcon width={24} height={24} />
            </button>
            <button
              className={styles.recordControlIcon}
              onClick={isListening ? stopListening : startListening}
            >
              {isListening ? (
                <PauseIcon width={24} height={24} />
              ) : (
                <MicIcon width={24} height={24} />
              )}
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default function Page(): ReactElement {
  return (
    <Layout>
      <Suspense>
        <SuspenseContent />
      </Suspense>
    </Layout>
  );
}
