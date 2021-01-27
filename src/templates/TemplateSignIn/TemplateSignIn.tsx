import React from 'react'

import Text from '../../components/atoms/Text/Text'
import SignInFormContainer from '../../containers/SignInFormContainer'

import {
  TemplateSignInContentStyled,
  TemplateSignInFooterStyled,
  TemplateSignInStyled,
} from './TemplateSignInStyled'
import PartContent from '../../parts/PartContent/PartContent'
import PartFooter from '../../parts/PartFooter/PartFooter'
import Footer from '../../components/organisms/Footer/Footer'

const TemplateSignIn = () => {
  return (
    <TemplateSignInStyled>
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
        </PartContent>
      </TemplateSignInContentStyled>
      <TemplateSignInFooterStyled>
        <PartFooter>
          <Footer />
        </PartFooter>
      </TemplateSignInFooterStyled>
    </TemplateSignInStyled>
  )
}

export default TemplateSignIn
