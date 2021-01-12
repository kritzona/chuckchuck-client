import React, { useRef, useEffect } from 'react'
import './InputTextElement.scss'

const InputTextElement = (props: any) => {
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
    <input
      type="text"
      className="input-text-element"
      placeholder="Введите значение"
      ref={inputTextElementRef}
      onFocus={() => handleFocus()}
      onBlur={() => handleBlur()}
    />
  )
}

export default InputTextElement
