import React from 'react'
import { storiesOf } from '@storybook/react'

import { muiTheme } from 'storybook-addon-material-ui'
import { theme } from './theme'
import App from './app'

storiesOf('App', module)
  .addDecorator(muiTheme([theme]))
  .add('Main', () => <App />)
