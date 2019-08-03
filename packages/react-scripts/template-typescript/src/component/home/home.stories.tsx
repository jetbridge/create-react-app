import React from 'react'
import { storiesOf } from '@storybook/react'
import Home from '.'
import themeDecorator from '../../theme/storybookThemeDecorator'

storiesOf('Home', module)
  .addDecorator(themeDecorator)
  .add('Initial', () => <Home />)
