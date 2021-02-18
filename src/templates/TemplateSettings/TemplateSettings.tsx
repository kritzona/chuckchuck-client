import React from 'react'
import {
  TemplateSettingsContentStyled,
  TemplateSettingsFooterStyled,
  TemplateSettingsHeaderStyled,
  TemplateSettingsStyled,
} from './TemplateSettingsStyled'
import PartContent from '../../parts/PartContent/PartContent'
import PartFooter from '../../parts/PartFooter/PartFooter'
import Footer from '../../components/organisms/Footer/Footer'
import Text from '../../components/atoms/Text/Text'

interface IProps {}

const TemplateSettings = (props: IProps) => {
  return (
    <TemplateSettingsStyled>
      <TemplateSettingsContentStyled>
        <PartContent>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <TemplateSettingsHeaderStyled>
                  <Text type="h2">Настройки</Text>
                </TemplateSettingsHeaderStyled>
              </div>
            </div>
          </div>
          <div className="container"></div>
        </PartContent>
      </TemplateSettingsContentStyled>
      <TemplateSettingsFooterStyled>
        <PartFooter>
          <Footer />
        </PartFooter>
      </TemplateSettingsFooterStyled>
    </TemplateSettingsStyled>
  )
}

export default TemplateSettings
