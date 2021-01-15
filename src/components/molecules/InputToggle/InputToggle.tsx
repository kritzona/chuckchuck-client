import React from 'react'
import Toggle from '../../atoms/Toggle/Toggle'
import Text from '../../atoms/Text/Text'
import './InputToggle.scss'

interface IProps {
  value: string
  checked: boolean
  onClick?: () => void
}

const InputToggle = (props: IProps) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick()
    }
  }

  return (
    <div className="input-toggle" onClick={() => handleClick()}>
      <Toggle checked={props.checked}></Toggle>
      <Text type="text-small-bold">{props.value}</Text>
    </div>
  )
}

export default InputToggle
