import { style } from '@vanilla-extract/css';

import { rem } from '@/styles/pxto';
import { theme } from '@/styles/theme.css';

export const cardList = style({
  ...theme.layouts.column,
  marginTop: theme.spaces.sm,
  marginInline: theme.spaces.sm,
  gap: theme.spaces.sm,
});

export const cardContents = style({
  marginTop: rem(12),
  paddingInline: rem(24),
  color: theme.colors.gray950,
  fontSize: rem(14),
  lineHeight: '160%',
});

export const cardLinkDivider = style({
  width: '100%',
  height: rem(1),
  marginBlock: rem(24),
  border: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
});
