import { ReactElement } from 'react';

import LightBulbIcon from '@/assets/icons/lightbulb.svg';
import Card from '@/components/Card';
import useDailyQuoteQuery from '@/hooks/queries/useDailyQuoteQuery';
import { sprinkles } from '@/styles/sprinkles.css';
import { theme } from '@/styles/theme.css';

import * as styles from './DailyQuote.css';

const DailyQuote = (): ReactElement | null => {
  const { data } = useDailyQuoteQuery();

  if (!data) return null;

  return (
    <div className={sprinkles({ marginLeft: 'sm', marginRight: 'sm' })}>
      <Card bgColor={theme.colors.surf200}>
        <div className={styles.headContainer}>
          <LightBulbIcon width={16} height={16} color={theme.colors.gray950} />
          Cony의 오늘 한마디
        </div>
        <h3 className={styles.quote}>{data.data.content}</h3>
      </Card>
    </div>
  );
};

export default DailyQuote;
