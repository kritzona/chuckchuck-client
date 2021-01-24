import React from 'react'
import PartHeaderStyled from './PartHeaderStyled'

interface IProps {
  children: React.ReactNode
}

const PartHeader = (props: IProps) => {
  return <PartHeaderStyled>{props.children}</PartHeaderStyled>
}

export default PartHeader
