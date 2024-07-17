import { globalStyle, style } from '@vanilla-extract/css';

import { rem } from '@/styles/pxto';
import { theme } from '@/styles/theme.css';

// category filter
export const categoryList = style({
  ...theme.layouts.centerY,
  marginInline: rem(24),
  marginTop: rem(24),
  listStyle: 'none',
  gap: rem(8),
  userSelect: 'none',
});

export const categoryItem = style({
  ...theme.layouts.center,
  color: theme.colors.gray950,
  cursor: 'pointer',
  borderRadius: rem(32),
  backgroundColor: theme.colors.gray100,
  transition: 'background-color 0.3s',
});

globalStyle(`${categoryItem} > a, button`, {
  padding: rem(12),
  fontSize: rem(16),
  fontWeight: 600,
  lineHeight: '160%',
});

export const categoryItemPressed = style({
  color: theme.colors.white,
  backgroundColor: theme.colors.gray950,
});

// questions
export const questionList = style({
  ...theme.layouts.column,
  marginTop: rem(16),
  gap: rem(8),
});

export const questionCardText = style({
  paddingInline: rem(24),
  color: theme.colors.primary950,
  fontSize: rem(18),
  fontWeight: 600,
  lineHeight: '160%',
});
