import { style } from '@vanilla-extract/css';

import { rem } from '@/styles/pxto';
import { theme } from '@/styles/theme.css';

// date
export const dateGrid = style({
  display: 'grid',
  width: '100%',
  gridTemplateColumns: 'repeat(7, calc(100% / 7))',
  paddingInline: rem(12),
  marginBlock: rem(16),
});

export const dateItem = style({
  ...theme.layouts.columnCenterX,
  padding: rem(8),
  gap: rem(8),
});

export const dataItemPressed = style({
  border: `${rem(1)} solid ${theme.colors.gray100}`,
  borderRadius: rem(16),
  boxShadow: `0 ${rem(4)} ${rem(24)} 0px rgba(0, 0, 0, 0.10)`,
  backgroundColor: theme.colors.white,
});

export const dateText = style({
  color: theme.colors.gray950,
  fontSize: rem(12),
  lineHeight: '160%',
});

export const dateCircle = style({
  width: rem(32),
  height: rem(32),
  borderRadius: '50%',
  backgroundColor: theme.colors.gray100,
});
