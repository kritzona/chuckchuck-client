import React from 'react'
import Text from '../Text/Text'

import ButtonStyled from './ButtonStyled'

interface IProps {
  value?: string
  fullWidth?: boolean
}

const Button = (props: IProps) => {
  return (
    <ButtonStyled fullWidth={props.fullWidth}>
      <Text type="text-small-bold">
        {props.value ? props.value : 'Отправить'}
      </Text>
    </ButtonStyled>
  )
}

export default Button
