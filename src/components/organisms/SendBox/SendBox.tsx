import React from 'react'
import ShortButton from '../../atoms/ShortButton/ShortButton'
import telegramLightIconSource from '../../../assets/icons/telegram-light.svg'
import telegramDarkIconSource from '../../../assets/icons/telegram-dark.svg'
import InputText from '../../molecules/InputText/InputText'
import './Sendbox.scss'

const SendBox = () => {
  return (
    <div className="sendbox">
      <div className="sendbox__textarea">
        <InputText
          type="textarea"
          label="Сообщение"
          placeholder="Сообщение"
        ></InputText>
      </div>
      <div className="sendbox__submit">
        <ShortButton
          lightIconSource={telegramLightIconSource}
          darkIconSource={telegramDarkIconSource}
          circle={true}
        ></ShortButton>
      </div>
    </div>
  )
}

export default SendBox
