import React, { useState } from 'react'
import { createUseConnect } from 'react-use-redux'
import moment from 'moment'

import * as S from './styles'
import { getCurrentFullDate } from 'redux/calendar'
import { reminderActions } from 'redux/reminder'

const mapStateToProps = state => ({
  currentDate: state.calendar.currentDate,
  currentFullDate: getCurrentFullDate(state)
})
const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    addReminder: reminder => dispatch(reminderActions.addReminder(reminder)),
    deleteReminderById: id => dispatch(reminderActions.deleteReminderById(id))
  }
}
const useConnect = createUseConnect(mapStateToProps, mapDispatchToProps)

const Sidebar = () => {
  const { currentDate, currentFullDate, addReminder, deleteReminderById } = useConnect()
  const [date, setDate] = useState(moment(currentFullDate).format('YYYY-MM-DD'))
  const [time, setTime] = useState(moment().format('hh:mm'))
  const [color, setColor] = useState('#ff40ff')
  const [description, setDescription] = useState('Add a description...')
  return (
    <S.Sidebar>
      <S.DateTitle>{moment(currentFullDate).format('MMM DD')} Reminders</S.DateTitle>
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
      <S.SaveReminderInput
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
      </S.SaveReminderInput>
    </S.Sidebar>
  )
}

export default Sidebar
