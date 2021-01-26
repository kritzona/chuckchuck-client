import React from 'react'
import PartMainStyled from './PartMainStyled'

interface IProps {
  children?: React.ReactNode
}

const PartMain = (props: IProps) => {
  return <PartMainStyled>{props.children}</PartMainStyled>
}

export default PartMain
