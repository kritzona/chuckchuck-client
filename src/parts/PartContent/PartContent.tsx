import React from 'react'
import PartContentStyled from './PartContentStyled'

interface IProps {
  children: React.ReactNode
}

const PartContent = (props: IProps) => {
  return <PartContentStyled>{props.children}</PartContentStyled>
}

export default PartContent
