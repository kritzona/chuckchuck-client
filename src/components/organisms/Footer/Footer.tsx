import React from 'react'
import FooterStyled from './FooterStyled'

interface IProps {
  children?: React.ReactNode
}

const Footer = (props: IProps) => {
  return <FooterStyled>{props.children}</FooterStyled>
}

export default Footer
