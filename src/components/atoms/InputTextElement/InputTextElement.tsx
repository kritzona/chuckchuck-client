import React, { useRef, useEffect } from 'react'
import InputTextElementStyled from './InputTextElementStyled'

interface IProps {
  type?: 'text' | 'password' | 'email'
  placeholder?: string
  value?: string
  onFocus?: () => void
  onBlur?: () => void
  onBuildRef?: (ref: any) => void
  onInput?: (value: string) => void
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
  const handleChange = (event: React.ChangeEvent) => {
    const eventTarget = event.target as HTMLInputElement

    if (props.onInput) {
      props.onInput(eventTarget.value ? eventTarget.value : '')
    }
  }

  return (
    <InputTextElementStyled
      type={props.type}
      placeholder={props.placeholder}
      value={props.value || ''}
      ref={inputTextElementRef}
      onFocus={() => handleFocus()}
      onBlur={() => handleBlur()}
      onChange={(event: React.ChangeEvent) => handleChange(event)}
    />
  )
}

export default InputTextElement
