import React from 'react'
import Text from '../Text/Text'

import ButtonStyled from './ButtonStyled'

interface IProps {
  type?: 'button' | 'reset' | 'submit'
  value?: string
  fullWidth?: boolean
  woBackground?: boolean
  disabled?: boolean
  onClick?: () => void
}

const Button = (props: IProps) => {
  const handleClick = () => {
    if (props.onClick) props.onClick()
  }

  return (
    <ButtonStyled
      type={props.type}
      fullWidth={props.fullWidth}
      woBackground={props.woBackground}
      disabled={props.disabled}
      onClick={() => handleClick()}
    >
      <Text type="text-small-bold">
        {props.value ? props.value : 'Отправить'}
      </Text>
    </ButtonStyled>
  )
}

export default Button
