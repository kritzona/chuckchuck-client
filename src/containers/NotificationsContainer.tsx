import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import Notifications from '../components/organisms/Notifications/Notifications'

interface IProps {}

const NotificationsContainer = (props: IProps) => {
  const notificationItems = useSelector(
    (state: RootState) => state.root.notification.items,
  )

  return <Notifications items={notificationItems} />
}

export default NotificationsContainer
