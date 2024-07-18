import { style } from '@vanilla-extract/css';

import { rem } from '@/styles/pxto';
import { theme } from '@/styles/theme.css';

// status
export const status = style({
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: `calc(${rem(282)} - ${rem(28)})`,
  width: '100%',
  borderBottomLeftRadius: rem(28),
  borderBottomRightRadius: rem(28),
  background:
    'linear-gradient(0deg, #E5ECFA 56%, rgba(255, 255, 255, 0.8) 80%, #FFFFFF 90%)',
  zIndex: 1,
});

export const statusInner = style({
  ...theme.layouts.center,
  width: '100%',
  height: '100%',
  maxWidth: theme.sizes.appWidth,
  marginInline: 'auto',
});

export const recordStatus = style({
  ...theme.layouts.center,
  minHeight: rem(42),
  paddingInline: theme.spaces.md,
  color: theme.colors.perano50,
  fontSize: rem(16),
  fontWeight: 600,
  lineHeight: '160%',
  borderRadius: rem(32),
  backgroundColor: theme.colors.perano950,
});

export const recordTitle = style({
  marginTop: theme.spaces.xxxl,
  marginInline: theme.spaces.xxxl,
  color: theme.colors.gray950,
  fontSize: rem(20),
  fontWeight: 600,
  lineHeight: '160%',
  textAlign: 'center',
  wordBreak: 'keep-all',
});

export const recordText = style({
  marginTop: rem(48),
  marginInline: rem(32),
  minHeight: rem(88),
  color: theme.colors.gray800,
  fontSize: rem(15),
  lineHeight: '160%',
  textAlign: 'center',
});

// controller
export const controller = style({
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  minHeight: rem(282),
  backgroundColor: theme.colors.perano950,
});

export const controllerInner = style({
  ...theme.layouts.columnCenterX,
  width: '100%',
  maxWidth: theme.sizes.appWidth,
  marginInline: 'auto',
  paddingTop: rem(58),
  paddingBottom: `calc(${rem(32)} + env(safe-area-inset-bottom))`,
});

export const controllerText = style({
  color: theme.colors.perano50,
  fontSize: rem(15),
  fontWeight: 600,
  lineHeight: '160%',
});

export const categoryContainer = style({
  marginTop: theme.spaces.xl,
  marginInline: theme.spaces.lg,
  minHeight: rem(49.59),
});

export const nextStepIcon = style({
  padding: rem(17),
  color: theme.colors.perano50,
  borderRadius: rem(26),
  backgroundColor: '#30325B',
});

export const recordControlIcon = style({
  padding: rem(17),
  color: theme.colors.perano950,
  borderRadius: rem(26),
  backgroundColor: theme.colors.perano50,
});
