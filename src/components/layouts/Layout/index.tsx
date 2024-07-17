'use client';
import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';
import { ReactElement, ReactNode } from 'react';

import * as styles from './Layout.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): ReactElement => {
  const pathname: string = usePathname();
  const pathSegments: string[] = pathname.split('/').filter(Boolean);

  return (
    <div className={styles.root}>
      <main
        className={clsx(
          styles.main,
          pathSegments.length < 2 && styles.mainBottomPadding,
        )}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
