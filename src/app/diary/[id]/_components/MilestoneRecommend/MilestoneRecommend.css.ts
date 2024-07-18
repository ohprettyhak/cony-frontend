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
  backgroundColor: '#E4DCA4',
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

export const button = style({
  paddingBlock: rem(8),
  color: '#4F3722',
  fontSize: rem(12),
  fontWeight: 600,
  lineHeight: '160%',
  borderRadius: rem(8),
  backgroundColor: '#D7CF94',
});
