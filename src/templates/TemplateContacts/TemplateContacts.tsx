import React from 'react'
import {
  TemplateContactsContentStyled,
  TemplateContactsFooterStyled,
  TemplateContactsStyled,
} from './TemplateContactsStyled'
import PartContent from '../../parts/PartContent/PartContent'
import Text from '../../components/atoms/Text/Text'
import Footer from '../../components/organisms/Footer/Footer'
import PartFooter from '../../parts/PartFooter/PartFooter'
import ContactsContainer from '../../containers/ContactsContainer'

interface IProps {}

const TemplateContacts = (props: IProps) => {
  return (
    <TemplateContactsStyled>
      <TemplateContactsContentStyled>
        <PartContent>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Text type="h2">Контакты</Text>
              </div>
            </div>
          </div>
          <div className="container">
            <ContactsContainer />
          </div>
        </PartContent>
      </TemplateContactsContentStyled>
      <TemplateContactsFooterStyled>
        <PartFooter>
          <Footer />
        </PartFooter>
      </TemplateContactsFooterStyled>
    </TemplateContactsStyled>
  )
}

export default TemplateContacts
