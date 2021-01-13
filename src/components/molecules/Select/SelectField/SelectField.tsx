import React from 'react'
import InputField from '../../../atoms/InputField/InputField'
import Text from '../../../atoms/Text/Text'
import './SelectField.scss'

const SelectField = () => {
  return (
    <InputField>
      <div className="select-field">
        <Text type="text-normal-bold">Выберите значение</Text>
      </div>
    </InputField>
  )
}

export default SelectField
