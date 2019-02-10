import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'
import logger from 'redux-logger'

import { reminder } from './reminder'
import { calendar } from './calendar'

const reducer = { reminder: reminder.reducer, calendar: calendar.reducer }

const middleware = [...getDefaultMiddleware(), logger]

const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production'
})

export default store
