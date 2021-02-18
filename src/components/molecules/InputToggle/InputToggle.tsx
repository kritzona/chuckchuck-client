import React from 'react'
import Toggle from '../../atoms/Toggle/Toggle'
import Text from '../../atoms/Text/Text'
import InputToggleStyled from './InputToggleStyled'

interface IProps {
  value: string
  checked: boolean
  onClick?: () => void
}

const InputToggle = (props: IProps) => {
  const handleClick = () => {
    if (props.onClick) props.onClick()
  }

  return (
    <InputToggleStyled onClick={() => handleClick()}>
      <Toggle checked={props.checked} />
      <Text type="text-small-bold">{props.value}</Text>
    </InputToggleStyled>
  )
}

export default InputToggle
