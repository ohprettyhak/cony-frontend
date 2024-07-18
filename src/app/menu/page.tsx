import { ReactElement } from 'react';

import Layout from '@/components/layouts/Layout';
import { sprinkles } from '@/styles/sprinkles.css';

import Milestone from './_components/Milestone';

export default function Page(): ReactElement {
  return (
    <Layout>
      <header className={sprinkles({ layerStyles: 'section-header' })}>
        <h1 className={sprinkles({ layerStyles: 'section-title' })}>
          사용자님,
          <br />
          오늘도 좋은 하루 되세요!
        </h1>
      </header>

      <Milestone />
    </Layout>
  );
}
