import { createMuiTheme } from '@material-ui/core/styles'

// main font to apply to all elements by default
const primaryFontName = 'Montserrat'
const primaryFont = {
  fontFamily: primaryFontName,
  fontStyle: 'normal',
  // fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('${primaryFontName}'),
    local('${primaryFontName}-Regular'),
    url(https://fonts.googleapis.com/css?family=${primaryFontName}:400,500&display=swap) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
}

// our theme
export const theme = createMuiTheme({
  palette: {},
  typography: {
    fontFamily: primaryFontName,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [primaryFont],
      },
    },
  },
})

// extend theme type
declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {}

  // we can extend theme with custom keys here
  interface ThemeOptions {}
}
