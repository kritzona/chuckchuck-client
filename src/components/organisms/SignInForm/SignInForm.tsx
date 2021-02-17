import React, { FormEvent, useState } from 'react'

import InputText from '../../molecules/InputText/InputText'
import InputCheckbox from '../../molecules/InputCheckbox/InputCheckbox'
import Button from '../../atoms/Button/Button'

import SignInFormStyled from './SignInFormStyled'
import { useDispatch } from 'react-redux'
import { notificationAddItemAction } from '../../../store/notification/actions'

interface IProps {
  onSubmit?: (login: string, password: string, remember: boolean) => void
  onSignUpClick?: () => void
}

const SignInForm = (props: IProps) => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  const dispatch = useDispatch()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    const errors = validate(login, password)
    errors.forEach((error) =>
      setTimeout(
        () =>
          dispatch(
            notificationAddItemAction({
              status: 'error',
              message: error,
            }),
          ),
        5,
      ),
    )

    if (props.onSubmit && errors.length === 0) {
      props.onSubmit(login, password, remember)

      reset()
    }
  }
  const handleSignUpClick = () => {
    if (props.onSignUpClick) props.onSignUpClick()
  }
  const handleLoginInput = (value: string) => setLogin(value)
  const handlePasswordInput = (value: string) => setPassword(value)
  const handleRememberClick = () => setRemember(!remember)

  const reset = () => {
    setLogin('')
    setPassword('')
    setRemember(false)
  }
  const validate = (login: string, password: string): string[] => {
    const errors: string[] = []

    if (login.length === 0 || password.length === 0) {
      errors.push('Не все поля заполнены')

      return errors
    }

    if (login.length > 20) errors.push('(Логин): Макс. длина - 20 символов')

    if (password.length > 128)
      errors.push('(Пароль): Макс. длина - 128 символов')
    if (password.length < 5) errors.push('(Пароль): Мин. длина - 5 символов')

    return errors
  }

  return (
    <SignInFormStyled onSubmit={(event: FormEvent) => handleSubmit(event)}>
      <InputText
        type="text"
        textType="text"
        label="Логин"
        placeholder="Введите логин"
        value={login}
        onInput={(value) => handleLoginInput(value)}
      />
      <InputText
        type="text"
        textType="password"
        label="Пароль"
        placeholder="Введите пароль"
        value={password}
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
