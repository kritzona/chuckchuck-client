import React from 'react'
import Text from '../Text/Text'
import Time from '../Time/Time'
import MessageBoxStyled from './MessageBoxStyled'

interface IProps {
  message: string
  align?: 'left' | 'right'
}

const MessageBox = (props: IProps) => {
  return (
    <MessageBoxStyled align={props.align}>
      <Text type="text-small-bold">{props.message}</Text>
      <Time />
    </MessageBoxStyled>
  )
}

export default MessageBox
