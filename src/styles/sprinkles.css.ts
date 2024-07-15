import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { breakpoints } from '@/styles/responsive.css';
import {
  colors,
  spaces,
  layouts,
  fontSizes,
  fontWeights,
  layerStyles,
} from '@/styles/theme.css';

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': `screen and (min-width: ${breakpoints.tablet})` },
    desktop: { '@media': `screen and (min-width: ${breakpoints.desktop})` },
  },
  defaultCondition: 'mobile',
  properties: {
    // layouts
    display: ['none', 'flex', 'block', 'inline'],
    flex: [0, 1],
    flexDirection: ['row', 'column'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between',
    ],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    width: ['fit-content', '100%'],

    paddingTop: spaces,
    paddingBottom: spaces,
    paddingLeft: spaces,
    paddingRight: spaces,

    marginTop: spaces,
    marginBottom: spaces,
    marginLeft: spaces,
    marginRight: spaces,

    layout: {
      center: layouts.center,
      centerX: layouts.centerX,
      centerY: layouts.centerY,
      rowBetween: layouts.rowBetween,
      column: layouts.column,
      columnCenterX: layouts.columnCenterX,
      columnCenterY: layouts.columnCenterY,
    },

    layerStyles: {
      ...layerStyles,
    },

    // typographies
    fontSize: fontSizes,
    fontWeight: fontWeights,
    textDecoration: ['none', 'underline'],

    // spacings
    gap: spaces,

    // colors
    color: colors,
    background: colors,
  },
});

export const sprinkles = createSprinkles(responsiveProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
