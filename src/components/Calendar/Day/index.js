import React from 'react'

import * as S from './styles'

const Day = ({ day, disabled, selected, reminders = [] }) => {
  console.log(reminders)
  return (
    <S.Box selected={selected} disabled={disabled}>
      {day}
      <S.Reminders>
        {reminders.slice(0, 3).map(reminder => (
          <S.Reminder color={reminder.color}>{`${reminder.time} - ${reminder.description}`}</S.Reminder>
        ))}
      </S.Reminders>
    </S.Box>
  )
}

export default Day
