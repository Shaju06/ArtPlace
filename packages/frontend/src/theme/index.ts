import { extendTheme, theme as chakraTheme } from '@chakra-ui/react'

import { Typography } from './typography'
import { ColorPallete } from './colors'
import "@fontsource/commissioner"; 
import "@fontsource/inter";
const OverrideTheme = {
  ...chakraTheme,
  ...Typography,
  ...ColorPallete,
  styles: {
    ...chakraTheme.styles,
    global: {
      ...chakraTheme.styles.global,

      body: {
        bg: '#0D1018',
        color: 'white',
        fonts: {
          body: `'Commissioner','Inter'`,
        },

      },
      "[data-rk] ._9pm4ki3": {
        top: 0
      }
    },
  },
}
const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
  "3xl": "2560px",
}
const ArtPlaceTheme = extendTheme({ OverrideTheme, breakpoints })
export default ArtPlaceTheme
