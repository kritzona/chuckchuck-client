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
import SectionBlock from '../../components/molecules/SectionBlock/SectionBlock'
import InputToggle from '../../components/molecules/InputToggle/InputToggle'
import Select from '../../components/molecules/Select/Select'

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
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <SectionBlock title="Основные">
                  <InputToggle value="Темная тема" checked={true}></InputToggle>
                  <InputToggle value="Темная тема" checked={true}></InputToggle>
                  <InputToggle value="Темная тема" checked={true}></InputToggle>
                </SectionBlock>
              </div>
              <div className="col-lg-4">
                <SectionBlock title="Профиль">
                  <Select
                    type="select"
                    options={[
                      { id: 0, value: 'Мужской', checked: false },
                      { id: 1, value: 'Женский', checked: false },
                    ]}
                    placeholder="Выберите пол"
                  ></Select>
                  <Select
                    type="select"
                    options={[
                      { id: 0, value: 'Ярославль', checked: false },
                      { id: 1, value: 'Москва', checked: false },
                      { id: 2, value: 'Санкт-Петербург', checked: false },
                    ]}
                    placeholder="Выберите город"
                  ></Select>
                  <InputToggle value="Темная тема" checked={true}></InputToggle>
                  <InputToggle value="Темная тема" checked={true}></InputToggle>
                </SectionBlock>
              </div>
              <div className="col-lg-4">
                <SectionBlock title="Конфиденциальность">
                  <InputToggle value="Темная тема" checked={true}></InputToggle>
                  <InputToggle value="Темная тема" checked={true}></InputToggle>
                  <InputToggle value="Темная тема" checked={true}></InputToggle>
                  <InputToggle value="Темная тема" checked={true}></InputToggle>
                  <InputToggle value="Темная тема" checked={true}></InputToggle>
                  <InputToggle value="Темная тема" checked={true}></InputToggle>
                </SectionBlock>
              </div>
            </div>
          </div>
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
