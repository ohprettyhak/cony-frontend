import { ReactElement } from 'react';

import Layout from '@/components/layouts/Layout';

import * as styles from './page.css';

export default function Page(): ReactElement {
  return (
    <Layout>
      <div className={styles.controller}>
        <div className={styles.controllerInner}>
          <p>질문을 선택할 수 있어요</p>
        </div>
      </div>
    </Layout>
  );
}
