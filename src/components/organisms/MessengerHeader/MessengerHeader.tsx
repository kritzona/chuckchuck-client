import React from 'react'
import ShortButton from '../../atoms/ShortButton/ShortButton'
import arrowLeftLightIconSource from '../../../assets/icons/arrow-left-light.svg'
import arrowLeftDarkIconSource from '../../../assets/icons/arrow-left-dark.svg'
import User from '../../molecules/User/User'

import './MessengerHeader.scss'

const MessengerHeader = () => {
  return (
    <div className="messenger-header">
      <ShortButton
        lightIconSource={arrowLeftDarkIconSource}
        darkIconSource={arrowLeftDarkIconSource}
        woBackground={true}
      ></ShortButton>
      <User></User>
    </div>
  )
}

export default MessengerHeader
