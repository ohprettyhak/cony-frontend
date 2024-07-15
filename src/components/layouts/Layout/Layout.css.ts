import { style } from '@vanilla-extract/css';

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
  paddingInline: theme.sizes.appInlinePadding,
  backgroundColor: '#F5F5F5',
});
