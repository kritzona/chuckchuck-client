import React from 'react'
import Avatar from '../../atoms/Avatar/Avatar'
import Text from '../../atoms/Text/Text'
import OnlineStatus from '../OnlineStatus/OnlineStatus'
import { UserAvatarStyled, UserInfoStyled, UserStyled } from './UserStyled'

const User = () => {
  return (
    <UserStyled>
      <UserAvatarStyled>
        <Avatar />
      </UserAvatarStyled>
      <UserInfoStyled>
        <Text type="text-small-bold">Влад Усманов</Text>
        <OnlineStatus status="online" />
      </UserInfoStyled>
    </UserStyled>
  )
}

export default User
