import React from 'react'
import InputCheckbox from '../../InputCheckbox/InputCheckbox'
import InputRadio from '../../InputRadio/InputRadio'
import './SelectOptions.scss'

interface IOption {
  id: number | string
  value: string
  checked: boolean
}
interface IProps {
  options: IOption[]
  onChange?: (id: number | string) => void
}

const SelectOptions = (props: IProps) => {
  const handleInputCheckboxClick = (id: number | string) => {
    if (props.onChange) {
      props.onChange(id)
    }
  }

  return (
    <div className="select-options">
      {props.options.map((option) => (
        <div className="select-options__item">
          <InputCheckbox
            key={option.id}
            value={option.value}
            checked={option.checked}
            onClick={() => handleInputCheckboxClick(option.id)}
          ></InputCheckbox>
        </div>
      ))}
    </div>
  )
}

export default SelectOptions
