import React from 'react'
import InputFieldStyled from './InputFieldStyled'

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

  return (
    <InputFieldStyled inFocus={props.inFocus} onClick={() => handleClick()}>
      {props.children}
    </InputFieldStyled>
  )
}

export default InputField
