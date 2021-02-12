import React, { useState } from 'react'
import {
  TemplateContactsAccountStyled,
  TemplateContactsContentStyled,
  TemplateContactsFooterStyled,
  TemplateContactsHeaderStyled,
  TemplateContactsStyled,
} from './TemplateContactsStyled'
import PartContent from '../../parts/PartContent/PartContent'
import Text from '../../components/atoms/Text/Text'
import Footer from '../../components/organisms/Footer/Footer'
import PartFooter from '../../parts/PartFooter/PartFooter'
import ContactsContainer from '../../containers/ContactsContainer'
import ShortButton from '../../components/atoms/ShortButton/ShortButton'
import ModalWindow from '../../components/molecules/ModalWindow/ModalWindow'
import SearchContactModal from '../../components/organisms/SearchContactModal/SearchContactModal'

import addLightIconSource from '../../assets/icons/add-light.svg'
import addDarkIconSource from '../../assets/icons/add-dark.svg'
import AccountContainer from '../../containers/AccountContainer'

interface IProps {}

const TemplateContacts = (props: IProps) => {
  const [shownSearchContactModal, setShownSearchContactModal] = useState(false)

  const handleAddButtonClick = () => {
    setShownSearchContactModal(true)
  }
  const handleSearchContactModalClose = () => {
    setShownSearchContactModal(false)
  }

  return (
    <TemplateContactsStyled>
      <TemplateContactsContentStyled>
        <PartContent>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <TemplateContactsAccountStyled>
                  <AccountContainer />
                </TemplateContactsAccountStyled>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <TemplateContactsHeaderStyled>
                  <Text type="h2">Контакты</Text>
                  <ShortButton
                    lightIconSource={addLightIconSource}
                    darkIconSource={addDarkIconSource}
                    onClick={() => handleAddButtonClick()}
                  />
                </TemplateContactsHeaderStyled>
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

      {shownSearchContactModal && (
        <ModalWindow onClose={() => handleSearchContactModalClose()}>
          <SearchContactModal></SearchContactModal>
        </ModalWindow>
      )}
    </TemplateContactsStyled>
  )
}

export default TemplateContacts
