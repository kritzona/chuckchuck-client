import { url } from 'inspector'
import React from 'react'

import './ShortButton.scss'

interface IProps {
  lightIconSource: string
  darkIconSource: string
  woBackground?: boolean
  onClick?: () => void
}

const ShortButton = (props: IProps) => {
  const shortButtonClassNames = ['short-button']
  if (props.woBackground) {
    shortButtonClassNames.push('short-button--wo-background')
  }

  return (
    <button className={shortButtonClassNames.join(' ')}>
      <img
        src={props.lightIconSource}
        className="short-button__icon short-button__icon--light"
      />
      <img
        src={props.darkIconSource}
        className="short-button__icon short-button__icon--dark"
      />
    </button>
  )
}

export default ShortButton
