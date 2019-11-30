import React from './node_modules/react'
import { storiesOf } from './node_modules/@storybook/react'
import Home from '.'
import themeDecorator from '../../theme/StorybookThemeDecorator'

storiesOf('Home', module)
  .addDecorator(themeDecorator)
  .add('Initial', () => <Home />)
