import { globalStyle, style } from '@vanilla-extract/css';

import { rem } from '@/styles/pxto';
import { theme } from '@/styles/theme.css';

export const coverImageContainer = style({
  position: 'relative',
  width: '100%',
  height: 0,
  paddingBottom: '71.42%',
  userSelect: 'none',
});

export const coverTopGradient = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: rem(96),
  background:
    'linear-gradient(0deg, rgba(243, 240, 206, 0) 0%, rgba(243, 240, 206, 0.05) 5%, rgba(243, 240, 206, 0.1) 10%, rgba(243, 240, 206, 0.15) 15%, rgba(243, 240, 206, 0.2) 20%, rgba(243, 240, 206, 0.25) 25%, rgba(243, 240, 206, 0.3) 30%, rgba(243, 240, 206, 0.35) 35%, rgba(243, 240, 206, 0.4) 40%, rgba(243, 240, 206, 0.45) 45%, rgba(243, 240, 206, 0.5) 50%, rgba(243, 240, 206, 0.55) 55%, rgba(243, 240, 206, 0.6) 60%, rgba(243, 240, 206, 0.65) 65%, rgba(243, 240, 206, 0.7) 70%, rgba(243, 240, 206, 0.75) 75%, rgba(243, 240, 206, 0.8) 80%, rgba(243, 240, 206, 0.85) 85%, rgba(243, 240, 206, 0.9) 90%, rgba(243, 240, 206, 0.95) 95%, rgba(243, 240, 206, 1) 100%)',
});

export const coverBottomGradient = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: rem(52),
  background:
    'linear-gradient(180deg, rgba(243, 240, 206, 0) 0%, rgba(243, 240, 206, 0.05) 5%, rgba(243, 240, 206, 0.1) 10%, rgba(243, 240, 206, 0.15) 15%, rgba(243, 240, 206, 0.2) 20%, rgba(243, 240, 206, 0.25) 25%, rgba(243, 240, 206, 0.3) 30%, rgba(243, 240, 206, 0.35) 35%, rgba(243, 240, 206, 0.4) 40%, rgba(243, 240, 206, 0.45) 45%, rgba(243, 240, 206, 0.5) 50%, rgba(243, 240, 206, 0.55) 55%, rgba(243, 240, 206, 0.6) 60%, rgba(243, 240, 206, 0.65) 65%, rgba(243, 240, 206, 0.7) 70%, rgba(243, 240, 206, 0.75) 75%, rgba(243, 240, 206, 0.8) 80%, rgba(243, 240, 206, 0.85) 85%, rgba(243, 240, 206, 0.9) 90%, rgba(243, 240, 206, 0.95) 95%, rgba(243, 240, 206, 1) 100%)',
});

export const coverButtonContainer = style({
  ...theme.layouts.centerX,
  position: 'absolute',
  top: rem(20),
  left: 0,
  width: '100%',
  color: '#4F3722',
  gap: theme.spaces.xs,
});

export const coverButton = style({
  ...theme.layouts.center,
  padding: rem(4),
  border: `${rem(2)} solid #4F3722`,
  borderRadius: rem(24),
});

export const diaryTitle = style({
  color: theme.colors.gray950,
  fontSize: rem(24),
  fontWeight: 600,
  lineHeight: '160%',
  textAlign: 'center',
});

export const diaryContent = style({
  paddingInline: rem(24),
  color: theme.colors.gray950,
  fontSize: rem(14),
  lineHeight: '200%',
});

globalStyle(`${diaryContent} .milestone`, {
  paddingInline: rem(4),
  color: theme.colors.white,
  fontWeight: 600,
  borderRadius: rem(4),
  backgroundColor: '#4F3722',
});

globalStyle(`${diaryContent} .suggest`, {
  paddingInline: rem(4),
  color: theme.colors.white,
  fontWeight: 600,
  borderRadius: rem(4),
  backgroundColor: theme.colors.tealblue900,
});
