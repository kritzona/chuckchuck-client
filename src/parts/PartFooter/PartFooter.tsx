import React from 'react'
import { PartFooterBodyStyled, PartFooterStyled } from './PartFooterStyled'

interface IProps {
  children?: React.ReactNode
}

const PartFooter = (props: IProps) => {
  return (
    <PartFooterStyled>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <PartFooterBodyStyled>{props.children}</PartFooterBodyStyled>
          </div>
        </div>
      </div>
    </PartFooterStyled>
  )
}

export default PartFooter
