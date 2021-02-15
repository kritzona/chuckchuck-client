import React from 'react'
import Logotype from '../../atoms/Logotype/Logotype'
import Text from '../../atoms/Text/Text'
import LogotypeWithNameStyled from './LogotypeWithNameStyled'

interface IProps {
  onClick?: () => void
}

const LogotypeWithName = (props: IProps) => {
  const handleClick = () => {
    if (props.onClick) props.onClick()
  }

  return (
    <LogotypeWithNameStyled onClick={() => handleClick()}>
      <Logotype />
      <Text type="text-small-bold">ChuckChuck</Text>
    </LogotypeWithNameStyled>
  )
}

export default LogotypeWithName
