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
  const TemplateContactsHeaderRef = useRef<HTMLDivElement>(null)
  const TemplateContactsContentRef = useRef<HTMLDivElement>(null)
  const TemplateContactsFooterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let templateContactsHeaderHeight = 0
    let templateContactsFooterHeight = 0

    if (TemplateContactsHeaderRef && TemplateContactsHeaderRef.current) {
      templateContactsHeaderHeight =
        TemplateContactsHeaderRef.current.clientHeight
    }
    if (TemplateContactsFooterRef && TemplateContactsFooterRef.current) {
      templateContactsFooterHeight =
        TemplateContactsFooterRef.current.clientHeight
    }

    if (TemplateContactsContentRef && TemplateContactsContentRef.current) {
      TemplateContactsContentRef.current.style.height = `calc(100vh - ${templateContactsHeaderHeight}px)`
      TemplateContactsContentRef.current.style.maxHeight = `calc(100vh - ${templateContactsHeaderHeight}px)`
      TemplateContactsContentRef.current.style.paddingBottom = `${templateContactsFooterHeight}px`
    }
  })

  return (
    <TemplateContactsStyled>
      <TemplateContactsHeaderStyled ref={TemplateContactsHeaderRef}>
        <PartHeader>
          <MainHeader />
        </PartHeader>
      </TemplateContactsHeaderStyled>
      <TemplateContactsContentStyled ref={TemplateContactsContentRef}>
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
          <TemplateContactsFooterStyled ref={TemplateContactsFooterRef}>
            <PartFooter>
              <Text type="text-sub-bold">
                2021 &copy; Repository:
                <br />
                https://github.com/kritzona/chuckchuck
              </Text>
            </PartFooter>
          </TemplateContactsFooterStyled>
        </PartContent>
      </TemplateContactsContentStyled>
    </TemplateContactsStyled>
  )
}

export default TemplateContacts
