import React from 'react'
import './Toggle.scss'

interface IProps {
  active?: boolean
}

const Toggle = (props: IProps) => {
  const toggleClassNames = ['toggle']
  if (props.active) {
    toggleClassNames.push('toggle--active')
  }

  return <div className={toggleClassNames.join(' ')}></div>
}

export default Toggle
