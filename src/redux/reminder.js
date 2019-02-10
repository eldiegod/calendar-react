import { combineReducers } from 'redux'
import { createSlice, createSelector } from 'redux-starter-kit'
import moment from 'moment'

export const reminder = createSlice({
  slice: 'reminder',
  initialState: {
    allReminders: [
      {
        id: 1,
        date: '2019-02-19',
        time: '16:19',
        description: 'This is first reminder',
        color: '#00F'
      },
      {
        id: 2,
        date: '2019-02-19',
        time: '12:19',
        description: 'This is second reminder',
        color: '#F2F'
      },
      {
        id: 3,
        date: '2019-02-19',
        time: '13:19',
        description: 'This is third reminder',
        color: '#00F'
      },
      {
        id: 4,
        date: '2019-02-19',
        time: '16:19',
        description: 'This is first reminder',
        color: '#00F'
      }
    ]
  },
  reducers: {
    deleteReminderById: (state, action) => {
      return state.allReminders.filter(reminder => reminder.id !== action.payload)
    }
    // addReminder: (state, action) => {
    //   console.log('')
    // }
  }
})

export const getRemindersByDate = createSelector(
  ['reminder.allReminders', { path: 0, argIndex: 1 }],
  (allReminders, date) =>
    allReminders.filter(reminder => {
      // console.log(reminder.date == date)
      // console.log(reminder.date)
      // console.log(date)
      return reminder.date === date
    })
)
