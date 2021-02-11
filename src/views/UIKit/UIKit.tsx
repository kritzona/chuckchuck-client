import React from 'react'
import Button from '../../components/atoms/Button/Button'
import ShortButton from '../../components/atoms/ShortButton/ShortButton'
import Radio from '../../components/atoms/Radio/Radio'
import Checkbox from '../../components/atoms/Checkbox/Checkbox'
import Text from '../../components/atoms/Text/Text'
import Avatar from '../../components/atoms/Avatar/Avatar'
import InputField from '../../components/atoms/InputField/InputField'
import InputTextElement from '../../components/atoms/InputTextElement/InputTextElement'
import InputText from '../../components/molecules/InputText/InputText'
import InputLabel from '../../components/atoms/InputLabel/InputLabel'
import Toggle from '../../components/atoms/Toggle/Toggle'
import CircleStatus from '../../components/atoms/CircleStatus/CircleStatus'
import InputStatus from '../../components/atoms/InputStatus/InputStatus'
import MessageBox from '../../components/atoms/MessageBox/MessageBox'
import Logotype from '../../components/atoms/Logotype/Logotype'
import Select from '../../components/molecules/Select/Select'
import OnlineStatus from '../../components/molecules/OnlineStatus/OnlineStatus'
import LogotypeWithName from '../../components/molecules/LogotypeWithName/LogotypeWithName'
import User from '../../components/molecules/User/User'
import Message from '../../components/molecules/Message/Message'
import telegramLightIconSource from '../../assets/icons/telegram-light.svg'
import telegramDarkIconSource from '../../assets/icons/telegram-dark.svg'
import Messages from '../../components/organisms/Messages/Messages'
import SendBox from '../../components/organisms/SendBox/SendBox'
import './UIKit.scss'
import MessengerHeaderContainer from '../../containers/MessengerHeaderContainer'

const UIKit = () => {
  return (
    <div className="ui-kit">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Text type="h1">UI Kit</Text>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <Button />
          </div>
          <div className="col-lg-3">
            <ShortButton
              lightIconSource={telegramLightIconSource}
              darkIconSource={telegramDarkIconSource}
            />
          </div>
          <div className="col-lg-3">
            <Radio />
          </div>
          <div className="col-lg-3">
            <Checkbox />
          </div>
          <div className="col-lg-3">
            <Avatar imageSource={''} />
          </div>
          <div className="col-lg-3">
            <InputField />
          </div>
          <div className="col-lg-3">
            <InputTextElement />
          </div>
          <div className="col-lg-3">
            <InputText type="text" label="Поле" />
          </div>
          <div className="col-lg-3">
            <InputLabel>Лейбл</InputLabel>
          </div>
          <div className="col-lg-3">
            <Toggle />
          </div>
          <div className="col-lg-3">
            <CircleStatus color="green" />
          </div>
          <div className="col-lg-3">
            <InputStatus />
          </div>
          <div className="col-lg-3">
            <MessageBox message="Hello, Kitty!" date={new Date()} />
          </div>
          <div className="col-lg-3">
            <Logotype />
          </div>
          <div className="col-lg-3">
            <InputText type="textarea" label="Поле" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <Select
              type="select"
              options={[
                { id: 0, value: 'Первый', checked: false },
                { id: 1, value: 'Второй', checked: false },
                { id: 2, value: 'Третий', checked: false },
              ]}
              placeholder="Выберите элементы"
            />
          </div>
          <div className="col-lg-3">
            <OnlineStatus status="offline" />
          </div>
          <div className="col-lg-3">
            <LogotypeWithName />
          </div>
          <div className="col-lg-3">
            <User
              firstName={'Гость'}
              lastName={'Гость'}
              avatar={''}
              isOnline={true}
            />
          </div>
          <div className="col-lg-4">
            <Message
              message="Hello, Kitty!!!"
              date={new Date()}
              align="right"
            />
          </div>
          <div className="col-lg-4">
            <MessengerHeaderContainer />
            <SendBox />
          </div>
          <div className="col-lg-4">
            <Messages items={[]} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UIKit
