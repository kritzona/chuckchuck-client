import React from 'react'
import { PartHeaderBodyStyled, PartHeaderStyled } from './PartHeaderStyled'

interface IProps {
  children?: React.ReactNode
}

const PartHeader = (props: IProps) => {
  return (
    <PartHeaderStyled>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <PartHeaderBodyStyled>{props.children}</PartHeaderBodyStyled>
          </div>
        </div>
      </div>
    </PartHeaderStyled>
  )
}

export default PartHeader
