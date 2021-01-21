import React from 'react'
import InputCheckbox from '../../InputCheckbox/InputCheckbox'
import InputRadio from '../../InputRadio/InputRadio'
import SelectOptionsStyled from './SelectOptionsStyled'

interface IOption {
  id: number | string
  value: string
  checked: boolean
}
interface IProps {
  type: string
  options: IOption[]
  onChange?: (id: number | string) => void
}

const SelectOptions = (props: IProps) => {
  const handleInputCheckboxClick = (id: number | string) => {
    if (props.onChange) {
      props.onChange(id)
    }
  }
  const handleInputRadioClick = (id: number | string) => {
    if (props.onChange) {
      props.onChange(id)
    }
  }

  return (
    <SelectOptionsStyled>
      {props.options.map((option) => (
        <div key={option.id}>
          {props.type === 'select' && (
            <InputRadio
              value={option.value}
              checked={option.checked}
              onClick={() => handleInputCheckboxClick(option.id)}
            />
          )}
          {props.type === 'multiselect' && (
            <InputCheckbox
              value={option.value}
              checked={option.checked}
              onClick={() => handleInputRadioClick(option.id)}
            />
          )}
        </div>
      ))}
    </SelectOptionsStyled>
  )
}

export default SelectOptions
