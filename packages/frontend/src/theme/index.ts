import { extendTheme, theme as chakraTheme } from '@chakra-ui/react'

import { Typography } from './typography'
import { ColorPallete } from './colors'

const OverrideTheme = {
  ...chakraTheme,
  ...Typography,
  ...ColorPallete,
  styles: {
    ...chakraTheme.styles,
    global: {
      ...chakraTheme.styles.global,
      html:{
        height:"100%"
      },
      body: {
        bg: '#0D1018',
        color: 'white',
        height:"100%"
      },
      "#__next":{
        height:"100%",
        margin:"0",
        width:"100"
      },
      "[data-rk]":{
        height:"100%",
        margin:"0",
        width:"100"
      },
      "[data-rk] ._9pm4ki3":{
        top:0
      }
    },
  },
}

const ArtPlaceTheme = extendTheme(OverrideTheme)
export default ArtPlaceTheme
