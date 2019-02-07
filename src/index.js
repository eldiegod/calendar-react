import React from 'react'
import ReactDOM from 'react-dom'
import { StoreContext } from 'react-use-redux'

import App from './components/App'
import * as serviceWorker from './serviceWorker'
import store from './redux/store'

const render = Component => {
  return ReactDOM.render(
    <StoreContext.Provider value={store}>
      <Component />
    </StoreContext.Provider>,
    document.getElementById('root')
  )
}

render(App)

// Hot reloading
if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default
    render(NextApp)
  })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
