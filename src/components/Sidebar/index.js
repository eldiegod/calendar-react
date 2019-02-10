import React, { useState } from 'react'
import { createUseConnect } from 'react-use-redux'
import moment from 'moment'

import * as S from './styles'
import { getCurrentFullDate } from 'redux/calendar'
import { reminderActions, getRemindersByDate } from 'redux/reminder'

const mapStateToProps = state => ({
  currentDate: state.calendar.currentDate,
  currentFullDate: moment(getCurrentFullDate(state)),
  get currentReminders() {
    return getRemindersByDate(state, [this.currentFullDate.format('YYYY-MM-DD')])
  }
})
const mapDispatchToProps = dispatch => ({
  addReminder: reminder => dispatch(reminderActions.addReminder(reminder)),
  deleteReminderById: id => dispatch(reminderActions.deleteReminderById(id))
})
const useConnect = createUseConnect(mapStateToProps, mapDispatchToProps)

const Sidebar = () => {
  const { currentDate, currentFullDate, currentReminders, addReminder, deleteReminderById } = useConnect()
  const [date, setDate] = useState(currentFullDate.format('YYYY-MM-DD'))
  const [time, setTime] = useState(moment().format('hh:mm'))
  const [color, setColor] = useState('#ff40ff')
  const [description, setDescription] = useState('Add a description...')
  // console.log(currentReminders)
  return (
    <S.Sidebar>
      <S.Title>Add a new reminder 👇 </S.Title>
      <S.DateInput value={date} onChange={e => setDate(e.target.value)} type="date" name="reminder_date" />
      <S.TimeInput value={time} onChange={e => setTime(e.target.value)} type="time" name="reminder_time" />
      <S.DescriptionInput
        value={description}
        onChange={e => setDescription(e.target.value)}
        maxLength="30"
        placeholder="Reminder description"
        type="text"
        name="reminder_description"
      />
      <S.ColorInput
        value={color}
        onChange={e => setColor(e.target.value)}
        type="color"
        name="reminder_color"
      />
      <S.SaveReminderButton
        onClick={() =>
          addReminder({
            date,
            time,
            description,
            color
          })
        }
        type="submit"
        name="save_reminder"
      >
        Save Reminder
      </S.SaveReminderButton>
      <S.Title>Your reminders for {currentFullDate.format('MMMM DD')} </S.Title>
      <S.Reminders>
        {currentReminders.map(reminder => (
          <S.Reminder key={reminder.id} color={reminder.color}>
            {reminder.time} - {reminder.description}
          </S.Reminder>
        ))}
      </S.Reminders>
    </S.Sidebar>
  )
}

export default Sidebar
