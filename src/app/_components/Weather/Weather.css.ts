import { style } from '@vanilla-extract/css';

import { rem } from '@/styles/pxto';
import { theme } from '@/styles/theme.css';

export const container = style({
  ...theme.layouts.center,
  paddingBlock: rem(7),
  paddingInline: rem(12),
  border: `${rem(1)} solid ${theme.colors.gray200}`,
  borderRadius: rem(14),
  gap: rem(8),
});

export const icon = style({
  width: rem(16),
  height: rem(16),
  userSelect: 'none',
});

export const text = style({
  color: theme.colors.gray950,
  fontSize: rem(12),
  fontWeight: '600',
  lineHeight: '150%',
});
