import * as React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router } from 'react-router-dom'
import * as Sentry from '@sentry/browser'

const AppContainer = (
  <Router>
    <App />
  </Router>
)

if (process.env.REACT_APP_SENTRY_DSN) Sentry.init({ dsn: process.env.REACT_APP_SENTRY_DSN })

ReactDOM.render(AppContainer, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
