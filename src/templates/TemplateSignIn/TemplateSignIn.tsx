import React from 'react'
import TemplateSignInStyled from './TemplateSignInStyled'
import InputText from '../../components/molecules/InputText/InputText'
import InputCheckbox from '../../components/molecules/InputCheckbox/InputCheckbox'
import Button from '../../components/atoms/Button/Button'

const TemplateSignIn = () => {
  return (
    <TemplateSignInStyled>
      <div className="container">
        <div className="row">
          <div className="offset-4" />
          <div className="col-lg-4">
            <InputText type="text" label="Логин" placeholder="Введите логин" />
            <InputText
              type="text"
              label="Пароль"
              placeholder="Введите пароль"
            />
            <InputCheckbox value="Запомнить меня" checked={false} />
            <Button fullWidth={true} />
          </div>
          <div className="offset-4" />
        </div>
      </div>
    </TemplateSignInStyled>
  )
}

export default TemplateSignIn
