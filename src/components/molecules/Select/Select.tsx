import React, { useState, useEffect, useRef } from 'react'
import SelectField from './SelectField/SelectField'
import SelectOptions from './SelectOptions/SelectOptions'
import {
  SelectFieldWrapperStyled,
  SelectOptionsWrapperStyled,
  SelectStyled,
} from './SelectStyled'

interface IOption {
  id: number | string
  value: string
  checked?: boolean
}
interface IProps {
  type?: 'select' | 'multiselect'
  options: IOption[]
  placeholder?: string
  onChange?: (value: string) => void
}

const Select = (props: IProps) => {
  const defaultType = props.type || 'select'
  const defaultPlaceholder = props.placeholder || 'Выберите значение'

  const [type] = useState(defaultType)
  const [active, setActive] = useState(false)
  const [placeholder, setPlaceholder] = useState(defaultPlaceholder)
  const [localOptions, setLocalOptions] = useState([])

  const selectRef = useRef(null)

  useEffect(() => {
    window.addEventListener('click', checkOutsideClick)

    return () => {
      window.removeEventListener('click', checkOutsideClick)
    }
  })
  useEffect(() => {
    let options = JSON.parse(JSON.stringify(props.options))
    let existCheckedOption = false
    let checkedOptionCount = 0

    options.forEach((option: IOption) => {
      if (option.hasOwnProperty('checked')) option.checked = false

      if (option.checked) {
        existCheckedOption = true
        checkedOptionCount++
      }
    })

    switch (type) {
      case 'select':
        if (
          !existCheckedOption ||
          (existCheckedOption && checkedOptionCount > 1)
        ) {
          options.forEach((option: IOption, optionIndex: number) => {
            option.checked = optionIndex === 0
          })
        }
        break
      case 'multiselect':
        break
    }

    setLocalOptions(options)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.options])
  useEffect(() => {
    let stringifiedValues = stringifyValues(' / ')
    setPlaceholder(stringifiedValues ? stringifiedValues : defaultPlaceholder)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localOptions])

  const handleSelectFieldClick = () => setActive(!active)
  const handleSelectOptionsChange = (id: number | string) => {
    changeLocalOption(id)

    if (type === 'select') setActive(false)
  }

  const checkOutsideClick = (event: Event) => {
    let isOutside = true
    let eventComposedPath = event.composedPath()

    eventComposedPath.forEach((eventComposedPathItem) => {
      if (eventComposedPathItem === selectRef.current) isOutside = false
    })

    if (isOutside) setActive(false)
  }
  const changeLocalOption = (id: number | string) => {
    let _localOptions = JSON.parse(JSON.stringify(localOptions))

    switch (type) {
      case 'select':
        _localOptions.forEach((localOption: IOption) => {
          localOption.checked = localOption.id === id
        })
        break
      case 'multiselect':
        _localOptions.forEach((localOption: IOption) => {
          if (localOption.id === id) {
            localOption.checked = !localOption.checked
          }
        })
        break
    }

    setLocalOptions(_localOptions)
  }
  const stringifyValues = (delimiter: string) => {
    let values: string[] = []

    localOptions.forEach((localOption: IOption) => {
      if (localOption.checked) values.push(localOption.value)
    })

    return values.join(delimiter)
  }

  return (
    <SelectStyled ref={selectRef}>
      <SelectFieldWrapperStyled>
        <SelectField
          active={active}
          placeholder={placeholder}
          onClick={() => handleSelectFieldClick()}
        />
      </SelectFieldWrapperStyled>

      {active && (
        <SelectOptionsWrapperStyled>
          <SelectOptions
            type={type}
            options={localOptions}
            onChange={(id: number | string) => handleSelectOptionsChange(id)}
          />
        </SelectOptionsWrapperStyled>
      )}
    </SelectStyled>
  )
}

export default Select
