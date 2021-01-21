import React from 'react'
import RadioStyled from './RadioStyled'

interface IProps {
  checked?: boolean
}

const Radio = (props: IProps) => {
  return <RadioStyled checked={props.checked} />
}

export default Radio
