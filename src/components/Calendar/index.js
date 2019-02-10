import React from 'react'
import { createUseConnect } from 'react-use-redux'
import moment from 'moment'

import * as S from './styles'
import Day from './Day'

import {
  getCurrentFullDate,
  getDaysInCurrentMonth,
  getStartOfMonthOffsetDays,
  getEndOfMonthOffsetDays,
  calendar
} from 'redux/calendar'
import { getRemindersByDate } from 'redux/reminder'

const mapStateToProps = state => ({
  currentDate: state.calendar.currentDate,
  daysOfTheWeek: state.calendar.daysOfTheWeek,
  daysInCurrentMonth: getDaysInCurrentMonth(state),
  currentFullDate: getCurrentFullDate(state),
  startOfMonthOffsetDays: getStartOfMonthOffsetDays(state),
  endOfMonthOffsetDays: getEndOfMonthOffsetDays(state),
  getRemindersByDate: date =>
    getRemindersByDate(state, [
      moment(new Date(`${date.year}-${date.month}-${date.day}`)).format('YYYY-MM-DD')
    ])
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
    daysInCurrentMonth,
    startOfMonthOffsetDays,
    endOfMonthOffsetDays,
    currentFullDate,
    getRemindersByDate,
    setCurrentDate,
    decreaseMonth,
    incrementMonth
  } = useConnect()

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
      {[...new Array(daysInCurrentMonth)].map((undef, index) => {
        let day = index + 1
        return (
          <Day
            onClick={() => {
              setCurrentDate({ ...currentDate, day })
            }}
            reminders={getRemindersByDate({ ...currentDate, day })}
            selected={currentDate.day === day}
            key={startOfMonthOffsetDays + day}
            day={day}
          />
        )
      })}
      {[...new Array(endOfMonthOffsetDays)].map((undef, index) => (
        <Day disabled key={daysInCurrentMonth + startOfMonthOffsetDays + index + 1} />
      ))}
    </S.Grid>
  )
}

export default Calendar
