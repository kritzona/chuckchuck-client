import React, { useEffect, useState } from 'react'
import InputField from '../../atoms/InputField/InputField'
import InputLabel from '../../atoms/InputLabel/InputLabel'
import InputTextElement from '../../atoms/InputTextElement/InputTextElement'
import InputTextareaElement from '../../atoms/InputTextareaElement/InputTextareaElement'
import InputTextStyled from './InputTextStyled'

interface IProps {
  type: 'text' | 'textarea'
  textType?: 'text' | 'password' | 'email'
  label?: string
  placeholder?: string
  value?: string
  onInput?: (value: string) => void
  inFocus?: boolean
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
  const handleInput = (value: string) => {
    if (props.onInput) {
      props.onInput(value)
    }
  }

  useEffect(() => {
    if (props.inFocus) handleInputFieldClick()
    // eslint-disable-next-line
  }, [props.inFocus])

  return (
    <InputTextStyled>
      {props.label && <InputLabel>{props.label}</InputLabel>}

      <InputField onClick={() => handleInputFieldClick()} inFocus={inFocus}>
        {(!props.type || props.type === 'text') && (
          <InputTextElement
            type={props.textType}
            placeholder={
              props.placeholder ? props.placeholder : 'Введите значение'
            }
            value={props.value}
            onFocus={() => handleInputTextFocus()}
            onBlur={() => handleInputTextBlur()}
            onBuildRef={(ref: any) => handleInputTextBuildRef(ref)}
            onInput={(value: string) => handleInput(value)}
          />
        )}
        {props.type === 'textarea' && (
          <InputTextareaElement
            placeholder={
              props.placeholder ? props.placeholder : 'Введите значение'
            }
            value={props.value}
            onFocus={() => handleInputTextareaFocus()}
            onBlur={() => handleInputTextareaBlur()}
            onBuildRef={(ref: any) => handleInputTextareaBuildRef(ref)}
            onInput={(value: string) => handleInput(value)}
          />
        )}
      </InputField>
    </InputTextStyled>
  )
}

export default InputText
