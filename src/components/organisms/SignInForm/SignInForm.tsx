import React, { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'

import InputText from '../../molecules/InputText/InputText'
import InputCheckbox from '../../molecules/InputCheckbox/InputCheckbox'
import Button from '../../atoms/Button/Button'

import SignInFormStyled from './SignInFormStyled'

interface IProps {}

const SignInForm = (props: IProps) => {
  const history = useHistory()

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    console.log(login, password, remember)
    history.push('/messenger')
  }
  const handleLoginInput = (value: string) => {
    setLogin(value)
  }
  const handlePasswordInput = (value: string) => {
    setPassword(value)
  }
  const handleRememberClick = () => {
    setRemember(!remember)
  }

  return (
    <SignInFormStyled onSubmit={(event: FormEvent) => handleSubmit(event)}>
      <InputText
        type="text"
        textType="text"
        label="Логин"
        placeholder="Введите логин"
        onInput={(value) => handleLoginInput(value)}
      />
      <InputText
        type="text"
        textType="password"
        label="Пароль"
        placeholder="Введите пароль"
        onInput={(value) => handlePasswordInput(value)}
      />
      <InputCheckbox
        value="Запомнить меня"
        checked={remember}
        onClick={() => handleRememberClick()}
      />
      <Button value="Войти" fullWidth={true} />
    </SignInFormStyled>
  )
}

export default SignInForm
