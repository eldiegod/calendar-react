import React from 'react'
import ReactDOM from 'react-dom'
import { StoreContext } from 'react-use-redux'

import App from './components/App'
import * as serviceWorker from './serviceWorker'
import store from './redux/store'

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
