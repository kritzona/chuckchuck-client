import React from 'react'

import SignInForm from '../../components/organisms/SignInForm/SignInForm'
import MainHeader from '../../components/organisms/MainHeader/MainHeader'
import ToggleTheme from '../../components/organisms/ToggleTheme/ToggleTheme'

import {
  TemplateSignInFormStyled,
  TemplateSignInHeaderStyled,
  TemplateSignInStyled,
} from './TemplateSignInStyled'

const TemplateSignIn = () => {
  return (
    <TemplateSignInStyled>
      <TemplateSignInHeaderStyled>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex flex-row justify-content-between">
              <MainHeader />
              <ToggleTheme />
            </div>
          </div>
        </div>
      </TemplateSignInHeaderStyled>
      <TemplateSignInFormStyled>
        <div className="container">
          <div className="row">
            <div className="offset-4" />
            <div className="col-lg-4">
              <SignInForm />
            </div>
            <div className="offset-4" />
          </div>
        </div>
      </TemplateSignInFormStyled>
    </TemplateSignInStyled>
  )
}

export default TemplateSignIn
