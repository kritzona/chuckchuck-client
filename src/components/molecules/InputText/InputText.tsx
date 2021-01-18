import React, { useState } from 'react'
import InputField from '../../atoms/InputField/InputField'
import InputLabel from '../../atoms/InputLabel/InputLabel'
import InputTextElement from '../../atoms/InputTextElement/InputTextElement'
import InputTextareaElement from '../../atoms/InputTextareaElement/InputTextareaElement'

interface IProps {
  type: 'text' | 'textarea'
  label?: string
  placeholder?: string
  onInput?: (value: string) => void
}

const InputText = (props: IProps) => {
  let inputTextElementRef = {
    current: {
      focus: () => null,
    },
  }
  let inputTextareaElementRef = {
    current: {
      focus: () => null,
    },
  }
  const [inFocus, setInFocus] = useState(false)

  const handleInputFieldClick = () => {
    if (props.type === 'text') {
      inputTextElementRef.current.focus()
    } else if (props.type === 'textarea') {
      inputTextareaElementRef.current.focus()
    }

    setInFocus(true)
  }
  const handleInputTextBuildRef = (ref: any) => {
    inputTextElementRef = ref
  }
  const handleInputTextareaBuildRef = (ref: any) => {
    inputTextareaElementRef = ref
  }
  const handleInputTextFocus = () => {
    setInFocus(true)
  }
  const handleInputTextBlur = () => {
    setInFocus(false)
  }
  const handleInputTextareaFocus = () => {
    setInFocus(true)
  }
  const handleInputTextareaBlur = () => {
    setInFocus(false)
  }

  return (
    <div className="input-text">
      {props.label && <InputLabel>{props.label}</InputLabel>}

      <InputField onClick={() => handleInputFieldClick()} inFocus={inFocus}>
        {(!props.type || props.type === 'text') && (
          <InputTextElement
            placeholder={
              props.placeholder ? props.placeholder : 'Введите значение'
            }
            onFocus={() => handleInputTextFocus()}
            onBlur={() => handleInputTextBlur()}
            onBuildRef={(ref: any) => handleInputTextBuildRef(ref)}
          ></InputTextElement>
        )}
        {props.type === 'textarea' && (
          <InputTextareaElement
            placeholder={
              props.placeholder ? props.placeholder : 'Введите значение'
            }
            onFocus={() => handleInputTextareaFocus()}
            onBlur={() => handleInputTextareaBlur()}
            onBuildRef={(ref: any) => handleInputTextareaBuildRef(ref)}
          ></InputTextareaElement>
        )}
      </InputField>
    </div>
  )
}

export default InputText
