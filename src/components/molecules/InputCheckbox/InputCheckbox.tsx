import React from 'react'
import Checkbox from '../../atoms/Checkbox/Checkbox'
import Text from '../../atoms/Text/Text'
import './InputCheckbox.scss'

interface IProps {
  value: string
  checked: boolean
  onClick?: () => void
}

const InputCheckbox = (props: IProps) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick()
    }
  }

  return (
    <div className="input-checkbox" onClick={() => handleClick()}>
      <Checkbox checked={props.checked}></Checkbox>
      <Text type="text-small-bold">{props.value}</Text>
    </div>
  )
}

export default InputCheckbox
