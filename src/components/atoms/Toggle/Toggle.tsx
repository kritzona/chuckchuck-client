import React from 'react'
import ToggleStyled from './ToggleStyled'

interface IProps {
  checked?: boolean
}

const Toggle = (props: IProps) => {
  return <ToggleStyled checked={props.checked} />
}

export default Toggle
