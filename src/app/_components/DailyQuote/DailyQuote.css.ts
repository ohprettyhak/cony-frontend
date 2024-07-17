import { style } from '@vanilla-extract/css';

import { rem } from '@/styles/pxto';
import { theme } from '@/styles/theme.css';

export const headContainer = style({
  ...theme.layouts.centerY,
  paddingInline: rem(24),
  color: theme.colors.gray950,
  fontSize: rem(14),
  fontWeight: 600,
  lineHeight: '160%',
  gap: theme.spaces.md,
});

export const quote = style({
  paddingInline: rem(24),
  marginTop: rem(24),
  color: theme.colors.gray950,
  fontSize: rem(20),
  fontWeight: '600',
  lineHeight: '160%',
});
