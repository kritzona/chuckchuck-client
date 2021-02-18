import React from 'react'
import Checkbox from '../../atoms/Checkbox/Checkbox'
import Text from '../../atoms/Text/Text'
import InputCheckboxStyled from './InputCheckboxStyled'

interface IProps {
  value: string
  checked: boolean
  onClick?: () => void
}

const InputCheckbox = (props: IProps) => {
  const handleClick = () => {
    if (props.onClick) props.onClick()
  }

  return (
    <InputCheckboxStyled onClick={() => handleClick()}>
      <Checkbox checked={props.checked} />
      <Text type="text-small-bold">{props.value}</Text>
    </InputCheckboxStyled>
  )
}

export default InputCheckbox
