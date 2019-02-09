import React from 'react'

import * as S from './styles'

const Day = ({ day, disabled, selected }) => {
  return (
    <S.Box selected={selected} disabled={disabled}>
      {day}
    </S.Box>
  )
}

export default Day
