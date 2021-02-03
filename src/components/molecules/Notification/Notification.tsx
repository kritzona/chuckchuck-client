import React from 'react'
import NotificationStyled from './NotificationStyled'
import Text from '../../atoms/Text/Text'

interface IProps {
  status: 'info' | 'success' | 'error'
  children?: React.ReactNode
}

const Notification = (props: IProps) => {
  return (
    <NotificationStyled status={props.status}>
      <Text type="text-small-bold">{props.children}</Text>
    </NotificationStyled>
  )
}

export default Notification
