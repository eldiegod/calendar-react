import styled, { css } from 'styled-components'
import { ifProp, prop } from 'styled-tools'

export const Box = styled.div`
  cursor: pointer;
  padding: 10px;
  border: solid;
  background-color: ${ifProp('selected', 'white')};
  ${ifProp(
    'disabled',
    css`
      background-color: #999;
      pointer-events: none;
    `
  )};
  &:hover {
    background-color: white;
  }
`

export const Reminders = styled.div`
  padding-top: 10px;
`

export const Reminder = styled.div`
  font-size: 0.75rem;
  color: white;
  background-color: ${prop('color', 'magenta')};
  /* margin-top: 5px; */
  padding: 5px;
  /* text-align: right; */
`
