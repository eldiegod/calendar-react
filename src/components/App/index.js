import React, { Component } from 'react'

import * as S from './styles'

import Calendar from 'components/Calendar'

const App = () => (
  <>
    <S.GlobalStyle />
    <Calendar>Hi, I'm an app!</Calendar>
  </>
)

export default App
