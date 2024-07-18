'use client';
import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';
import { ReactElement, ReactNode } from 'react';

import { theme } from '@/styles/theme.css';

import * as styles from './Layout.css';

interface LayoutProps {
  children: ReactNode;
  bgColor?: string;
}

const Layout = ({
  bgColor = theme.colors.white,
  children,
}: LayoutProps): ReactElement => {
  const pathname: string = usePathname();
  const pathSegments: string[] = pathname.split('/').filter(Boolean);

  return (
    <div className={styles.root}>
      <main
        className={clsx(
          styles.main,
          pathSegments.length < 2 && styles.mainBottomPadding,
        )}
        style={{ backgroundColor: bgColor }}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
