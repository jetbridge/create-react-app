import { createMuiTheme } from '@material-ui/core/styles'

// main google font to apply to all elements by default
export const primaryFont = 'Montserrat'

// our theme
export const theme = createMuiTheme({
  palette: {},
  typography: {
    fontFamily: primaryFont,
  },
})

// extend theme type
declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {}

  // we can extend theme with custom keys here
  interface ThemeOptions {}
}
