import { createMuiTheme } from '@material-ui/core/styles'

const primaryFont = ['Montserrat', 'sans-serif'].join(',')

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {}
  // allow configuration using `createMuiTheme`

  interface ThemeOptions {}
}

export const theme = createMuiTheme({
  palette: {},
  typography: {
    fontFamily: primaryFont,
  },
})
