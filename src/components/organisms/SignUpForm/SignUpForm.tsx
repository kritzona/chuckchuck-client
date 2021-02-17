import React, { useState } from 'react'

import InputText from '../../molecules/InputText/InputText'
import Button from '../../atoms/Button/Button'

import SignUpFormStyled from './SignUpFormStyled'
import { useDispatch } from 'react-redux'
import {
  notificationAddItemAction,
  notificationResetItemsAction,
} from '../../../store/notification/actions'

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

  const dispatch = useDispatch()

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const errors = validate(
      login,
      firstName,
      lastName,
      password,
      confirmPassword,
    )
    errors.forEach((error) =>
      setTimeout(
        () =>
          dispatch(
            notificationAddItemAction({
              status: 'error',
              message: error,
            }),
          ),
        1,
      ),
    )

    if (props.onSubmit && errors.length === 0) {
      props.onSubmit(login, firstName, lastName, password)

      reset()
    }
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

  const reset = () => {
    setLogin('')
    setFirstName('')
    setLastName('')
    setPassword('')
    setConfirmPassword('')
  }
  const validate = (
    login: string,
    firstName: string,
    lastName: string,
    password: string,
    confirmPassword: string,
  ): string[] => {
    const errors: string[] = []

    if (
      login.length === 0 ||
      firstName.length === 0 ||
      lastName.length === 0 ||
      password.length === 0 ||
      confirmPassword.length === 0
    ) {
      errors.push('Не все поля заполнены')

      return errors
    }

    if (login.length > 20) errors.push('(Логин): Макс. длина - 20 символов')
    if (firstName.length > 20) errors.push('(Имя): Макс. длина - 20 символов')
    if (lastName.length > 20)
      errors.push('(Фамилия): Макс. длина - 20 символов')

    if (password.length > 128)
      errors.push('(Пароль): Макс. длина - 128 символов')
    if (password.length < 5) errors.push('(Пароль): Мин. длина - 5 символов')
    if (password !== confirmPassword)
      errors.push('(Пароль): Пароли не совпадают')

    return errors
  }

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
