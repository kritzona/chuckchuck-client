import React from 'react'
import Text from '../Text/Text'

import ButtonStyled from './ButtonStyled'

interface IProps {
  type?: 'button' | 'reset' | 'submit'
  value?: string
  fullWidth?: boolean
  woBackground?: boolean
}

const Button = (props: IProps) => {
  return (
    <ButtonStyled
      type={props.type}
      fullWidth={props.fullWidth}
      woBackground={props.woBackground}
    >
      <Text type="text-small-bold">
        {props.value ? props.value : 'Отправить'}
      </Text>
    </ButtonStyled>
  )
}

export default Button
