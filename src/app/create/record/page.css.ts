import { style } from '@vanilla-extract/css';

import { rem } from '@/styles/pxto';
import { theme } from '@/styles/theme.css';

export const controller = style({
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  backgroundColor: theme.colors.perano950,
});

export const controllerInner = style({
  ...theme.layouts.columnCenterX,
  width: '100%',
  maxWidth: theme.sizes.appWidth,
  paddingTop: rem(58),
  paddingBottom: `calc(${rem(64)} + env(safe-area-inset-bottom))`,
  marginInline: 'auto',
});
