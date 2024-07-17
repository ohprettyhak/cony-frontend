import { clsx } from 'clsx';
import Image from 'next/image';
import { ReactElement, ReactNode } from 'react';

import * as styles from './Card.css';

interface HeadProps {
  iconImage?: string;
  children: ReactNode;
}

const Head = ({ iconImage, children }: HeadProps): ReactElement => {
  return (
    <div className={clsx(styles.head, iconImage && styles.headGap)}>
      {iconImage && <Image src={iconImage} alt="icon" />}
      <span className={iconImage ? '' : styles.headTextWithoutIcon}>
        {children}
      </span>
    </div>
  );
};

export default Head;
