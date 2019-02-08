import { createSelector } from 'redux-starter-kit'
import moment from 'moment'

export const getCurrentFullDate = createSelector(
  ['currentDate.day', 'currentDate.month', 'currentDate.year'],
  (day, month, year) => new Date(`${year}-${month}-${day}`)
)

export const getFirstDayOfTheMonth = createSelector(
  ['currentDate.month', 'currentDate.year'],
  (month, year) =>
    moment(new Date(`${year}-${month}-1`))
      .format('dddd')
      .toLowerCase()
)

export const getLastDayOfTheMonth = createSelector(
  ['currentDate.month', 'currentDate.year'],
  (month, year) =>
    moment(new Date(`${year}-${month}-${1}`))
      .endOf('month')
      .format('dddd')
      .toLowerCase()
)

// console.log(getFirstDayOfTheMonth(preloadedState))
