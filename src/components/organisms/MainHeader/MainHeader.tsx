import React from 'react'
import { MainHeaderSideStyled, MainHeaderStyled } from './MainHeaderStyled'
import LogotypeWithName from '../../molecules/LogotypeWithName/LogotypeWithName'
import ToggleTheme from '../../molecules/ToggleTheme/ToggleTheme'
import Logout from '../../molecules/Logout/Logout'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'

interface IProps {}

const MainHeader = (props: IProps) => {
  const user = useSelector((state: RootState) => state.user)

  return (
    <MainHeaderStyled>
      <MainHeaderSideStyled>
        {user.isAuth && <Logout />}
        <LogotypeWithName />
      </MainHeaderSideStyled>
      <MainHeaderSideStyled>
        <ToggleTheme />
      </MainHeaderSideStyled>
    </MainHeaderStyled>
  )
}

export default MainHeader
