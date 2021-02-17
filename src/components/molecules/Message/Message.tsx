import React from 'react'
import MessageBox from '../../atoms/MessageBox/MessageBox'
import MessageStyled from './MessageStyled'

interface IProps {
  message: string
  date: Date
  align?: 'left' | 'right'
  fullWidth?: boolean
  opacity?: boolean
}

const Message = (props: IProps) => {
  return (
    <MessageStyled align={props.align} opacity={props.opacity}>
      <MessageBox
        message={props.message}
        date={props.date}
        align={props.align ? props.align : 'left'}
        fullWidth={props.fullWidth}
      />
    </MessageStyled>
  )
}

export default Message
