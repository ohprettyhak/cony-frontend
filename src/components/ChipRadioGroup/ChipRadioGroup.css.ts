import { style } from '@vanilla-extract/css';

import { rem } from '@/styles/pxto';
import { theme } from '@/styles/theme.css';

export const list = style({
  ...theme.layouts.centerY,
  listStyle: 'none',
  gap: rem(8),
  userSelect: 'none',
});

export const item = style({
  ...theme.layouts.center,
  padding: rem(12),
  fontSize: rem(16),
  fontWeight: 600,
  lineHeight: '160%',
  cursor: 'pointer',
  borderRadius: rem(32),
  transition: 'background-color 0.3s',
});
