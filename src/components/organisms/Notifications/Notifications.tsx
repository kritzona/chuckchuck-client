import React from 'react'
import { INotificationItem } from '../../../store/notification/types'
import NotificationsStyled from './NotificationsStyled'
import Notification from '../../molecules/Notification/Notification'

interface IProps {
  items: INotificationItem[]
}

const Notifications = (props: IProps) => {
  return (
    <NotificationsStyled>
      <div className="container">
        <div className="row">
          <div className="offset-lg-3" />
          <div className="col-lg-6">
            {props.items.map((item) => (
              <Notification key={item.id} status={item.status}>
                {item.message}
              </Notification>
            ))}
          </div>
          <div className="offset-lg-3" />
        </div>
      </div>
    </NotificationsStyled>
  )
}

export default Notifications
