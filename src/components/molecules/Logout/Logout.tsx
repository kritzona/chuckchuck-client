import React from 'react'
import logoutLightIconSource from '../../../assets/icons/logout-light.svg'
import logoutDarkIconSource from '../../../assets/icons/logout-dark.svg'
import LogoutStyled from './LogoutStyled'
import ShortButton from '../../atoms/ShortButton/ShortButton'
import { useDispatch } from 'react-redux'
import { userLogoutAction } from '../../../store/user/actions'

interface IProps {}

const Logout = (props: IProps) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(userLogoutAction())
  }

  return (
    <LogoutStyled>
      <ShortButton
        lightIconSource={logoutLightIconSource}
        darkIconSource={logoutDarkIconSource}
        woBackground={true}
        onClick={() => handleClick()}
      />
    </LogoutStyled>
  )
}

export default Logout
