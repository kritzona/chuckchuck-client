import React from 'react'

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
import SignInFormContainer from '../../containers/SignInFormContainer'

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
                <SignInFormContainer />
              </div>
              <div className="offset-4" />
            </div>
          </div>
          <TemplateSignInFooterStyled>
            <PartFooter>
              <Text type="text-sub-bold">
                2021 &copy; Repository:
                <br />
                https://github.com/kritzona/chuckchuck
              </Text>
            </PartFooter>
          </TemplateSignInFooterStyled>
        </PartContent>
      </TemplateSignInContentStyled>
    </TemplateSignInStyled>
  )
}

export default TemplateSignIn
