import React from 'react'
import InputField from '../../../atoms/InputField/InputField'
import Text from '../../../atoms/Text/Text'
import SelectFieldStyled from './SelectFieldStyled'

interface IProps {
  active: boolean
  placeholder: string
  onClick?: () => void
}

const SelectField = (props: IProps) => {
  const handleClick = () => {
    if (props.onClick) props.onClick()
  }

  return (
    <InputField inFocus={props.active} onClick={() => handleClick()}>
      <SelectFieldStyled active={props.active}>
        <Text type="text-small-bold">{props.placeholder}</Text>
      </SelectFieldStyled>
    </InputField>
  )
}

export default SelectField
