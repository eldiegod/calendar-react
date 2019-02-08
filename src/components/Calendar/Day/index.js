import React from 'react'

import * as S from './styles'

const Day = ({ day, disabled }) => {
  return <S.Box disabled={disabled}>{day}</S.Box>
}

export default Day
