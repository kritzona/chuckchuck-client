import React, { useRef, useEffect } from 'react'
import './InputTextareaElement.scss'

interface IProps {
  placeholder?: string
  onFocus?: () => void
  onBlur?: () => void
  onBuildRef?: (ref: any) => void
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

  return (
    <textarea
      className="input-textarea-element"
      placeholder={props.placeholder ? props.placeholder : 'Введите значение'}
      ref={inputTextareaElementRef}
      onFocus={() => handleFocus()}
      onBlur={() => handleBlur()}
    />
  )
}

export default InputTextareaElement
