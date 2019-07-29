import React from 'react'
import { storiesOf } from '@storybook/react'
import Home from '.'
import { ThemeDecorator } from '../../theme/storybookThemeDecorator'

storiesOf('Home', module)
  .addDecorator(ThemeDecorator)
  .add('Initial', () => <Home />)
