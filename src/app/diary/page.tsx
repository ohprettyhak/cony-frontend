import { ReactElement } from 'react';

import Layout from '@/components/layouts/Layout';
import { sprinkles } from '@/styles/sprinkles.css';

export default function Page(): ReactElement {
  return (
    <Layout>
      <h1 className={sprinkles({ layerStyles: 'title' })}>다이어리</h1>
      <div className={sprinkles({ layerStyles: 'card' })}>asdf</div>
    </Layout>
  );
}
