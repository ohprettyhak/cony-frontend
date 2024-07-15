import { ReactElement } from 'react';

import Layout from '@/components/layouts/Layout';
import { sprinkles } from '@/styles/sprinkles.css';

export default function Page(): ReactElement {
  return (
    <Layout>
      <h1 className={sprinkles({ layerStyles: 'title' })}>기록하기</h1>
    </Layout>
  );
}
