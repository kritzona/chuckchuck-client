import React from 'react'
import MainHeaderStyled from './MainHeaderStyled'
import LogotypeWithName from '../../molecules/LogotypeWithName/LogotypeWithName'

interface IProps {}

const MainHeader = (props: IProps) => {
  return (
    <MainHeaderStyled>
      <LogotypeWithName />
    </MainHeaderStyled>
  )
}

export default MainHeader
