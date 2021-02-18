import React from 'react'
import {
  SectionBlockContentStyled,
  SectionBlockFooterStyled,
  SectionBlockHeaderStyled,
  SectionBlockStyled,
} from './SectionBlockStyled'
import Text from '../../atoms/Text/Text'

interface IProps {
  title: string
  children?: React.ReactNode
}

const SectionBlock = (props: IProps) => {
  return (
    <SectionBlockStyled>
      <SectionBlockHeaderStyled>
        <Text type="h3">{props.title}</Text>
      </SectionBlockHeaderStyled>
      <SectionBlockContentStyled>{props.children}</SectionBlockContentStyled>
      <SectionBlockFooterStyled></SectionBlockFooterStyled>
    </SectionBlockStyled>
  )
}

export default SectionBlock
