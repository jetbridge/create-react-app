import * as React from 'react'
import { MuiThemeProvider } from '@material-ui/core'
import { theme } from './theme'

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <h3>New JetBridge App!</h3>
        <p>Enjoy!</p>
      </div>
    </MuiThemeProvider>
  )
}

export default App
