import React from 'react'

import SignInForm from '../../components/organisms/SignInForm/SignInForm'
import MainHeader from '../../components/organisms/MainHeader/MainHeader'

import {
  TemplateSignInContentStyled,
  TemplateSignInFooterStyled,
  TemplateSignInHeaderStyled,
  TemplateSignInStyled,
} from './TemplateSignInStyled'
import PartHeader from '../../parts/PartHeader/PartHeader'
import PartContent from '../../parts/PartContent/PartContent'
import Text from '../../components/atoms/Text/Text'
import PartFooter from '../../parts/PartFooter/PartFooter'

const TemplateSignIn = () => {
  return (
    <TemplateSignInStyled>
      <TemplateSignInHeaderStyled>
        <PartHeader>
          <MainHeader />
        </PartHeader>
      </TemplateSignInHeaderStyled>
      <TemplateSignInContentStyled>
        <PartContent>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <Text type="h2">Вход</Text>
              </div>
            </div>
            <div className="row">
              <div className="offset-4" />
              <div className="col-lg-4">
                <SignInForm />
              </div>
              <div className="offset-4" />
            </div>
          </div>
        </PartContent>
      </TemplateSignInContentStyled>
      <TemplateSignInFooterStyled>
        <PartFooter>
          <Text type="text-sub-bold">
            2021 &copy; Repository:
            <br />
            https://github.com/kritzona/chuckchuck
          </Text>
        </PartFooter>
      </TemplateSignInFooterStyled>
    </TemplateSignInStyled>
  )
}

export default TemplateSignIn
