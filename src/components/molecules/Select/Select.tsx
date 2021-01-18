import React, { useState, useEffect, useRef } from 'react'
import './Select.scss'
import SelectField from './SelectField/SelectField'
import SelectOptions from './SelectOptions/SelectOptions'

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

    options.map((option: IOption) => {
      if (option.hasOwnProperty('checked')) option.checked = false

      if (option.checked) {
        existCheckedOption = true
        checkedOptionCount++
      }

      return null
    })

    switch (type) {
      case 'select':
        if (
          !existCheckedOption ||
          (existCheckedOption && checkedOptionCount > 1)
        ) {
          options.map((option: IOption, optionIndex: number) => {
            if (optionIndex === 0) {
              option.checked = true
            } else {
              option.checked = false
            }

            return null
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

    if (stringifiedValues) {
      setPlaceholder(stringifiedValues)
    } else {
      setPlaceholder(defaultPlaceholder)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localOptions])

  const handleSelectFieldClick = () => {
    setActive(!active)
  }
  const handleSelectOptionsChange = (id: number | string) => {
    changeLocalOption(id)
  }

  const checkOutsideClick = (event: Event) => {
    let isOutside = true
    let eventComposedPath = event.composedPath()

    eventComposedPath.map((eventComposedPathItem) => {
      if (eventComposedPathItem === selectRef.current) {
        isOutside = false
      }

      return null
    })

    if (isOutside) {
      setActive(false)
    }
  }
  const changeLocalOption = (id: number | string) => {
    let _localOptions = JSON.parse(JSON.stringify(localOptions))

    switch (type) {
      case 'select':
        _localOptions.map((localOption: IOption) => {
          if (localOption.id === id) {
            localOption.checked = true
          } else {
            localOption.checked = false
          }

          return null
        })
        break
      case 'multiselect':
        _localOptions.map((localOption: IOption) => {
          if (localOption.id === id) {
            localOption.checked = !localOption.checked
          }

          return null
        })
        break
    }

    setLocalOptions(_localOptions)
  }
  const stringifyValues = (delimiter: string) => {
    let values: string[] = []

    localOptions.map((localOption: IOption) => {
      if (localOption.checked) values.push(localOption.value)

      return null
    })

    return values.join(delimiter)
  }

  return (
    <div className="select" ref={selectRef}>
      <div className="select__field">
        <SelectField
          active={active}
          placeholder={placeholder}
          onClick={() => handleSelectFieldClick()}
        ></SelectField>
      </div>

      {active && (
        <div className="select__options">
          <SelectOptions
            type={type}
            options={localOptions}
            onChange={(id: number | string) => handleSelectOptionsChange(id)}
          ></SelectOptions>
        </div>
      )}
    </div>
  )
}

export default Select
