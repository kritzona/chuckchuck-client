import React from 'react'
import TemplateContactsStyled from './TemplateContactsStyled'
import PartHeader from '../../parts/PartHeader/PartHeader'
import MainHeader from '../../components/organisms/MainHeader/MainHeader'
import PartContent from '../../parts/PartContent/PartContent'
import Text from '../../components/atoms/Text/Text'
import Contact from '../../components/molecules/Contact/Contact'
import PartFooter from '../../parts/PartFooter/PartFooter'

interface IProps {}

const TemplateContacts = (props: IProps) => {
  return (
    <TemplateContactsStyled>
      <PartHeader>
        <MainHeader />
      </PartHeader>
      <PartContent>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Text type="h2">Контакты</Text>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 mb-4">
              <Contact />
            </div>
            <div className="col-lg-3 mb-4">
              <Contact />
            </div>
            <div className="col-lg-3 mb-4">
              <Contact />
            </div>
            <div className="col-lg-3 mb-4">
              <Contact />
            </div>
            <div className="col-lg-3 mb-4">
              <Contact />
            </div>
          </div>
        </div>
      </PartContent>
      <PartFooter>
        <Text type="text-sub-bold">
          2021 &copy; Repository:
          <br />
          https://github.com/kritzona/chuckchuck
        </Text>
      </PartFooter>
    </TemplateContactsStyled>
  )
}

export default TemplateContacts
