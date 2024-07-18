import { ReactElement } from 'react';

import DoneAllIcon from '@/assets/icons/done_all.svg';

import * as styles from './MilestoneRecommend.css';

interface MilestoneRecommendProps {
  buttonTitle: string;
  onClick: () => void;
}

const MilestoneRecommend = ({
  buttonTitle,
  onClick,
}: MilestoneRecommendProps): ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <DoneAllIcon width={24} height={24} />
        <span>새로운 마일스톤을 생성할까요?</span>
      </div>
      <button className={styles.button} onClick={onClick}>
        {buttonTitle}
      </button>
    </div>
  );
};

export default MilestoneRecommend;
