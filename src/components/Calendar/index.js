import React from 'react'

import * as S from './styles'
import Day from './Day'

const Calendar = () => {
  return (
    <S.Grid>
      <S.Header>Month Year</S.Header>
      <S.DayOfTheWeek>Sun</S.DayOfTheWeek>
      <S.DayOfTheWeek>Mon</S.DayOfTheWeek>
      <S.DayOfTheWeek>Tue</S.DayOfTheWeek>
      <S.DayOfTheWeek>Wed</S.DayOfTheWeek>
      <S.DayOfTheWeek>Thu</S.DayOfTheWeek>
      <S.DayOfTheWeek>Fri</S.DayOfTheWeek>
      <S.DayOfTheWeek>Sat</S.DayOfTheWeek>
      {[...new Array(31)].map((undef, index) => (
        <Day day={index + 1} />
      ))}
    </S.Grid>
  )
}

export default Calendar
