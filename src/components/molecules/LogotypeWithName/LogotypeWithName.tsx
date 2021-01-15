import React from 'react'
import Logotype from '../../atoms/Logotype/Logotype'
import Text from '../../atoms/Text/Text'
import './LogotypeWithName.scss'

const LogotypeWithName = () => {
  return (
    <div className="logotype-with-name">
      <Logotype></Logotype>
      <Text type="text-small-bold">ChuckChuck</Text>
    </div>
  )
}

export default LogotypeWithName
