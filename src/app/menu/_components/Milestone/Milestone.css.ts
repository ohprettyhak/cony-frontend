import { style } from '@vanilla-extract/css';

import { rem } from '@/styles/pxto';
import { theme } from '@/styles/theme.css';

export const title = style({
  paddingInline: theme.spaces.lg,
  color: theme.colors.gray950,
  fontSize: rem(14),
  fontWeight: 600,
  lineHeight: '160%',
});

export const list = style({
  ...theme.layouts.column,
  marginTop: theme.spaces.lg,
  paddingLeft: theme.spaces.lg,
  gap: rem(12),
  listStyle: 'none',
});

export const item = style({
  ...theme.layouts.centerY,
  color: theme.colors.gray950,
  fontSize: rem(14),
  fontWeight: 600,
  lineHeight: '160%',
  gap: theme.spaces.sm,
  transition: 'opacity 0.3s',
});

export const itemDivider = style({
  width: '100%',
  height: rem(1),
  opacity: 0.2,
  border: 0,
  backgroundColor: theme.colors.primary950,
});

export const createButton = style({
  ...theme.layouts.center,
  paddingBlock: rem(12),
  marginTop: theme.spaces.lg,
  marginInline: theme.spaces.lg,
  color: theme.colors.primary950,
  fontSize: rem(12),
  fontWeight: 600,
  lineHeight: '160%',
  borderRadius: rem(8),
  backgroundColor: theme.colors.primary300,
});
