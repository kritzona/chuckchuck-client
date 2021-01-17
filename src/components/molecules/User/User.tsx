import React from 'react'
import Avatar from '../../atoms/Avatar/Avatar'
import Text from '../../atoms/Text/Text'
import OnlineStatus from '../OnlineStatus/OnlineStatus'
import './User.scss'

const User = () => {
  return (
    <div className="user">
      <div className="user__avatar">
        <Avatar></Avatar>
      </div>
      <div className="user__info">
        <Text type="text-small-bold">Влад Усманов</Text>
        <OnlineStatus status="online"></OnlineStatus>
      </div>
    </div>
  )
}

export default User
