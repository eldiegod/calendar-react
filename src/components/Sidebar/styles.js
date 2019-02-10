import styled from 'styled-components'
import { prop } from 'styled-tools'

export const Sidebar = styled.div`
  overflow: scroll;
  display: inline-block;
  width: 25%;
  height: 100vh;
  font-weight: bold;
  text-align: center;
  vertical-align: top;
  /* background-color: aqua; */
`
export const Title = styled.div`
  margin-top: 20px;
`
export const InputBase = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;
  border-color: darkgray;
  background-color: transparent;
  margin-top: 2rem;
  font-size: 0.75rem;
  font-weight: bold;
`
export const TimeInput = styled(InputBase)`
  width: 40%;
  text-align: center;
  font-weight: bold;
`
export const DateInput = styled(InputBase)`
  width: 40%;
  font-weight: bold;
  text-align: center;
`
export const DescriptionInput = styled(InputBase)`
  width: 70%;
`
export const ColorInput = styled(InputBase)`
  width: 10%;
  border: none;
`
export const SaveReminderButton = styled.button`
  margin: 2rem auto;
  display: block;
  font-weight: bold;
  cursor: pointer;
`
