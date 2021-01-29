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
import ToggleTheme from '../../molecules/ToggleTheme/ToggleTheme'

interface IProps {
  contactItem: {
    firstName: string
    lastName: string
    avatar: string | null
    isOnline: boolean
  }
}

const MessengerHeader = (props: IProps) => {
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
        <User
          firstName={props.contactItem.firstName}
          lastName={props.contactItem.lastName}
          avatar={props.contactItem.avatar}
          isOnline={props.contactItem.isOnline}
        />
      </MessengerHeaderSideStyled>
      <MessengerHeaderSideStyled>
        <ToggleTheme />
      </MessengerHeaderSideStyled>
    </MessengerHeaderStyled>
  )
}

export default MessengerHeader
