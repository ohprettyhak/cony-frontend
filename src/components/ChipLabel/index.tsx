import { ReactElement, cloneElement } from 'react';

import { theme } from '@/styles/theme.css';

import * as styles from './ChipLabel.css';

interface ChipLabelProps {
  icon: ReactElement;
  label: string;
  color?: string;
  bgColor?: string;
}

const ChipLabel = ({
  icon,
  label,
  color = theme.colors.gray50,
  bgColor = '#4F3722',
}: ChipLabelProps): ReactElement => {
  const Icon = cloneElement(icon, { width: 16, height: 16 });

  return (
    <span className={styles.label} style={{ color, backgroundColor: bgColor }}>
      {Icon}
      {label}
    </span>
  );
};

export default ChipLabel;
