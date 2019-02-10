import React from 'react'

import * as S from './styles'

const Day = ({ day, disabled, selected, reminders = [], onClick }) => {
  return (
    <S.Box selected={selected} disabled={disabled} onClick={onClick}>
      {day}
      <S.Reminders>
        {reminders.slice(0, 2).map(reminder => (
          <S.Reminder key={reminder.id} color={reminder.color}>{`${reminder.time} - ${
            reminder.description
          }`}</S.Reminder>
        ))}
      </S.Reminders>
      {reminders.length > 2 && <S.SeeMore>Click to see more...</S.SeeMore>}
    </S.Box>
  )
}

export default Day
