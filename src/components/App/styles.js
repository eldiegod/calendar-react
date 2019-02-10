import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body,
  html,
  * {
    font-family: 'PT Sans', sans-serif;
  }
`
