import React from 'react'
import InputField from '../../../atoms/InputField/InputField'
import Text from '../../../atoms/Text/Text'
import './SelectField.scss'

interface IProps {
  active: boolean
  placeholder: string
  onClick?: () => void
}

const SelectField = (props: IProps) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick()
    }
  }

  const selectFieldClassNames = ['select-field']
  if (props.active) {
    selectFieldClassNames.push('select-field--active')
  }

  return (
    <InputField inFocus={props.active} onClick={() => handleClick()}>
      <div className={selectFieldClassNames.join(' ')}>
        <Text type="text-small-bold">{props.placeholder}</Text>
      </div>
    </InputField>
  )
}

export default SelectField
