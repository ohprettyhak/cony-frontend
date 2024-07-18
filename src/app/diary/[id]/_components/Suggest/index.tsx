import { motion } from 'framer-motion';
import { ReactElement } from 'react';

import AIIcon from '@/assets/icons/ai.svg';
import KeyboardKeysIcon from '@/assets/icons/keyboard_keys.svg';
import MicIcon from '@/assets/icons/mic.svg';
import { theme } from '@/styles/theme.css';

import * as styles from './MilestoneRecommend.css';

interface SuggestProps {
  suggest: string;
}

const Suggest = ({ suggest }: SuggestProps): ReactElement => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={styles.container}
    >
      <div className={styles.titleContainer}>
        <AIIcon width={24} height={24} />
        <span>{suggest}</span>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.button}
          style={{
            color: theme.colors.gray50,
            backgroundColor: theme.colors.tealblue900,
          }}
        >
          <MicIcon width={16} height={16} />
          대화 더 하기
        </button>
        <button
          className={styles.button}
          style={{
            color: theme.colors.tealblue900,
            backgroundColor: '#9DD5F1',
          }}
        >
          <KeyboardKeysIcon width={16} height={16} />
          텍스트로 입력하기
        </button>
      </div>
    </motion.div>
  );
};

export default Suggest;
