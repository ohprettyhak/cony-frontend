import { globalStyle, style, styleVariants } from '@vanilla-extract/css';

import { rem } from '@/styles/pxto';
import { theme } from '@/styles/theme.css';

export const filterContainer = style({
  marginTop: rem(24),
  marginInline: rem(24),
});

export const diaryList = style({
  marginTop: rem(16),
  paddingInline: theme.sizes.appInlinePadding,
  marginBottom: rem(104),
});

export const diaryTextContainer = style({
  ...theme.layouts.column,
  paddingTop: rem(24),
  paddingInline: rem(24),
  gap: rem(4),
});

globalStyle(`${diaryTextContainer} h3`, {
  paddingBottom: rem(4),
  color: theme.colors.primary950,
  fontSize: rem(14),
  fontWeight: 600,
  lineHeight: '160%',
});

globalStyle(`${diaryTextContainer} p`, {
  color: theme.colors.primary800,
  fontSize: rem(14),
  lineHeight: '160%',
});

export const diaryTextContainerPadding = styleVariants({
  small: { paddingBottom: rem(12) },
  large: { paddingBottom: rem(24) },
});
