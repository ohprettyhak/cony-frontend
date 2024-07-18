import { style } from '@vanilla-extract/css';

import { rem } from '@/styles/pxto';
import { theme } from '@/styles/theme.css';

export const root = style({
  ...theme.layouts.column,
  position: 'relative',
  paddingBlock: rem(24),
  borderRadius: rem(16),
});

// head
export const head = style({
  ...theme.layouts.centerY,
  paddingInline: rem(24),
  color: theme.colors.gray950,
  fontSize: rem(14),
  fontWeight: 600,
  lineHeight: '160%',
});

export const headGap = style({
  gap: theme.spaces.md,
});

export const headTextWithoutIcon = style({
  fontSize: rem(16),
});

// link
export const linkContainer = style({
  ...theme.layouts.rowBetween,
  paddingInline: rem(24),
  gap: rem(24),
});

export const linkTitle = style({
  color: theme.colors.gray50,
  fontSize: rem(14),
  fontWeight: 600,
  lineHeight: '160%',
});

export const linkDescription = style({
  marginTop: rem(12),
  color: theme.colors.gray50,
  fontSize: rem(12),
  lineHeight: '160%',
});

export const linkImageContainer = style({
  position: 'relative',
  width: rem(96),
  height: rem(72),
  borderRadius: rem(8),
  overflow: 'hidden',
});
