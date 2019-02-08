import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'

import logger from 'redux-logger'

// import todosReducer from './todos/todosReducer';
// import visibilityReducer from './visibility/visibilityReducer';

const reducer = {
  // todos: todosReducer,
  // visibility: visibilityReducer
}

const middleware = [...getDefaultMiddleware(), logger]

const preloadedState = {
  reminders: {
    '2019-02-19': {
      time: '16:19',
      description: 'This is first reminder',
      color: '#FF3'
    }
  }
}

export default configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState
})
