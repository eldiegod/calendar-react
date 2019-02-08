import { configureStore, getDefaultMiddleware, createSelector } from 'redux-starter-kit'
import moment from 'moment'

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
    '2019-02-19': [
      {
        time: '16:19',
        description: 'This is first reminder',
        color: '#FF3'
      },
      {
        time: '12:19',
        description: 'This is second reminder',
        color: '#F2F'
      }
    ]
  },
  currentDate: {
    month: parseInt(moment().format('MM')),
    day: parseInt(moment().format('DD')),
    year: parseInt(moment().format('YYYY'))
  },
  daysOfTheWeek: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
}

export default configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState
})
