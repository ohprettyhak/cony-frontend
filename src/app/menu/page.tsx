import { ReactElement } from 'react';

import Layout from '@/components/layouts/Layout';
import { sprinkles } from '@/styles/sprinkles.css';

export default function Page(): ReactElement {
  return (
    <Layout>
      <h1 className={sprinkles({ layerStyles: 'section-title' })}>
        사용자님,
        <br />
        오늘도 좋은 하루 되세요!
      </h1>
    </Layout>
  );
}
