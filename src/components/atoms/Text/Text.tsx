import React from 'react'
import {
  TextH1Styled,
  TextH2Styled,
  TextH3Styled,
  TextSpanStyled,
} from './TextStyled'

interface IProps {
  type: string
}
type TPropsWithChilder = React.PropsWithChildren<IProps>

const Text = (props: TPropsWithChilder) => {
  let textElement = <span></span>
  switch (props.type) {
    case 'h1':
      textElement = <TextH1Styled>{props.children}</TextH1Styled>
      break
    case 'h2':
      textElement = <TextH2Styled>{props.children}</TextH2Styled>
      break
    case 'h3':
      textElement = <TextH3Styled>{props.children}</TextH3Styled>
      break
    case 'text-normal-regular':
      textElement = (
        <TextSpanStyled size="normal" weight="regular">
          {props.children}
        </TextSpanStyled>
      )
      break
    case 'text-normal-bold':
      textElement = (
        <TextSpanStyled size="normal" weight="bold">
          {props.children}
        </TextSpanStyled>
      )
      break
    case 'text-small-regular':
      textElement = (
        <TextSpanStyled size="small" weight="regular">
          {props.children}
        </TextSpanStyled>
      )
      break
    case 'text-small-bold':
      textElement = (
        <TextSpanStyled size="small" weight="bold">
          {props.children}
        </TextSpanStyled>
      )
      break
    case 'text-sub-regular':
      textElement = (
        <TextSpanStyled size="sub" weight="regular">
          {props.children}
        </TextSpanStyled>
      )
      break
    case 'text-sub-bold':
      textElement = (
        <TextSpanStyled size="sub" weight="bold">
          {props.children}
        </TextSpanStyled>
      )
      break
    default:
      textElement = (
        <TextSpanStyled size="normal" weight="regular">
          {props.children}
        </TextSpanStyled>
      )
      break
  }

  return textElement
}

export default Text
