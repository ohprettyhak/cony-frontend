import { createGlobalTheme } from '@vanilla-extract/css';

import { rem } from './pxto';

export const spaces = {
  none: '0',
  xxs: rem(2),
  xs: rem(4),
  sm: rem(8),
  md: rem(16),
  lg: rem(24),
  xl: rem(32),
  xxl: rem(40),
  xxxl: rem(48),
};

export const fontSizes = {
  xxs: rem(10),
  xs: rem(12),
  sm: rem(14),
  md: rem(16),
  lg: rem(18),
  xl: rem(20),
  xxl: rem(24),
  xxxl: rem(32),
};

export const fontWeights = {
  hairline: '100',
  thin: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
};

export const layouts = {
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerX: {
    display: 'flex',
    justifyContent: 'center',
  },
  centerY: {
    display: 'flex',
    alignItems: 'center',
  },
  rowBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  columnCenterX: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  columnCenterY: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
};

export const colors = {
  white: '#FFFFFF',

  primary100: '#F3F0CE',
  primary200: '#EBE4AB',
  primary300: '#DBCA69',
  primary400: '#CFB440',
  primary500: '#C09F32',
  primary600: '#A57E29',
  primary700: '#845E24',
  primary800: '#6F4D24',
  primary900: '#5F4124',
  primary950: '#372111',

  gray50: '#F6F6F6',
  gray100: '#E7E7E7',
  gray200: '#D1D1D1',
  gray300: '#B0B0B0',
  gray400: '#888888',
  gray500: '#6D6D6D',
  gray600: '#5D5D5D',
  gray700: '#4F4F4F',
  gray800: '#454545',
  gray900: '#3D3D3D',
  gray950: '#1C1B1F',

  surf200: '#C8DFC9',

  wine200: '#D8D8E5',
  wine700: '#555068',

  perano50: '#F1F5FC',
  perano950: '#232443',

  tealblue200: '#BDE8FA',
  tealblue900: '#0E425B',
  tealblue950: '#0B3146',
};

export const typographies = {};

export const layerStyles = {
  'section-header': {
    display: 'flex',
    width: '100%',
    minHeight: rem(34),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingInline: rem(32),
    marginTop: rem(72),
    userSelect: 'none',
  },
  'section-title': {
    fontSize: rem(20),
    fontWeight: '600',
    lineHeight: '160%',
  },
  card: {
    borderRadius: rem(24),
    backgroundColor: colors.primary200,
  },
  cardGradient: {
    position: 'absolute',
    top: '0',
    left: '0',
    height: rem(24),
    width: '100%',
    background:
      'linear-gradient(to bottom, rgba(235, 228, 171, 0) 0%, rgba(235, 228, 171, 1) 100%)',
  },
};

export const sizes = {
  appWidth: rem(480),
  appInlinePadding: rem(8),
};

export const theme = createGlobalTheme(':root', {
  colors,
  typographies,
  layouts,
  layerStyles,
  sizes,
  spaces,
});
