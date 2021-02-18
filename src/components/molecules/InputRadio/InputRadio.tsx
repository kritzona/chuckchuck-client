import React from 'react'
import Radio from '../../atoms/Radio/Radio'
import Text from '../../atoms/Text/Text'
import InputRadioStyled from './InputRadioStyled'

interface IProps {
  value: string
  checked: boolean
  onClick?: () => void
}

const InputRadio = (props: IProps) => {
  const handleClick = () => {
    if (props.onClick) props.onClick()
  }

  return (
    <InputRadioStyled onClick={() => handleClick()}>
      <Radio checked={props.checked} />
      <Text type="text-small-bold">{props.value}</Text>
    </InputRadioStyled>
  )
}

export default InputRadio
