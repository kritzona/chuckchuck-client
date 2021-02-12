import React from 'react'
import { ModalWindowStyled, ModalWindowHeaderStyled } from './ModalWindowStyled'
import ShortButton from '../../atoms/ShortButton/ShortButton'
import crossLightIconSource from '../../../assets/icons/cross-light.svg'
import crossDarkIconSource from '../../../assets/icons/cross-dark.svg'

interface IProps {
  onClose?: () => void
  children?: React.ReactNode
}

const ModalWindow = (props: IProps) => {
  const handleCloseButtonClick = () => {
    if (props.onClose) props.onClose()
  }

  return (
    <ModalWindowStyled>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ModalWindowHeaderStyled>
              <ShortButton
                lightIconSource={crossLightIconSource}
                darkIconSource={crossDarkIconSource}
                woBackground={true}
                iconAlign="right"
                onClick={() => handleCloseButtonClick()}
              />
            </ModalWindowHeaderStyled>
          </div>
        </div>
        {props.children && (
          <div className="row">
            <div className="col-lg-12">{props.children}</div>
          </div>
        )}
      </div>
    </ModalWindowStyled>
  )
}

export default ModalWindow
