import React from 'react'
import PartFooterStyled from './PartFooterStyled'

interface IProps {
  children: React.ReactNode
}

const PartFooter = (props: IProps) => {
  return <PartFooterStyled>{props.children}</PartFooterStyled>
}

export default PartFooter
