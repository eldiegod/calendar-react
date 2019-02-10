import React from 'react'
import { createUseConnect } from 'react-use-redux'
import moment from 'moment'

import * as S from './styles'
import Day from './Day'

import { getFirstDayOfTheMonth, getLastDayOfTheMonth, getCurrentFullDate } from 'redux/calendar'
import { getRemindersByDate } from 'redux/reminder'

const mapStateToProps = state => ({
  currentDate: state.calendar.currentDate,
  daysOfTheWeek: state.calendar.daysOfTheWeek,
  firstDayOfTheMonth: getFirstDayOfTheMonth(state),
  lastDayOfTheMonth: getLastDayOfTheMonth(state),
  currentFullDate: getCurrentFullDate(state),
  storeState: state
})
const mapDispatchToProps = dispatch => ({})
const useConnect = createUseConnect(mapStateToProps, mapDispatchToProps)

const Calendar = () => {
  const {
    currentDate,
    daysOfTheWeek,
    firstDayOfTheMonth,
    lastDayOfTheMonth,
    currentFullDate,
    storeState
  } = useConnect()
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
        <S.DayOfTheWeek key={dayOfTheWeek}>{dayOfTheWeek}</S.DayOfTheWeek>
      ))}
      {[...new Array(startOfMonthOffsetDays)].map((undef, index) => (
        <Day disabled key={index} />
      ))}
      {[...new Array(totalDaysInCurrentMonth)].map((undef, index) => (
        <Day
          reminders={getRemindersByDate(storeState, [
            moment(new Date(`${currentDate.year}-${currentDate.month}-${index + 1}`)).format('YYYY-MM-DD')
          ])}
          selected={currentDate.day === index + 1}
          key={startOfMonthOffsetDays + index}
          day={index + 1}
        />
      ))}
      {[...new Array(endOfMonthOffsetDays)].map((undef, index) => (
        <Day disabled key={totalDaysInCurrentMonth + index} />
      ))}
    </S.Grid>
  )
}

export default Calendar
