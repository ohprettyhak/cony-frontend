import { style } from '@vanilla-extract/css';

import { rem } from '@/styles/pxto';
import { theme } from '@/styles/theme.css';

export const questionList = style({
  ...theme.layouts.column,
  marginTop: theme.spaces.md,
  marginInline: theme.spaces.sm,
  gap: rem(8),
});

export const questionCardText = style({
  paddingInline: rem(24),
  color: theme.colors.primary950,
  fontSize: rem(18),
  fontWeight: 600,
  lineHeight: '160%',
});
