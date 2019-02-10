import { createSlice, createSelector } from 'redux-starter-kit'
import moment from 'moment'

export const calendar = createSlice({
  slice: 'calendar',
  initialState: {
    currentDate: {
      month: parseInt(moment().format('MM')),
      day: parseInt(moment().format('DD')),
      year: parseInt(moment().format('YYYY'))
    },
    daysOfTheWeek: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
  },
  reducers: {
    setCurrentDate: (state, action) => {
      state.currentDate = { ...state.currentDate, ...action.payload }
    },
    incrementMonth: (state, action) => {
      state.currentDate.month = state.currentDate.month >= 12 ? 1 : state.currentDate.month + 1
    },
    decreaseMonth: (state, action) => {
      state.currentDate.month = state.currentDate.month <= 1 ? 12 : state.currentDate.month - 1
    }
  }
})

export const getCurrentFullDate = createSelector(
  ['calendar.currentDate'],
  ({ day, month, year }) => new Date(`${year}-${month}-${day}`)
)

export const getFirstDayOfTheMonth = createSelector(
  ['calendar.currentDate'],
  ({ month, year }) =>
    moment(new Date(`${year}-${month}-1`))
      .format('dddd')
      .toLowerCase()
)

export const getLastDayOfTheMonth = createSelector(
  ['calendar.currentDate'],
  ({ month, year }) =>
    moment(new Date(`${year}-${month}-1`))
      .endOf('month')
      .format('dddd')
      .toLowerCase()
)
