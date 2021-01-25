import React from 'react'
import ShortButton from '../../atoms/ShortButton/ShortButton'
import arrowLeftLightIconSource from '../../../assets/icons/arrow-left-light.svg'
import arrowLeftDarkIconSource from '../../../assets/icons/arrow-left-dark.svg'
import User from '../../molecules/User/User'
import {
  MessengerHeaderSideStyled,
  MessengerHeaderStyled,
} from './MessengerHeaderStyled'
import { useHistory } from 'react-router-dom'
import ToggleTheme from '../ToggleTheme/ToggleTheme'

const MessengerHeader = () => {
  const history = useHistory()

  return (
    <MessengerHeaderStyled>
      <MessengerHeaderSideStyled>
        <ShortButton
          lightIconSource={arrowLeftLightIconSource}
          darkIconSource={arrowLeftDarkIconSource}
          woBackground={true}
          onClick={() => history.push('/contacts')}
        />
        <User />
      </MessengerHeaderSideStyled>
      <MessengerHeaderSideStyled>
        <ToggleTheme />
      </MessengerHeaderSideStyled>
    </MessengerHeaderStyled>
  )
}

export default MessengerHeader
