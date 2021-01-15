import React from 'react'
import Radio from '../../atoms/Radio/Radio'
import Text from '../../atoms/Text/Text'
import './InputRadio.scss'

interface IProps {
  value: string
  checked: boolean
}

const InputRadio = (props: IProps) => {
  return (
    <div className="input-checkbox">
      <Radio checked={props.checked}></Radio>
      <Text type="text-small-bold">{props.value}</Text>
    </div>
  )
}

export default InputRadio
