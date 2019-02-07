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
  todos: [
    {
      text: 'Eat food',
      completed: true
    },
    {
      text: 'Exercise',
      completed: false
    }
  ],
  visibilityFilter: 'SHOW_COMPLETED'
}

export default configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState
})
