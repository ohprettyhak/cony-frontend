import { style } from '@vanilla-extract/css';

import { rem } from '@/styles/pxto';
import { theme } from '@/styles/theme.css';

export const container = style({
  ...theme.layouts.column,
  padding: rem(12),
  marginBlock: rem(12),
  marginBottom: rem(22),
  marginInline: rem(24),
  borderRadius: rem(8),
  backgroundColor: theme.colors.tealblue200,
  gap: theme.spaces.sm,
});

export const titleContainer = style({
  ...theme.layouts.centerY,
  color: '#4F3722',
  fontSize: rem(12),
  fontWeight: 600,
  lineHeight: '160%',
  gap: theme.spaces.sm,
});

export const buttonContainer = style({
  ...theme.layouts.rowBetween,
  gap: theme.spaces.sm,
});

export const button = style({
  ...theme.layouts.center,
  width: '100%',
  paddingBlock: rem(8),
  fontSize: rem(12),
  fontWeight: 600,
  lineHeight: '160%',
  borderRadius: rem(8),
  gap: theme.spaces.sm,
});
