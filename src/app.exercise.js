/** @jsx jsx */
import {jsx} from '@emotion/core'

import {BrowserRouter as Router} from 'react-router-dom'
import {UnauthenticatedApp} from './unauthenticated-app'
import {AuthenticatedApp} from './authenticated-app'
import {useAuth} from 'context/auth-context'

function App() {
  const {user} = useAuth()

  return user ? (
    <Router>
      <AuthenticatedApp />
    </Router>
  ) : (
    <UnauthenticatedApp />
  )
}

export {App}
