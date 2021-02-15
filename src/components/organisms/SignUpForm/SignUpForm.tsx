import React, { useState } from 'react'

import InputText from '../../molecules/InputText/InputText'
import Button from '../../atoms/Button/Button'

import SignUpFormStyled from './SignUpFormStyled'

interface IProps {
  onSubmit?: (
    login: string,
    firstName: string,
    lastName: string,
    password: string,
  ) => void
  onSignInClick?: () => void
}

const SignUpForm = (props: IProps) => {
  const [login, setLogin] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if (props.onSubmit) props.onSubmit(login, firstName, lastName, password)
  }
  const handleSignInClick = () => {
    if (props.onSignInClick) props.onSignInClick()
  }
  const handleLoginInput = (value: string) => setLogin(value)
  const handleFirstNameInput = (value: string) => setFirstName(value)
  const handleLastNameInput = (value: string) => setLastName(value)
  const handlePasswordInput = (value: string) => setPassword(value)
  const handleConfirmPasswordInput = (value: string) =>
    setConfirmPassword(value)

  return (
    <SignUpFormStyled
      onSubmit={(event: React.FormEvent) => handleSubmit(event)}
    >
      <InputText
        type="text"
        textType="text"
        label="Логин"
        placeholder="Введите логин"
        onInput={(value) => handleLoginInput(value)}
      />
      <InputText
        type="text"
        textType="text"
        label="Имя"
        placeholder="Введите имя"
        onInput={(value) => handleFirstNameInput(value)}
      />
      <InputText
        type="text"
        textType="text"
        label="Фамилия"
        placeholder="Введите фамилию"
        onInput={(value) => handleLastNameInput(value)}
      />
      <InputText
        type="text"
        textType="password"
        label="Пароль"
        placeholder="Введите пароль"
        onInput={(value) => handlePasswordInput(value)}
      />
      <InputText
        type="text"
        textType="password"
        label="Подтверждение пароля"
        placeholder="Подтвердите пароль"
        onInput={(value) => handleConfirmPasswordInput(value)}
      />
      <Button type="submit" value="Создать аккаунт" fullWidth={true}></Button>
      <Button
        value="Войти"
        fullWidth={true}
        woBackground={true}
        onClick={() => handleSignInClick()}
      ></Button>
    </SignUpFormStyled>
  )
}

export default SignUpForm
