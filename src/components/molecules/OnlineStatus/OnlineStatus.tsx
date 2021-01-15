import React from 'react'
import CircleStatus from '../../atoms/CircleStatus/CircleStatus'
import Text from '../../atoms/Text/Text'
import './OnlineStatus.scss'

interface IProps {
  status: string
}

const OnlineStatus = (props: IProps) => {
  let circleStatusColor = 'red'
  const onlineStatusClassNames = ['online-status']

  switch (props.status) {
    case 'online':
      circleStatusColor = 'green'
      onlineStatusClassNames.push('online-status--online')
      break
    case 'offline':
      circleStatusColor = 'red'
      onlineStatusClassNames.push('online-status--offline')
      break
    default:
      circleStatusColor = 'green'
      onlineStatusClassNames.push('online-status--online')
      break
  }

  return (
    <div className={onlineStatusClassNames.join(' ')}>
      <CircleStatus color={circleStatusColor}></CircleStatus>
      <Text type="text-small-bold">{props.status}</Text>
    </div>
  )
}

export default OnlineStatus
