import React, { FormEvent } from 'react'

import InputText from '../../molecules/InputText/InputText'
import InputCheckbox from '../../molecules/InputCheckbox/InputCheckbox'
import Button from '../../atoms/Button/Button'

import SignInFormStyled from './SignInFormStyled'

interface IProps {}

const SignInForm = (props: IProps) => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    console.log(event)
  }

  return (
    <SignInFormStyled onSubmit={(event: FormEvent) => handleSubmit(event)}>
      <InputText
        type="text"
        textType="text"
        label="Логин"
        placeholder="Введите логин"
      />
      <InputText
        type="text"
        textType="password"
        label="Пароль"
        placeholder="Введите пароль"
      />
      <InputCheckbox value="Запомнить меня" checked={false} />
      <Button value="Войти" fullWidth={true} />
    </SignInFormStyled>
  )
}

export default SignInForm
