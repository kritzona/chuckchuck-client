import React from 'react'
import InputFieldStyled from './InputFieldStyled'

interface IProps {
  children?: React.ReactNode
  status?: 'normal' | 'success' | 'error'
  inFocus?: boolean
  onClick?: () => void
}

const InputField = (props: IProps) => {
  const handleClick = () => {
    if (props.onClick) props.onClick()
  }

  return (
    <InputFieldStyled
      status={props.status}
      inFocus={props.inFocus}
      onClick={() => handleClick()}
    >
      {props.children}
    </InputFieldStyled>
  )
}

export default InputField
