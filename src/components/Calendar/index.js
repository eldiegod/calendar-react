import React from 'react'
import { createUseConnect } from 'react-use-redux'
import moment from 'moment'

import * as S from './styles'
import Day from './Day'

import { getFirstDayOfTheMonth, getLastDayOfTheMonth, getCurrentFullDate } from 'redux/selectors'

const useConnect = createUseConnect(state => ({
  currentDate: state.currentDate,
  daysOfTheWeek: state.daysOfTheWeek,
  firstDayOfTheMonth: getFirstDayOfTheMonth(state),
  lastDayOfTheMonth: getLastDayOfTheMonth(state),
  currentFullDate: getCurrentFullDate(state)
}))

const getDaysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate()
}

const Calendar = () => {
  const { currentDate, daysOfTheWeek, firstDayOfTheMonth, lastDayOfTheMonth, currentFullDate } = useConnect()
  const totalDaysInCurrentMonth = new Date(currentDate.year, currentDate.month, 0).getDate()
  const startOfMonthOffsetDays = daysOfTheWeek.indexOf(firstDayOfTheMonth)
  const endOfMonthOffsetDays = daysOfTheWeek.length - 1 - daysOfTheWeek.indexOf(lastDayOfTheMonth)
  // console.log(startOfMonthOffsetDays)
  // console.log(firstDayOfTheMonth)
  // console.log(lastDayOfTheMonth)
  // console.log(endOfMonthOffsetDays)
  // console.log(totalDaysInCurrentMonth)
  // console.log(state)
  return (
    <S.Grid>
      <S.Header>{moment(currentFullDate).format('YYYY MMMM')}</S.Header>
      {daysOfTheWeek.map(dayOfTheWeek => (
        <S.DayOfTheWeek>{dayOfTheWeek}</S.DayOfTheWeek>
      ))}
      {[...new Array(startOfMonthOffsetDays)].map((undef, index) => (
        <Day disabled key={index} />
      ))}
      {[...new Array(totalDaysInCurrentMonth)].map((undef, index) => (
        <Day selected={currentDate.day === index + 1} key={index} day={index + 1} />
      ))}
      {[...new Array(endOfMonthOffsetDays)].map((undef, index) => (
        <Day disabled key={index} />
      ))}
    </S.Grid>
  )
}

export default Calendar
