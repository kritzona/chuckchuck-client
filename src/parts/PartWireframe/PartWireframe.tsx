import React from 'react'
import {
  PartWireframeContentStyled,
  PartWireframeHeaderStyled,
  PartWireframeStyled,
} from './PartWireframeStyled'
import PartHeader from '../PartHeader/PartHeader'
import PartContent from '../PartContent/PartContent'

interface IProps {
  headerChildren?: React.ReactNode
  contentChildren?: React.ReactNode
}

const PartWireframe = (props: IProps) => {
  return (
    <PartWireframeStyled>
      <PartWireframeHeaderStyled>
        <PartHeader>{props.headerChildren}</PartHeader>
      </PartWireframeHeaderStyled>
      <PartWireframeContentStyled>
        <PartContent>{props.contentChildren}</PartContent>
      </PartWireframeContentStyled>
    </PartWireframeStyled>
  )
}

export default PartWireframe
