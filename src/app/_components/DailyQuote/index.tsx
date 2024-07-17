import { ReactElement } from 'react';

import LightBulbIcon from '@/assets/icons/light-bulb.svg';
import Card from '@/components/Card';
import useDailyQuoteQuery from '@/hooks/queries/useDailyQuoteQuery';
import { theme } from '@/styles/theme.css';

import * as styles from './DailyQuote.css';

const DailyQuote = (): ReactElement | null => {
  const { data } = useDailyQuoteQuery();

  if (!data) return null;

  return (
    <Card bgColor={theme.colors.surf200}>
      <div className={styles.headContainer}>
        <LightBulbIcon width={24} height={24} color={theme.colors.gray950} />
        Cony의 오늘 한마디
      </div>
      <h3 className={styles.quote}>{data.data.content}</h3>
    </Card>
  );
};

export default DailyQuote;
