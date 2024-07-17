import Image from 'next/image';
import NextLink from 'next/link';
import { ReactElement } from 'react';

import { Link as LinkInterface } from '@/models/Card';

import * as styles from './Card.css';

export const Link = ({
  url,
  image,
  title,
  description,
}: LinkInterface): ReactElement => {
  return (
    <NextLink href={url} passHref>
      <div className={styles.linkContainer}>
        <span>
          <h4 className={styles.linkTitle}>{title}</h4>
          <p className={styles.linkDescription}>{description}</p>
        </span>
        <span className={styles.linkImageContainer}>
          <Image src={image} alt={title} fill priority />
        </span>
      </div>
    </NextLink>
  );
};

export default Link;
