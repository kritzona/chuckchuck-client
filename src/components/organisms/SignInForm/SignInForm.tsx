import React from 'react'

import InputText from '../../molecules/InputText/InputText'
import InputCheckbox from '../../molecules/InputCheckbox/InputCheckbox'
import Button from '../../atoms/Button/Button'

import SignInFormStyled from './SignInFormStyled'

interface IProps {}

const SignInForm = (props: IProps) => {
  return (
    <SignInFormStyled>
      <InputText type="text" label="Логин" placeholder="Введите логин" />
      <InputText type="text" label="Пароль" placeholder="Введите пароль" />
      <InputCheckbox value="Запомнить меня" checked={false} />
      <Button fullWidth={true} />
    </SignInFormStyled>
  )
}

export default SignInForm
