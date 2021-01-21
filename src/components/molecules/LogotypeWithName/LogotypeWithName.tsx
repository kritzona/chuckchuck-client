import React from 'react'
import Logotype from '../../atoms/Logotype/Logotype'
import Text from '../../atoms/Text/Text'
import LogotypeWithNameStyled from './LogotypeWithNameStyled'

const LogotypeWithName = () => {
  return (
    <LogotypeWithNameStyled>
      <Logotype />
      <Text type="text-small-bold">ChuckChuck</Text>
    </LogotypeWithNameStyled>
  )
}

export default LogotypeWithName
