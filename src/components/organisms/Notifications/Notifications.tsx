import React from 'react'
import { INotificationItemWithDate } from '../../../store/notification/types'
import NotificationsStyled from './NotificationsStyled'
import Notification from '../../molecules/Notification/Notification'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'

interface IProps {
  items: INotificationItemWithDate[]
}

const Notifications = (props: IProps) => {
  const dateNow = useSelector((state: RootState) => state.root.dateNow)

  return (
    <NotificationsStyled>
      <div className="container">
        <div className="row">
          <div className="offset-lg-3" />
          <div className="col-lg-6">
            {props.items.map(
              (item) =>
                dateNow.getTime() - item.createdAt.getTime() <= 2000 && (
                  <Notification key={item.id} status={item.status}>
                    {item.message}
                  </Notification>
                ),
            )}
          </div>
          <div className="offset-lg-3" />
        </div>
      </div>
    </NotificationsStyled>
  )
}

export default Notifications
