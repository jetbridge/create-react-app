import * as React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { RenderFunction } from '@storybook/react'
import { theme, primaryFont } from '.'

export const ThemeDecorator = (story: RenderFunction) => (
  <MuiThemeProvider theme={theme}>
    <link href={`https://fonts.googleapis.com/css?family=${primaryFont}:400,500&display=swap`} rel="stylesheet" />
    {story()}
  </MuiThemeProvider>
)
