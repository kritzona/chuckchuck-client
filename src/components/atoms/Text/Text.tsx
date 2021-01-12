import React from 'react'
import './Text.scss'

interface IProps {
  type: string
}
type TPropsWithChilder = React.PropsWithChildren<IProps>

const TextH1Element = (content: React.ReactNode) => (
  <h1 className="text text--h1">{content}</h1>
)
const TextH2Element = (content: React.ReactNode) => (
  <h2 className="text text--h2">{content}</h2>
)
const TextH3Element = (content: React.ReactNode) => (
  <h2 className="text text--h3">{content}</h2>
)

const TextNormalRegularElement = (content: React.ReactNode) => (
  <span className="text text--normal text--regular">{content}</span>
)
const TextNormalBoldElement = (content: React.ReactNode) => (
  <span className="text text--normal text--bold">{content}</span>
)

const TextSmallRegularElement = (content: React.ReactNode) => (
  <span className="text text--small text--regular">{content}</span>
)
const TextSmallBoldElement = (content: React.ReactNode) => (
  <span className="text text--small text--bold">{content}</span>
)

const Text = (props: TPropsWithChilder) => {
  let textElement = <span></span>
  switch (props.type) {
    case 'h1':
      textElement = TextH1Element(props.children)
      break
    case 'h2':
      textElement = TextH2Element(props.children)
      break
    case 'h3':
      textElement = TextH3Element(props.children)
      break
    case 'text-normal-regular':
      textElement = TextNormalRegularElement(props.children)
      break
    case 'text-normal-bold':
      textElement = TextNormalBoldElement(props.children)
      break
    case 'text-small-regular':
      textElement = TextSmallRegularElement(props.children)
      break
    case 'text-small-bold':
      textElement = TextSmallBoldElement(props.children)
      break
    default:
      textElement = TextNormalRegularElement(props.children)
      break
  }

  return textElement
}

export default Text
