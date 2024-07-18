'use client';
import { clsx } from 'clsx';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ReactElement } from 'react';

import MicIcon from '@/assets/icons/mic.svg';
import Layout from '@/components/layouts/Layout';
import useSuggestQuestionsQuery from '@/hooks/queries/useSuggestQuestionsQuery';
import {
  SuggestQuestion,
  SuggestQuestionCategory,
} from '@/models/SuggestQuestions';
import { sprinkles } from '@/styles/sprinkles.css';

import * as styles from './page.css';
import Card from '@/components/Card';

export default function Page(): ReactElement {
  const { data } = useSuggestQuestionsQuery();
  const suggestQuestions = data?.data;

  const searchParams = useSearchParams();
  const categories: SuggestQuestionCategory[] =
    suggestQuestions?.categories || [];
  const current: number =
    Number(searchParams.get('category') as string) || categories[0]?.id;

  return (
    <Layout>
      <header className={sprinkles({ layerStyles: 'section-header' })}>
        <h1 className={sprinkles({ layerStyles: 'section-title' })}>
          기록하기
        </h1>
        <Link href="/create/record">
          <MicIcon width={24} height={24} />
        </Link>
      </header>

      <ul className={styles.categoryList}>
        {categories.map(category => (
          <li
            key={category.id}
            className={clsx(
              styles.categoryItem,
              category.id === current && styles.categoryItemPressed,
            )}
          >
            <Link href={`/create?category=${category.id}`}>
              {category.text}
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.questionList}>
        {suggestQuestions?.suggestQuestions[current]?.map(
          (question: SuggestQuestion) => (
            <Link
              key={question.id}
              href={`/create/record?category=${current}&question=${question.id}`}
            >
              <Card>
                <p className={styles.questionCardText}>{question.content}</p>
              </Card>
            </Link>
          ),
        )}
      </div>
    </Layout>
  );
}
