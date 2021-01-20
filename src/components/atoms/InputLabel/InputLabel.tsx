import React from 'react'
import Text from '../Text/Text'
import InputLabelStyled from './InputLabelStyled'

interface IProps {
  children?: React.ReactNode
}

const InputLabel = (props: IProps) => {
  return (
    <InputLabelStyled>
      <Text type="text-small-bold">{props.children}</Text>
    </InputLabelStyled>
  )
}

export default InputLabel
