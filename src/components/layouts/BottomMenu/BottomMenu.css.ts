import { style } from '@vanilla-extract/css';

import { rem } from '@/styles/pxto';
import { theme } from '@/styles/theme.css';

export const root = style({
  position: 'fixed',
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: rem(104),
});

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  maxWidth: theme.sizes.appWidth,
  borderRadius: `${rem(20)} ${rem(20)} 0 0`,
  background: 'rgba(255, 255, 255, 0.30)',
  backdropFilter: `blur(${rem(50)})`,
  willChange: 'backdrop-filter',
  transform: 'translateZ(0)',
});

export const menu = style({
  display: 'flex',
  gap: rem(8),
  height: 'fit-content',
  paddingTop: rem(8),
});

export const menuItem = style({
  alignItems: 'center',
  backgroundColor: 'rgba(28, 27, 31, 0.03)',
  borderRadius: rem(16),
  color: theme.colors.gray950,
  display: 'flex',
  height: rem(48),
  userSelect: 'none',
});

export const menuItemActive = style({
  backgroundColor: theme.colors.gray950,
  color: theme.colors.white,
});

export const menuLink = style({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  padding: rem(12),
});

export const menuIcon = style({
  height: rem(24),
  width: rem(24),
});

export const menuName = style({
  alignItems: 'center',
  display: 'flex',
  fontWeight: 600,
  height: 'fit-content',
  marginLeft: rem(12),
  overflowX: 'hidden',
  whiteSpace: 'nowrap',
});
