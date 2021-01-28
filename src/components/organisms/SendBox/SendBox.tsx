import React, { useState } from 'react'

import ShortButton from '../../atoms/ShortButton/ShortButton'
import telegramLightIconSource from '../../../assets/icons/telegram-light.svg'
import telegramDarkIconSource from '../../../assets/icons/telegram-dark.svg'
import InputText from '../../molecules/InputText/InputText'

import {
  SendBoxStyled,
  SendBoxSubmitStyled,
  SendBoxTextareaStyled,
} from './SendBoxStyled'

interface IProps {
  onSend?: (message: string) => void
}

const SendBox = (props: IProps) => {
  const [inputMessage, setInputMessage] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if (props.onSend && inputMessage) {
      props.onSend(inputMessage)
    }

    clearInputMessage()
  }

  const clearInputMessage = () => {
    setInputMessage('')
  }

  return (
    <SendBoxStyled onSubmit={(event: React.FormEvent) => handleSubmit(event)}>
      <SendBoxTextareaStyled>
        <InputText
          type="textarea"
          // label="Сообщение"
          placeholder="Сообщение"
          value={inputMessage}
          onInput={(value: string) => setInputMessage(value)}
        />
      </SendBoxTextareaStyled>
      <SendBoxSubmitStyled>
        <ShortButton
          lightIconSource={telegramLightIconSource}
          darkIconSource={telegramDarkIconSource}
          circle={true}
        />
      </SendBoxSubmitStyled>
    </SendBoxStyled>
  )
}

export default SendBox
