import * as React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { RenderFunction } from '@storybook/react'
import { theme, primaryFont } from '.'
import useGlobalCSS from './globalCSS'

const withTheme = (story: RenderFunction) =>
  React.createElement(() => {
    useGlobalCSS()

    return (
      <MuiThemeProvider theme={theme}>
        <link href={`https://fonts.googleapis.com/css?family=${primaryFont}:400,500&display=swap`} rel="stylesheet" />
        {story()}
      </MuiThemeProvider>
    )
  })

export default withTheme
