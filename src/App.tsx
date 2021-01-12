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
            <InputText></InputText>
          </div>
          <div className="col-lg-3">
            <InputLabel></InputLabel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
