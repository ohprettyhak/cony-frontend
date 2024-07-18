import { Fragment } from 'react';

import Card from '@/components/Card';
import useCardsQuery from '@/hooks/queries/useCardsQuery';
import { rem } from '@/styles/pxto';

import * as styles from './RecommendCard.css';

const RecommendCard = () => {
  const { data } = useCardsQuery();

  if (!data) return null;
  const { data: cards } = data;

  return (
    <div className={styles.cardList}>
      {cards.map((card, index) => (
        <Card key={index} bgColor={card.cardColor}>
          <Card.Head iconImage={card.iconImage}>{card.title}</Card.Head>
          {card.contents && (
            <p className={styles.cardContents}>{card.contents}</p>
          )}
          {card.links.length > 0 && (
            <Card bgColor={card.cardColorAccent} style={{ marginTop: rem(24) }}>
              {card.links.map((link, index) => {
                return (
                  <Fragment key={index}>
                    <Card.Link {...link} />
                    {index === card.links.length - 1 ? null : (
                      <hr className={styles.cardLinkDivider} />
                    )}
                  </Fragment>
                );
              })}
            </Card>
          )}
        </Card>
      ))}
    </div>
  );
};

export default RecommendCard;
