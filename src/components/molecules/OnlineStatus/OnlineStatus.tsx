import React from 'react'
import CircleStatus from '../../atoms/CircleStatus/CircleStatus'
import Text from '../../atoms/Text/Text'
import OnlineStatusStyled from './OnlineStatusStyled'

interface IProps {
  status?: string
}

const OnlineStatus = (props: IProps) => {
  let circleStatusColor = 'green'

  switch (props.status) {
    case 'online':
      circleStatusColor = 'green'
      break
    case 'offline':
      circleStatusColor = 'red'
      break
    default:
      circleStatusColor = 'green'
      break
  }

  return (
    <OnlineStatusStyled status={props.status}>
      <CircleStatus color={circleStatusColor} />
      <Text type="text-small-bold">{props.status}</Text>
    </OnlineStatusStyled>
  )
}

export default OnlineStatus
