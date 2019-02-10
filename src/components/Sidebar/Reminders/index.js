import React from 'react'

import * as S from './styles'

const Reminders = ({ reminders, onDeleteReminder, onEditReminder }) => {
  return (
    <S.Reminders>
      {reminders.map(reminder => (
        <S.Reminder key={reminder.id} color={reminder.color}>
          <S.Text>
            {reminder.time} - {reminder.description}
          </S.Text>
          <S.Actions>
            <S.TextButton onClick={() => onEditReminder(reminder)}>edit</S.TextButton>
            <S.TextButton onClick={() => onDeleteReminder(reminder.id)}>delete</S.TextButton>
          </S.Actions>
        </S.Reminder>
      ))}
    </S.Reminders>
  )
}

export default Reminders
