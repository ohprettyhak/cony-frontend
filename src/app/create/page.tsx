import { clsx } from 'clsx';
import Link from 'next/link';
import { ReactElement } from 'react';

import MicIcon from '@/assets/icons/mic.svg';
import PageInfoIcon from '@/assets/icons/page-info.svg';
import Card from '@/components/Card';
import Layout from '@/components/layouts/Layout';
import { RecordQuestionResponse } from '@/models/RecordQuestionResponse';
import { sprinkles } from '@/styles/sprinkles.css';

import * as styles from './page.css';

const dummyData: RecordQuestionResponse = {
  id: 1,
  questions: {
    '업무 생산성': [
      '친구나 직장에서 동료에게 의욕을 북돋아준 일이 있었나요?',
      '퇴근을 앞당기게 하는 사용자님의 비결은 무엇인가요?',
    ],
    '나의 감정': [
      '오늘 하루 동안 가장 강렬했던 감정은 무엇이었나요?',
      '어떤 상황이나 사람이 오늘 나의 감정을 가장 많이 변화시켰나요?',
      '오늘 나를 가장 행복하게 만든 순간은 언제였나요?',
      '오늘 나를 슬프게 혹은 화나게 한 것은 무엇인가요?',
    ],
    '새로운 취미': [
      '최근에 시작한 새로운 취미가 있나요? 그 취미를 시작하게 된 계기는 무엇인가요?',
      '새로운 취미를 통해 배운 것은 무엇인가요?',
      '새로운 취미 활동 중 가장 즐거웠던 경험은 무엇인가요?',
      '이 취미를 통해 만난 새로운 사람들이 있다면, 그들과의 만남이 어떠했나요?',
    ],
  },
};

const categories: string[] = Object.keys(dummyData.questions);

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}): ReactElement {
  const current: string = (searchParams.category as string) || categories[0];

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
        <li className={styles.categoryItem}>
          <button>
            <PageInfoIcon width={24} height={24} />
          </button>
        </li>
        {categories.map(category => (
          <li
            key={category}
            className={clsx(
              styles.categoryItem,
              category === current && styles.categoryItemPressed,
            )}
          >
            <Link href={`/create?category=${category}`}>{category}</Link>
          </li>
        ))}
      </ul>

      <div className={styles.questionList}>
        {dummyData.questions[current].map(question => (
          <Link
            key={question}
            href={`/create/record?category=${current}&question=${question}`}
          >
            <Card>
              <p className={styles.questionCardText}>{question}</p>
            </Card>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
