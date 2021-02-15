import React, { FormEvent, useState } from 'react'

import InputText from '../../molecules/InputText/InputText'
import InputCheckbox from '../../molecules/InputCheckbox/InputCheckbox'
import Button from '../../atoms/Button/Button'

import SignInFormStyled from './SignInFormStyled'

interface IProps {
  onSubmit?: (login: string, password: string, remember: boolean) => void
  onSignUpClick?: () => void
}

const SignInForm = (props: IProps) => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    if (props.onSubmit) props.onSubmit(login, password, remember)
  }
  const handleSignUpClick = () => {
    if (props.onSignUpClick) props.onSignUpClick()
  }
  const handleLoginInput = (value: string) => setLogin(value)
  const handlePasswordInput = (value: string) => setPassword(value)
  const handleRememberClick = () => setRemember(!remember)

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
      <Button type="submit" value="Войти" fullWidth={true} />
      <Button
        value="Создать аккаунт"
        fullWidth={true}
        woBackground={true}
        onClick={() => handleSignUpClick()}
      ></Button>
    </SignInFormStyled>
  )
}

export default SignInForm
