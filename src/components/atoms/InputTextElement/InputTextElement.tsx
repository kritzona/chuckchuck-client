import React, { useRef, useEffect } from 'react'
import InputTextElementStyled from './InputTextElementStyled'

interface IProps {
  type?: 'text' | 'password' | 'email'
  placeholder?: string
  onFocus?: () => void
  onBlur?: () => void
  onBuildRef?: (ref: any) => void
}

const InputTextElement = (props: IProps) => {
  const inputTextElementRef = useRef(null)

  useEffect(() => {
    if (props.onBuildRef) {
      props.onBuildRef(inputTextElementRef)
    }
  })

  const handleFocus = () => {
    if (props.onFocus) {
      props.onFocus()
    }
  }
  const handleBlur = () => {
    if (props.onBlur) {
      props.onBlur()
    }
  }

  return (
    <InputTextElementStyled
      type={props.type}
      placeholder={props.placeholder}
      ref={inputTextElementRef}
      onFocus={() => handleFocus()}
      onBlur={() => handleBlur()}
    />
  )
}

export default InputTextElement
