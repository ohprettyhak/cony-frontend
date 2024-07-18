import { ReactElement, ReactNode, useCallback, useEffect } from 'react';

import { theme } from '@/styles/theme.css';

import { ChipRadioGroupContext } from './ChipRadioGroup.contexts';
import * as styles from './ChipRadioGroup.css';

interface ChipRadioGroupProps {
  name: string;
  value?: string | null;
  defaultValue?: string;
  onChange?: (value: string) => void;
  children: ReactNode;
  bgColor?: string;
  textColor?: string;
  bgColorAccent?: string;
  textColorAccent?: string;
}

const ChipRadioGroup = ({
  name,
  value = null,
  defaultValue,
  onChange = () => {},
  children,
  bgColor = theme.colors.white,
  textColor = theme.colors.gray950,
  bgColorAccent = theme.colors.gray950,
  textColorAccent = theme.colors.white,
}: ChipRadioGroupProps): ReactElement => {
  const handleChange = useCallback(
    (val: string) => {
      onChange(val);
    },
    [onChange],
  );

  useEffect(() => {
    if (defaultValue !== undefined && value === null) {
      handleChange(defaultValue);
    }
  }, [defaultValue, value, handleChange]);

  return (
    <ChipRadioGroupContext.Provider
      value={{
        name,
        value,
        onChange: handleChange,
        bgColor,
        textColor,
        bgColorAccent,
        textColorAccent,
      }}
    >
      <nav id={`chip-radio-group-${name}`} className={styles.list}>
        {children}
      </nav>
    </ChipRadioGroupContext.Provider>
  );
};

export default ChipRadioGroup;
