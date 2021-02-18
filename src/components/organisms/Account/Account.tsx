import React from 'react'
import { IUserState } from '../../../store/user/types'
import {
  AccountEastStyled,
  AccountStyled,
  AccountUserStyled,
  AccountWestStyled,
} from './AccountStyled'
import User from '../../molecules/User/User'
import ShortButton from '../../atoms/ShortButton/ShortButton'

import settingsLightIconSource from '../../../assets/icons/settings-light.svg'
import settingsDarkIconSource from '../../../assets/icons/settings-dark.svg'

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
      <AccountEastStyled>
        <ShortButton
          lightIconSource={settingsLightIconSource}
          darkIconSource={settingsDarkIconSource}
          woBackground={true}
          iconAlign="center"
          onClick={() => handleSettingsButtonClick()}
        />
      </AccountEastStyled>
    </AccountStyled>
  )
}

export default Account
