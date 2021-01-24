import React from 'react'
import PartMessengerFooterStyled from './PartMessengerFooterStyled'

interface IProps {
  children: React.ReactNode
}

const PartMessengerFooter = (props: IProps) => {
  return <PartMessengerFooterStyled>{props.children}</PartMessengerFooterStyled>
}

export default PartMessengerFooter
