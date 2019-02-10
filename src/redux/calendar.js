import { createSlice, createSelector } from 'redux-starter-kit'
import moment from 'moment'

const initialState = {
  currentDate: {
    month: parseInt(moment().format('MM')),
    day: parseInt(moment().format('DD')),
    year: parseInt(moment().format('YYYY'))
  },
  daysOfTheWeek: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
}

export const calendar = createSlice({
  slice: 'calendar',
  initialState,
  reducers: {
    setCurrentDate: (state, action) => {
      state.currentDate = { ...state.currentDate, ...action.payload }
    },
    incrementMonth: (state, action) => {
      //months indexed at 0 so need add +1 to decrease the month
      const updatedDate = moment(getCurrentFullDate({ calendar: state })).month(state.currentDate.month)
      state.currentDate.day = 1
      state.currentDate.month = updatedDate.month() + 1 //months indexed at 0 so add +1
      state.currentDate.year = updatedDate.year()
    },
    decreaseMonth: (state, action) => {
      //months indexed at 0 so need take -2 to decrease the month
      const updatedDate = moment(getCurrentFullDate({ calendar: state })).month(state.currentDate.month - 2)
      state.currentDate.day = 1
      state.currentDate.month = updatedDate.month() + 1 //months indexed at 0 so add +1
      state.currentDate.year = updatedDate.year()
    }
  }
})

// selectors
export const getCurrentFullDate = createSelector(
  ['calendar.currentDate'],
  ({ day, month, year }) => moment(new Date(`${year}-${month}-${day}`))
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
export const getDaysInCurrentMonth = createSelector(
  [getCurrentFullDate],
  currentFullDate => moment(currentFullDate).daysInMonth()
)
export const getStartOfMonthOffsetDays = createSelector(
  [getFirstDayOfTheMonth, 'calendar.daysOfTheWeek'],
  (firstDayOfTheMonth, daysOfTheWeek) => daysOfTheWeek.indexOf(firstDayOfTheMonth)
)
export const getEndOfMonthOffsetDays = createSelector(
  [getLastDayOfTheMonth, 'calendar.daysOfTheWeek'],
  (lastDayOfTheMonth, daysOfTheWeek) => daysOfTheWeek.length - 1 - daysOfTheWeek.indexOf(lastDayOfTheMonth)
)
