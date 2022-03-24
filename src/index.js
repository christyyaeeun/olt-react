import React from 'react'
import ReactDOM from 'react-dom'
import '../src/styles/index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import {
  BrowserRouter as Router
} from 'react-router-dom'

import Amplify, { AuthModeStrategyType } from 'aws-amplify'
import awsconfig from './aws-exports'

Amplify.configure({
  ...awsconfig,
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH
  }
})

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)

reportWebVitals()
