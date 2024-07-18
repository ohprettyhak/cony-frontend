'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Fragment, ReactElement, Suspense, useEffect } from 'react';

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
  } = useSpeechRecognition();

  useEffect(() => {
    startListening();
  }, [startListening]);

  return (
    <Fragment>
      <div className={styles.status}>
        <div className={styles.statusInner}>
          <div className={sprinkles({ layout: 'columnCenterX' })}>
            <span className={styles.recordStatus}>
              {isListening ? '녹음 중이에요' : '녹음이 종료되었어요'}
            </span>
            <h3 className={styles.recordTitle}>
              친구나 직장에서 동료에게
              <br />
              의욕을 북돋아준 일이 있었나요?
            </h3>
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
            <button className={styles.nextStepIcon}>
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
