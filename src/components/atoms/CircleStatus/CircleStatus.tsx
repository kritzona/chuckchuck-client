import React from 'react'
import './CircleStatus.scss'

interface IProps {
  color: string
}

const CircleStatus = (props: IProps) => {
  const circleStatusClassNames = ['circle-status']
  switch (props.color) {
    case 'red':
      circleStatusClassNames.push('circle-status--red')
      break
    case 'green':
      circleStatusClassNames.push('circle-status--green')
      break
    default:
      circleStatusClassNames.push('circle-status--red')
      break
  }

  return <div className={circleStatusClassNames.join(' ')}></div>
}

export default CircleStatus
