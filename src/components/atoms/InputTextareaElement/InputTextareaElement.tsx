import React, { useRef, useEffect } from 'react'
import InputTextareaElementStyled from './InputTextareaElementStyled'

interface IProps {
  placeholder?: string
  onFocus?: () => void
  onBlur?: () => void
  onBuildRef?: (ref: any) => void
  onInput?: (value: string) => void
}

const InputTextareaElement = (props: IProps) => {
  const inputTextareaElementRef = useRef(null)

  useEffect(() => {
    if (props.onBuildRef) {
      props.onBuildRef(inputTextareaElementRef)
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
    <InputTextareaElementStyled
      placeholder={props.placeholder}
      ref={inputTextareaElementRef}
      onFocus={() => handleFocus()}
      onBlur={() => handleBlur()}
      onChange={(event: React.ChangeEvent) => handleChange(event)}
    />
  )
}

export default InputTextareaElement
