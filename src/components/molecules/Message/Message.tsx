import React from 'react'
import MessageBox from '../../atoms/MessageBox/MessageBox'
import MessageStyled from './MessageStyled'

interface IProps {
  message: string
  date: Date
  align?: 'left' | 'right'
  fullWidth?: boolean
}

const Message = (props: IProps) => {
  return (
    <MessageStyled align={props.align}>
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
