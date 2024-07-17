'use client';
import { clsx } from 'clsx';
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
      <div className={styles.filterContainer}>filter</div>
      <Masonry className={styles.diaryList} columnsCount={2} gutter="0.5rem">
        <div className={sprinkles({ layerStyles: 'card' })}>
          <div
            className={clsx(
              styles.diaryTextContainer,
              styles.diaryTextContainerPadding.large,
            )}
          >
            <h3>직장에서의 긴장된 첫날</h3>
            <p>6월 25일</p>
            <p>24℃, 분당구 삼평동</p>
          </div>
        </div>
      </Masonry>
    </Layout>
  );
}
