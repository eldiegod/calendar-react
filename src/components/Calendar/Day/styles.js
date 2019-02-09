import styled, { css } from 'styled-components'
import { ifProp } from 'styled-tools'

export const Box = styled.div`
  padding: 10px;
  border: solid;

  background-color: ${ifProp('selected', 'aqua')};

  ${ifProp(
    'disabled',
    css`
      background-color: #999;
      pointer-events: none;
    `
  )}
`
