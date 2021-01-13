import React, { useRef, useEffect } from 'react'
import './InputTextareaElement.scss'

const InputTextareaElement = (props: any) => {
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
      placeholder="Введите значение"
      ref={inputTextareaElementRef}
      onFocus={() => handleFocus()}
      onBlur={() => handleBlur()}
    />
  )
}

export default InputTextareaElement
