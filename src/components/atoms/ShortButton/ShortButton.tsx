import React from 'react'
import ShortButtonStyled from './ShortButtonStyled'

interface IProps {
  lightIconSource: string
  darkIconSource: string
  circle?: boolean
  woBackground?: boolean
  onClick?: () => void
}

const ShortButton = (props: IProps) => {
  const shortButtonClassNames = ['short-button']
  if (props.circle) {
    shortButtonClassNames.push('short-button--circle')
  }
  if (props.woBackground) {
    shortButtonClassNames.push('short-button--wo-background')
  }

  return (
    <ShortButtonStyled
      lightIconSource={props.lightIconSource}
      darkIconSource={props.darkIconSource}
      circle={props.circle}
      woBackground={props.woBackground}
    />
  )
}

export default ShortButton
