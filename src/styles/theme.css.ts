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
  primary300: '#FF5A5F',
  primary400: '#FF5A5F',
  primary500: '#FF5A5F',
  primary600: '#FF5A5F',
  primary700: '#FF5A5F',
  primary800: '#6F4D24',
  primary900: '#5F4124',
  primary950: '#372111',

  gray50: '#F7F7F8',
  gray100: '#EFEEF0',
  gray200: '#DAD9DE',
  gray300: '#B9B7C2',
  gray400: '#F7F7F7',
  gray500: '#F7F7F7',
  gray600: '#F7F7F7',
  gray700: '#F7F7F7',
  gray800: '#F7F7F7',
  gray900: '#F7F7F7',
  gray950: '#1C1B1F',
};

export const typographies = {};

export const layerStyles = {
  title: {
    marginTop: rem(72),
    marginLeft: rem(36),
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
  layerStyles,
  sizes,
});
