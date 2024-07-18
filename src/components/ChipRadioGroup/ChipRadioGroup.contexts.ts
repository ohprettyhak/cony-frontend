import { createContext, useContext } from 'react';

type ChipRadioGroupContextType = {
  name: string;
  value: string | null;
  onChange: (value: string) => void;
  bgColor: string;
  textColor: string;
  bgColorAccent: string;
  textColorAccent: string;
};

export const ChipRadioGroupContext = createContext<
  ChipRadioGroupContextType | undefined
>(undefined);

export const useChipRadioGroup = () => {
  const context = useContext(ChipRadioGroupContext);

  if (!context) {
    throw new Error(
      'ChipRadioButton component must be used within a ChipRadioGroup component',
    );
  }
  return context;
};
