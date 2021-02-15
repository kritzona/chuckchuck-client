import React from 'react'

import Text from '../../components/atoms/Text/Text'
import SignUpFormContainer from '../../containers/SignUpFormContainer'

import {
  TemplateSignUpContentStyled,
  TemplateSignUpFooterStyled,
  TemplateSignUpStyled,
} from './TemplateSignUpStyled'
import PartContent from '../../parts/PartContent/PartContent'
import PartFooter from '../../parts/PartFooter/PartFooter'
import Footer from '../../components/organisms/Footer/Footer'

const TemplateSignUp = () => {
  return (
    <TemplateSignUpStyled>
      <TemplateSignUpContentStyled>
        <PartContent>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <Text type="h2">Регистрация</Text>
              </div>
            </div>
            <div className="row">
              <div className="offset-4" />
              <div className="col-lg-4">
                <SignUpFormContainer />
              </div>
              <div className="offset-4" />
            </div>
          </div>
        </PartContent>
      </TemplateSignUpContentStyled>
      <TemplateSignUpFooterStyled>
        <PartFooter>
          <Footer />
        </PartFooter>
      </TemplateSignUpFooterStyled>
    </TemplateSignUpStyled>
  )
}

export default TemplateSignUp
