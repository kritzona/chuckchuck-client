import React from 'react'
import CircleStatusStyled from './CircleStatusStyled'

interface IProps {
  color?: string
}

const CircleStatus = (props: IProps) => {
  return <CircleStatusStyled color={props.color} />
}

export default CircleStatus
