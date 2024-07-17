import { ComponentProps, CSSProperties, ReactElement, ReactNode } from 'react';

import { theme } from '@/styles/theme.css';

import * as styles from './Card.css';
import Head from './Head';
import Link from './Link';

interface CardProps extends ComponentProps<'div'> {
  bgColor?: string;
  style?: CSSProperties;
  children: ReactNode;
}

const Card = ({
  bgColor = theme.colors.primary200,
  children,
  style,
  ...props
}: CardProps): ReactElement => {
  return (
    <div
      className={styles.root}
      style={{ ...style, backgroundColor: bgColor }}
      {...props}
    >
      {children}
    </div>
  );
};

Card.displayName = 'Card';
Card.Head = Head;
Card.Link = Link;

export default Card;
