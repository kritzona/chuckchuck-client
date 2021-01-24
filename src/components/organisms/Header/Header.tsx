import React from 'react'
import HeaderStyled from './HeaderStyled'

interface IProps {
  leftChildren: React.ReactNode
  rightChildren: React.ReactNode
}

const Header = (props: IProps) => {
  return (
    <HeaderStyled>
      <div>{props.leftChildren}</div>
      <div>{props.rightChildren}</div>
    </HeaderStyled>
  )
}

export default Header
