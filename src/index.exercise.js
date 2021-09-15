import {loadDevTools} from './dev-tools/load'
import './bootstrap'
import * as React from 'react'
import ReactDOM from 'react-dom'
import {App} from './app'
import {ReactQueryConfigProvider} from 'react-query'

const confiqQuries = {
  queries: {
    retry(failureCount, error) {
      if (error === '404') return false
      else if (failureCount < 2) return true
      else return false
    },
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
  },
}

loadDevTools(() => {
  ReactDOM.render(
    <ReactQueryConfigProvider config={confiqQuries}>
      <App />
    </ReactQueryConfigProvider>,
    document.getElementById('root'),
  )
})
