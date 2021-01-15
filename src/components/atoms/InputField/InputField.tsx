import React from 'react'
import './InputField.scss'

interface IProps {
  inFocus?: boolean
  onClick?: () => void
  children?: React.ReactNode
}

const InputField = (props: IProps) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick()
    }
  }

  const inputFieldClassNames = ['input-field']
  if (props.inFocus) {
    inputFieldClassNames.push('input-field--focus')
  }

  return (
    <div
      className={inputFieldClassNames.join(' ')}
      onClick={() => handleClick()}
    >
      {props.children}
    </div>
  )
}

export default InputField
