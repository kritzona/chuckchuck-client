import React from 'react'
import Text from '../../atoms/Text/Text'
import { TimeIconStyled, TimeStyled } from './TimeStyled'

const Time = () => {
  return (
    <TimeStyled>
      <TimeIconStyled />
      <Text type="text-sub-regular">19 Янв 2021</Text>
    </TimeStyled>
  )
}

export default Time
