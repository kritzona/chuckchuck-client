import React from 'react'

import SignInForm from '../../components/organisms/SignInForm/SignInForm'
import MainHeader from '../../components/organisms/MainHeader/MainHeader'
import ToggleTheme from '../../components/organisms/ToggleTheme/ToggleTheme'

import { TemplateSignInStyled } from './TemplateSignInStyled'
import Header from '../../components/organisms/Header/Header'
import PartHeader from '../../parts/PartHeader/PartHeader'
import PartContent from '../../parts/PartContent/PartContent'
import Text from '../../components/atoms/Text/Text'
import PartFooter from '../../parts/PartFooter/PartFooter'
import Footer from '../../components/organisms/Footer/Footer'

const TemplateSignIn = () => {
  return (
    <TemplateSignInStyled>
      <PartHeader>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Header
                leftChildren={<MainHeader />}
                rightChildren={<ToggleTheme />}
              />
            </div>
          </div>
        </div>
      </PartHeader>
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
        <PartFooter>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <Footer>
                  <Text type="text-sub-bold">
                    2021 &copy; Repository:
                    <br />
                    https://github.com/kritzona/chuckchuck
                  </Text>
                </Footer>
              </div>
            </div>
          </div>
        </PartFooter>
      </PartContent>
    </TemplateSignInStyled>
  )
}

export default TemplateSignIn
