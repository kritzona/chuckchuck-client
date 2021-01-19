import React from 'react'
import Text from '../../atoms/Text/Text'
import './Time.scss'

const Time = () => {
  return (
    <div className="time">
      <div className="time__icon"></div>
      <Text type="text-sub-regular">19 Янв 2021</Text>
    </div>
  )
}

export default Time
