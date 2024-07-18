import { style } from '@vanilla-extract/css';

import { rem } from '@/styles/pxto';
import { theme } from '@/styles/theme.css';

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
});

export const main = style({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  width: '100%',
  maxWidth: theme.sizes.appWidth,
  marginInline: 'auto',
  backgroundColor: '#F5F5F5',
});

export const mainBottomPadding = style({
  paddingBottom: `calc(${rem(104)} + env(safe-area-inset-bottom))`,
});
