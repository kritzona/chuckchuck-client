import React, { useEffect, useRef } from 'react'
import {
  TemplateContactsContentStyled,
  TemplateContactsFooterStyled,
  TemplateContactsHeaderStyled,
  TemplateContactsStyled,
} from './TemplateContactsStyled'
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
    </TemplateContactsStyled>
  )
}

export default TemplateContacts
