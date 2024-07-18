'use client';

import { clsx } from 'clsx';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ReactElement, Suspense } from 'react';

import MicIcon from '@/assets/icons/mic.svg';
import Card from '@/components/Card';
import Layout from '@/components/layouts/Layout';
import useSuggestQuestionsQuery from '@/hooks/queries/useSuggestQuestionsQuery';
import { SuggestQuestionCategory } from '@/models/SuggestQuestions';
import { sprinkles } from '@/styles/sprinkles.css';

import * as styles from './page.css';

function PageContent(): ReactElement {
  const { data } = useSuggestQuestionsQuery();
  const suggestQuestions = data?.data;

  const searchParams = useSearchParams();
  const categories: SuggestQuestionCategory[] =
    suggestQuestions?.categories || [];
  const current: number =
    Number(searchParams.get('category')) || categories[0]?.id;

  return (
    <>
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
        {suggestQuestions?.suggestQuestions[current]?.map(question => (
          <Link
            key={question.id}
            href={`/create/record?category=${current}&question=${question.id}`}
          >
            <Card>
              <p className={styles.questionCardText}>{question.content}</p>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}

export default function Page(): ReactElement {
  return (
    <Layout>
      <Suspense>
        <PageContent />
      </Suspense>
    </Layout>
  );
}
