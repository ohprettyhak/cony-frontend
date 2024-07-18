import { CSSProperties, ReactNode } from 'react';

import { useChipRadioGroup } from './ChipRadioGroup.contexts';
import * as styles from './ChipRadioGroup.css';

interface ChipRadioButtonProps {
  value: string;
  children: ReactNode;
}

const ChipRadioButton = ({ value, children }: ChipRadioButtonProps) => {
  const {
    value: selectedValue,
    onChange,
    bgColor,
    textColor,
    bgColorAccent,
    textColorAccent,
  } = useChipRadioGroup();

  const isSelected = value === selectedValue;
  const style: CSSProperties = {
    backgroundColor: isSelected ? bgColorAccent : bgColor,
    color: isSelected ? textColorAccent : textColor,
  };

  return (
    <button
      className={styles.item}
      type="button"
      style={style}
      onClick={() => onChange(value)}
    >
      {children}
    </button>
  );
};

export default ChipRadioButton;
