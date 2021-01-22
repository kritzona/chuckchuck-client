import React from 'react'
import { ShortButtonIconStyled, ShortButtonStyled } from './ShortButtonStyled'

interface IProps {
  lightIconSource: string
  darkIconSource: string
  circle?: boolean
  woBackground?: boolean
  onClick?: () => void
}

const ShortButton = (props: IProps) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick()
    }
  }

  return (
    <ShortButtonStyled
      circle={props.circle}
      woBackground={props.woBackground}
      onClick={() => handleClick()}
    >
      <ShortButtonIconStyled
        src={props.lightIconSource}
        alt="light-icon"
        data-icon-theme="light"
      />
      <ShortButtonIconStyled
        src={props.darkIconSource}
        alt="dark-icon"
        data-icon-theme="dark"
      />
    </ShortButtonStyled>
  )
}

export default ShortButton
