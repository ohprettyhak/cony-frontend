'use client';
import { clsx } from 'clsx';
import Link from 'next/link';
import { ReactElement } from 'react';
import Masonry from 'react-responsive-masonry';

import Layout from '@/components/layouts/Layout';
import { sprinkles } from '@/styles/sprinkles.css';

import * as styles from './page.css';

export default function Page(): ReactElement {
  return (
    <Layout>
      <header className={sprinkles({ layerStyles: 'section-header' })}>
        <h1 className={sprinkles({ layerStyles: 'section-title' })}>
          다이어리
        </h1>
      </header>
      {/*<div className={styles.filterContainer}>filter</div>*/}
      <Masonry className={styles.diaryList} columnsCount={2} gutter="0.5rem">
        <div className={sprinkles({ layerStyles: 'card' })}>
          <Link href="/diary/1" passHref>
            <div
              className={clsx(
                styles.diaryTextContainer,
                styles.diaryTextContainerPadding.large,
              )}
            >
              <h3>자기 성찰의 시간</h3>
              <p>7월 18일</p>
              <p>27℃, 영통구 영통동</p>
            </div>
          </Link>
        </div>
      </Masonry>
    </Layout>
  );
}
