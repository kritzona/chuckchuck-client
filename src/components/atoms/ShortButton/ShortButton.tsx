import React from 'react'

import './ShortButton.scss'

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
    <button className={shortButtonClassNames.join(' ')}>
      <img
        src={props.lightIconSource}
        alt="light-icon"
        className="short-button__icon short-button__icon--light"
      />
      <img
        src={props.darkIconSource}
        alt="dark-icon"
        className="short-button__icon short-button__icon--dark"
      />
    </button>
  )
}

export default ShortButton
