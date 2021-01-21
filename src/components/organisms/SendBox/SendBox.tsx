import React from 'react'
import ShortButton from '../../atoms/ShortButton/ShortButton'
import telegramLightIconSource from '../../../assets/icons/telegram-light.svg'
import telegramDarkIconSource from '../../../assets/icons/telegram-dark.svg'
import InputText from '../../molecules/InputText/InputText'
import {
  SendBoxStyled,
  SendBoxSubmitStyled,
  SendBoxTextareaStyled,
} from './SendBoxStyled'

const SendBox = () => {
  return (
    <SendBoxStyled>
      <SendBoxTextareaStyled>
        <InputText
          type="textarea"
          // label="Сообщение"
          placeholder="Сообщение"
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
