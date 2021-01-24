import React from 'react'
import {
  PartMessengerFooterBodyStyled,
  PartMessengerFooterStyled,
} from './PartMessengerFooterStyled'

interface IProps {
  children: React.ReactNode
}

const PartMessengerFooter = (props: IProps) => {
  return (
    <PartMessengerFooterStyled>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <PartMessengerFooterBodyStyled>
              {props.children}
            </PartMessengerFooterBodyStyled>
          </div>
        </div>
      </div>
    </PartMessengerFooterStyled>
  )
}

export default PartMessengerFooter
