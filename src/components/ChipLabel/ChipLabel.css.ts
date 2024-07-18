import { style } from '@vanilla-extract/css';

import { rem } from '@/styles/pxto';
import { theme } from '@/styles/theme.css';

export const label = style({
  ...theme.layouts.center,
  width: 'fit-content',
  paddingBlock: theme.spaces.sm,
  paddingInline: rem(12),
  fontSize: rem(12),
  fontWeight: 600,
  lineHeight: '160%',
  gap: rem(12),
  borderRadius: rem(36),
  userSelect: 'none',
});
