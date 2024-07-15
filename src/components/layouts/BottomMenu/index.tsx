'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactElement, useMemo } from 'react';

import { MENU } from '@/constants/Menu';
import { theme } from '@/styles/theme.css';

import * as styles from './BottomMenu.css';

const BottomMenu = (): ReactElement => {
  const pathname: string = usePathname();

  const menuItems = useMemo(() => {
    return MENU.map(({ key, name, icon: MenuIcon, path }) => {
      const isActive: boolean = pathname === path;

      return (
        <AnimatePresence key={key} mode="wait">
          <motion.li
            key={pathname}
            className={styles.menuItem}
            initial={{
              backgroundColor: 'rgba(28, 27, 31, 0.03)',
              color: theme.colors.gray950,
            }}
            animate={{
              backgroundColor: isActive
                ? theme.colors.gray950
                : 'rgba(28, 27, 31, 0.03)',
              color: isActive ? theme.colors.white : theme.colors.gray950,
            }}
            exit={{
              backgroundColor: 'rgba(28, 27, 31, 0.03)',
              color: theme.colors.gray950,
            }}
            transition={{ duration: 0.5 }}
          >
            <Link href={path} className={styles.menuLink}>
              <MenuIcon width={24} height={24} />
              {isActive && (
                <motion.span
                  key={pathname}
                  initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                  animate={{
                    width: 'auto',
                    opacity: 1,
                    marginLeft: '0.75rem',
                  }}
                  exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                  transition={{ duration: 0.5 }}
                  className={styles.menuName}
                >
                  {name}
                </motion.span>
              )}
            </Link>
          </motion.li>
        </AnimatePresence>
      );
    });
  }, [pathname]);

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <ul className={styles.menu}>{menuItems}</ul>
      </div>
    </div>
  );
};

export default BottomMenu;
