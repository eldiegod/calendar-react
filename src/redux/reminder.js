import { combineReducers } from 'redux'
import { createSlice, createSelector } from 'redux-starter-kit'
import moment from 'moment'

const initialState = {
  allReminders: [
    {
      id: 1,
      date: '2019-02-19',
      time: '10:19',
      description: 'This is first reminder',
      color: '#5F000F'
    },
    {
      id: 2,
      date: '2019-02-19',
      time: '12:19',
      description: 'This is second reminder',
      color: '#250F2F'
    },
    {
      id: 3,
      date: '2019-02-19',
      time: '13:19',
      description: 'This is third reminder',
      color: '#5F000F'
    }
  ]
}

export const reminder = createSlice({
  slice: 'reminder',
  initialState,
  reducers: {
    // also sorts reminders by time
    addReminder: (state, action) => {
      const parseTime = time => {
        return parseInt(time.replace(':', ''))
      }
      state.allReminders.push({ ...action.payload, id: Math.random() })
      state.allReminders.sort((a, b) => {
        return parseTime(a.time) - parseTime(b.time)
      })
    },
    deleteReminderById: (state, action) => {
      state.allReminders = state.allReminders.filter(reminder => reminder.id !== action.payload)
    }
  }
})
// selectors
export const getRemindersByDate = createSelector(
  ['reminder.allReminders', { path: 0, argIndex: 1 }],
  (allReminders, date) =>
    allReminders.filter(reminder => {
      return reminder.date === date
    })
)
