import { ReactElement, ReactNode } from 'react';

import * as styles from './Layout.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): ReactElement => {
  return (
    <div className={styles.root}>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
