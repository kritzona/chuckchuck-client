import React from 'react'
import { MainHeaderSideStyled, MainHeaderStyled } from './MainHeaderStyled'
import LogotypeWithName from '../../molecules/LogotypeWithName/LogotypeWithName'
import ToggleTheme from '../ToggleTheme/ToggleTheme'

interface IProps {}

const MainHeader = (props: IProps) => {
  return (
    <MainHeaderStyled>
      <MainHeaderSideStyled>
        <LogotypeWithName />
      </MainHeaderSideStyled>
      <MainHeaderSideStyled>
        <ToggleTheme />
      </MainHeaderSideStyled>
    </MainHeaderStyled>
  )
}

export default MainHeader
