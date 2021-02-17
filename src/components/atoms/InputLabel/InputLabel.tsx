import React from 'react'
import Text from '../Text/Text'
import InputLabelStyled from './InputLabelStyled'

interface IProps {
  children?: React.ReactNode
  status?: 'normal' | 'success' | 'error'
}

const InputLabel = (props: IProps) => {
  return (
    <InputLabelStyled status={props.status}>
      <Text type="text-small-bold">{props.children}</Text>
    </InputLabelStyled>
  )
}

export default InputLabel
