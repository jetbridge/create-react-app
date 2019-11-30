import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../page/Home'

interface IRoutesProps {}

const Routes = (props: IRoutesProps) => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  )
}

export default Routes
