import React, { useState } from 'react'
import InputField from '../../atoms/InputField/InputField'
import InputLabel from '../../atoms/InputLabel/InputLabel'
import InputTextElement from '../../atoms/InputTextElement/InputTextElement'

const InputText = () => {
  let inputTextElementRef = {
    current: {
      focus: () => null,
    },
  }
  const [inFocus, setInFocus] = useState(false)

  const handleInputTextBuildRef = (ref: any) => {
    inputTextElementRef = ref
  }
  const handleInputFieldClick = () => {
    console.log(inputTextElementRef)
    if (inputTextElementRef) {
      inputTextElementRef.current.focus()
      setInFocus(true)
    }
  }
  const handleInputTextFocus = () => {
    setInFocus(true)
  }
  const handleInputTextBlur = () => {
    setInFocus(false)
  }

  return (
    <div className="input-text">
      <InputLabel></InputLabel>
      <InputField onClick={() => handleInputFieldClick()} inFocus={inFocus}>
        <InputTextElement
          onFocus={() => handleInputTextFocus()}
          onBlur={() => handleInputTextBlur()}
          onBuildRef={(ref: any) => handleInputTextBuildRef(ref)}
        ></InputTextElement>
      </InputField>
    </div>
  )
}

export default InputText
