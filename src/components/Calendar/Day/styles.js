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
  margin-bottom: 5px;
`
export const Reminder = styled.div`
  color: white;
  background-color: ${prop('color', 'magenta')};
  padding: 5px;
  font-size: 0.75rem;
  word-break: break-all;
`
export const SeeMore = styled.div`
  font-size: 0.75rem;
  text-decoration: underline;
`
