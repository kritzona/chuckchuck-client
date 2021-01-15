import React from 'react'
import './Toggle.scss'

interface IProps {
  checked?: boolean
}

const Toggle = (props: IProps) => {
  const toggleClassNames = ['toggle']
  if (props.checked) {
    toggleClassNames.push('toggle--checked')
  }

  return <div className={toggleClassNames.join(' ')}></div>
}

export default Toggle
