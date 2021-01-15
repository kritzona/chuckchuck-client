import React from 'react'
import Radio from '../../atoms/Radio/Radio'
import Text from '../../atoms/Text/Text'
import './InputRadio.scss'

interface IProps {
  value: string
  checked: boolean
  onClick?: () => void
}

const InputRadio = (props: IProps) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick()
    }
  }

  return (
    <div className="input-checkbox" onClick={() => handleClick()}>
      <Radio checked={props.checked}></Radio>
      <Text type="text-small-bold">{props.value}</Text>
    </div>
  )
}

export default InputRadio
