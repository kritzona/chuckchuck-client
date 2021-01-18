import React from 'react'
import Text from '../Text/Text'
import './InputLabel.scss'

interface IProps {
  children?: React.ReactNode
}

const InputLabel = (props: IProps) => {
  return (
    <label className="input-label">
      <Text type="text-small-bold">{props.children}</Text>
    </label>
  )
}

export default InputLabel
