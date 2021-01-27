import React from 'react'
import {
  FooterColumnStyled,
  FooterCopyStyled,
  FooterStyled,
} from './FooterStyled'
import Text from '../../atoms/Text/Text'

interface IProps {}

const Footer = (props: IProps) => {
  return (
    <FooterStyled>
      <FooterCopyStyled>
        <Text type="text-sub-bold">
          2021 &copy; Repository: https://github.com/kritzona/chuckchuck
        </Text>
      </FooterCopyStyled>
    </FooterStyled>
  )
}

export default Footer
