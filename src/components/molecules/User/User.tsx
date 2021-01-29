import React from 'react'
import Avatar from '../../atoms/Avatar/Avatar'
import Text from '../../atoms/Text/Text'
import OnlineStatus from '../OnlineStatus/OnlineStatus'
import { UserAvatarStyled, UserInfoStyled, UserStyled } from './UserStyled'

interface IProps {
  firstName: string
  lastName: string
  avatar: string | null
  isOnline: boolean
}

const User = (props: IProps) => {
  return (
    <UserStyled>
      <UserAvatarStyled>
        <Avatar imageSource={props.avatar} />
      </UserAvatarStyled>
      <UserInfoStyled>
        <Text type="text-small-bold">
          {props.firstName || 'Гость'} {props.lastName || 'Гость'}
        </Text>
        <OnlineStatus status={props.isOnline ? 'online' : 'offline'} />
      </UserInfoStyled>
    </UserStyled>
  )
}

export default User
