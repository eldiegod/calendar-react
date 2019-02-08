import React, { Component } from 'react'

import * as S from './styles'

import Calendar from 'components/Calendar'
import Sidebar from 'components/Sidebar'

const App = () => (
  <>
    <S.GlobalStyle />
    <Calendar />
    <Sidebar />
  </>
)

export default App
