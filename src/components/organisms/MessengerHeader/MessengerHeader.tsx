import React from 'react'
import ShortButton from '../../atoms/ShortButton/ShortButton'
import arrowLeftLightIconSource from '../../../assets/icons/arrow-left-light.svg'
import arrowLeftDarkIconSource from '../../../assets/icons/arrow-left-dark.svg'
import User from '../../molecules/User/User'
import MessengerHeaderStyled from './MessengerHeaderStyled'

const MessengerHeader = () => {
  return (
    <MessengerHeaderStyled>
      <ShortButton
        lightIconSource={arrowLeftLightIconSource}
        darkIconSource={arrowLeftDarkIconSource}
        woBackground={true}
      />
      <User />
    </MessengerHeaderStyled>
  )
}

export default MessengerHeader
