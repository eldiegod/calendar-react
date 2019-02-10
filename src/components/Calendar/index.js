import React from 'react'
import { createUseConnect } from 'react-use-redux'
import moment from 'moment'

import * as S from './styles'
import Day from './Day'

import { getFirstDayOfTheMonth, getLastDayOfTheMonth, getCurrentFullDate, calendar } from 'redux/calendar'
import { getRemindersByDate } from 'redux/reminder'

const mapStateToProps = state => ({
  currentDate: state.calendar.currentDate,
  daysOfTheWeek: state.calendar.daysOfTheWeek,
  firstDayOfTheMonth: getFirstDayOfTheMonth(state),
  lastDayOfTheMonth: getLastDayOfTheMonth(state),
  currentFullDate: getCurrentFullDate(state),
  getRemindersByDate: date => getRemindersByDate(state, [date])
})
const mapDispatchToProps = dispatch => ({
  setCurrentDate: date => dispatch(calendar.actions.setCurrentDate(date)),
  incrementMonth: () => dispatch(calendar.actions.incrementMonth()),
  decreaseMonth: () => dispatch(calendar.actions.decreaseMonth())
})
const useConnect = createUseConnect(mapStateToProps, mapDispatchToProps)

const Calendar = () => {
  const {
    currentDate,
    daysOfTheWeek,
    firstDayOfTheMonth,
    lastDayOfTheMonth,
    currentFullDate,
    getRemindersByDate,
    setCurrentDate,
    decreaseMonth,
    incrementMonth
  } = useConnect()
  // TODO: move local functions to redux
  const totalDaysInCurrentMonth = new Date(currentDate.year, currentDate.month, 0).getDate()
  const startOfMonthOffsetDays = daysOfTheWeek.indexOf(firstDayOfTheMonth)
  const endOfMonthOffsetDays = daysOfTheWeek.length - 1 - daysOfTheWeek.indexOf(lastDayOfTheMonth)

  return (
    <S.Grid>
      <S.Header>
        <S.ChangeMonthButton onClick={decreaseMonth}>←</S.ChangeMonthButton>
        {moment(currentFullDate).format('YYYY MMMM')}
        <S.ChangeMonthButton onClick={incrementMonth}>→</S.ChangeMonthButton>
      </S.Header>
      {daysOfTheWeek.map(dayOfTheWeek => (
        <S.DayOfTheWeek key={dayOfTheWeek}>{dayOfTheWeek}</S.DayOfTheWeek>
      ))}
      {[...new Array(startOfMonthOffsetDays)].map((undef, index) => (
        <Day disabled key={index} />
      ))}
      {[...new Array(totalDaysInCurrentMonth)].map((undef, index) => {
        let day = index + 1
        return (
          <Day
            onClick={() => {
              setCurrentDate({ day })
            }}
            reminders={getRemindersByDate(
              moment(new Date(`${currentDate.year}-${currentDate.month}-${day}`)).format('YYYY-MM-DD')
            )}
            selected={currentDate.day === day}
            key={startOfMonthOffsetDays + day}
            day={day}
          />
        )
      })}
      {[...new Array(endOfMonthOffsetDays)].map((undef, index) => (
        <Day disabled key={totalDaysInCurrentMonth + startOfMonthOffsetDays + index + 1} />
      ))}
    </S.Grid>
  )
}

export default Calendar
