import styled from 'styled-components'
import { prop } from 'styled-tools'

export const Reminders = styled.div`
  margin: 15px 10% 10% 10%;
  color: white;
  text-align: left;
  & > *:first-child {
    padding-top: 10px;
  }
  & > *:last-child {
    padding-bottom: 15px;
  }
`
export const Reminder = styled.div`
  font-size: 0.75rem;
  background-color: ${prop('color', 'magenta')};
  padding: 12.5px;
  &:hover {
    border: 1px solid white;
  }
`
export const Text = styled.div`
  height: 100%;
  vertical-align: baseline;

  display: inline-block;
  width: 80%;
`
export const Actions = styled.div`
  display: inline-block;
  width: 20%;
`
export const TextButton = styled.button`
  text-decoration: underline;
  display: block;
  color: white;
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`
