import React, { useState, useEffect } from 'react'
import './Select.scss'
import SelectField from './SelectField/SelectField'
import SelectOptions from './SelectOptions/SelectOptions'

interface IOption {
  id: number | string
  value: string
  checked: boolean
}
interface IProps {
  options: IOption[]
  placeholder?: string
}

const Select = (props: IProps) => {
  const [active, setActive] = useState(false)
  const [placeholder, setPlaceholder] = useState('Выберите значение')
  const [localOptions, setLocalOptions] = useState([])

  useEffect(() => {
    if (props.placeholder) {
      setPlaceholder(props.placeholder)
    }
  }, [props.placeholder])
  useEffect(() => {
    setLocalOptions(JSON.parse(JSON.stringify(props.options)))
  }, [props.options])

  const handleSelectFieldClick = () => {
    setActive(!active)
  }
  const handleSelectOptionsChange = (id: number | string) => {
    changeLocalOption(id)
  }

  const changeLocalOption = (id: number | string) => {
    let _localOptions = JSON.parse(JSON.stringify(localOptions))
    _localOptions.map((localOption: IOption) => {
      if (localOption.id === id) {
        localOption.checked = !localOption.checked
      }

      return null
    })

    setLocalOptions(_localOptions)

    console.log(localOptions)
  }

  return (
    <div className="select">
      <SelectField
        active={active}
        placeholder={placeholder}
        onClick={() => handleSelectFieldClick()}
      ></SelectField>

      {active && (
        <SelectOptions
          options={localOptions}
          onChange={(id: number | string) => handleSelectOptionsChange(id)}
        ></SelectOptions>
      )}
    </div>
  )
}

export default Select
