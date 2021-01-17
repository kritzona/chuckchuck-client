import React from 'react'
import './App.scss'
import Button from './components/atoms/Button/Button'
import ShortButton from './components/atoms/ShortButton/ShortButton'
import Radio from './components/atoms/Radio/Radio'
import Checkbox from './components/atoms/Checkbox/Checkbox'
import Text from './components/atoms/Text/Text'
import Avatar from './components/atoms/Avatar/Avatar'
import InputField from './components/atoms/InputField/InputField'
import InputTextElement from './components/atoms/InputTextElement/InputTextElement'
import InputText from './components/molecules/InputText/InputText'
import InputLabel from './components/atoms/InputLabel/InputLabel'
import Toggle from './components/atoms/Toggle/Toggle'
import CircleStatus from './components/atoms/CircleStatus/CircleStatus'
import InputStatus from './components/atoms/InputStatus/InputStatus'
import MessageBox from './components/atoms/MessageBox/MessageBox'
import Logotype from './components/atoms/Logotype/Logotype'
import Select from './components/molecules/Select/Select'
import OnlineStatus from './components/molecules/OnlineStatus/OnlineStatus'
import LogotypeWithName from './components/molecules/LogotypeWithName/LogotypeWithName'
import User from './components/molecules/User/User'
import Message from './components/molecules/Message/Message'

interface IProps {}

const App = (props: IProps) => {
  return (
    <div className="app">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Text type="h1">UI Kit</Text>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <Button></Button>
          </div>
          <div className="col-lg-3">
            <ShortButton></ShortButton>
          </div>
          <div className="col-lg-3">
            <Radio></Radio>
          </div>
          <div className="col-lg-3">
            <Checkbox></Checkbox>
          </div>
          <div className="col-lg-3">
            <Avatar></Avatar>
          </div>
          <div className="col-lg-3">
            <InputField></InputField>
          </div>
          <div className="col-lg-3">
            <InputTextElement></InputTextElement>
          </div>
          <div className="col-lg-3">
            <InputText type="text"></InputText>
          </div>
          <div className="col-lg-3">
            <InputLabel></InputLabel>
          </div>
          <div className="col-lg-3">
            <Toggle></Toggle>
          </div>
          <div className="col-lg-3">
            <CircleStatus color="green"></CircleStatus>
          </div>
          <div className="col-lg-3">
            <InputStatus></InputStatus>
          </div>
          <div className="col-lg-3">
            <MessageBox message="Hello, Kitty!"></MessageBox>
          </div>
          <div className="col-lg-3">
            <Logotype></Logotype>
          </div>
          <div className="col-lg-3">
            <InputText type="textarea"></InputText>
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
            ></Select>
          </div>
          <div className="col-lg-3">
            <OnlineStatus status="offline"></OnlineStatus>
          </div>
          <div className="col-lg-3">
            <LogotypeWithName></LogotypeWithName>
          </div>
          <div className="col-lg-3">
            <User></User>
          </div>
          <div className="col-lg-4">
            <Message message="Hello, Kitty!!!" align="right"></Message>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
