import React from 'react'
import './Select.scss'
import SelectField from './SelectField/SelectField'
import SelectOptions from './SelectOptions/SelectOptions'

const Select = () => {
  return (
    <div className="select">
      <SelectField></SelectField>
      <SelectOptions></SelectOptions>
    </div>
  )
}

export default Select
