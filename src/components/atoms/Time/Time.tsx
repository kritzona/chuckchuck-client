import React, { useEffect, useState } from 'react'
import Text from '../../atoms/Text/Text'
import { TimeIconStyled, TimeStyled } from './TimeStyled'
import { formatDate } from '../../../utils/date'

interface IProps {
  date: Date
}

const Time = (props: IProps) => {
  const [formattedDate, setFormattedDate] = useState(formatDate(props.date))

  useEffect(() => {
    setFormattedDate(formatDate(props.date))
  }, [props.date])

  return (
    <TimeStyled>
      <TimeIconStyled />
      <Text type="text-sub-regular">{formattedDate}</Text>
    </TimeStyled>
  )
}

export default Time
