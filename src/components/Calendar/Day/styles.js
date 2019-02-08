import styled from 'styled-components'
import { ifProp, palette } from 'styled-tools'

export const Box = styled.div`
  background-color: ${ifProp('disabled', 'gray')};
  padding: 10px;
  border: solid;
`
