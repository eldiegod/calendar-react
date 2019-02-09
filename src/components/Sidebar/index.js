import React from 'react'
import { createUseConnect } from 'react-use-redux'
import moment from 'moment'

import * as S from './styles'
import { getCurrentFullDate } from 'redux/selectors'

const useConnect = createUseConnect(state => ({
  currentDate: state.currentDate,
  currentFullDate: getCurrentFullDate(state)
}))

const Sidebar = () => {
  const { currentDate, currentFullDate } = useConnect()
  return (
    <S.Sidebar>
      <S.DateTitle>{moment(currentFullDate).format('MMM DD')}</S.DateTitle>
    </S.Sidebar>
  )
}

export default Sidebar
