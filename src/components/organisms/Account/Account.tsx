import React from 'react'
import { IUserState } from '../../../store/user/types'
import {
  AccountEastStyled,
  AccountStyled,
  AccountUserStyled,
  AccountWestStyled,
} from './AccountStyled'
import User from '../../molecules/User/User'

interface IProps {
  user: IUserState
  onOpenSettings?: () => void
}

const Account = (props: IProps) => {
  const handleSettingsButtonClick = () => {
    if (props.onOpenSettings) props.onOpenSettings()
  }

  return (
    <AccountStyled>
      <AccountWestStyled>
        <AccountUserStyled>
          <User
            firstName={props.user.firstName}
            lastName={props.user.lastName}
            avatar={props.user.avatar}
            isOnline={true}
          />
        </AccountUserStyled>
      </AccountWestStyled>
      <AccountEastStyled>{false}</AccountEastStyled>
    </AccountStyled>
  )
}

export default Account
