import React from 'react'
import { storiesOf } from '@storybook/react'
import { muiTheme } from 'storybook-addon-material-ui'
import { theme } from '../../theme'
import Home from '.'

storiesOf('Home', module)
  .addDecorator(muiTheme([theme]))
  .add('Initial', () => <Home />)
