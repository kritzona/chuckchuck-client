import React from 'react'
import CheckboxStyled from './CheckboxStyled'

interface IProps {
  checked?: boolean
}

const Checkbox = (props: IProps) => {
  return <CheckboxStyled checked={props.checked}></CheckboxStyled>
}

export default Checkbox
