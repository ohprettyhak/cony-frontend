'use client';
import { ReactElement } from 'react';

import LightBulbIcon from '@/assets/icons/light-bulb.svg';
import Card from '@/components/Card';
import Layout from '@/components/layouts/Layout';
import { sprinkles } from '@/styles/sprinkles.css';
import { theme } from '@/styles/theme.css';

import RecommendCard from './_components/RecommendCard';
import Weather from './_components/Weather';
import * as styles from './page.css';
import DailyQuote from '@/app/_components/DailyQuote';

export default function Home(): ReactElement {
  return (
    <Layout>
      <header className={sprinkles({ layerStyles: 'section-header' })}>
        <h1
          className={sprinkles({ layerStyles: 'section-title' })}
          style={{ alignSelf: 'self-start' }}
        >
          오늘
        </h1>
        <Weather />
      </header>

      <div className={styles.dateGrid}>
        {Array.from({ length: 7 }).map((_, index) => (
          <div key={index} className={styles.dateItem}>
            <p className={styles.dateText}>월</p>
            <span className={styles.dateCircle} />
          </div>
        ))}
      </div>
      
      <DailyQuote />
      <RecommendCard />
    </Layout>
  );
}
