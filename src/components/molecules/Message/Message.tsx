import React from 'react'
import MessageBox from '../../atoms/MessageBox/MessageBox'
import MessageStyled from './MessageStyled'

interface IProps {
  message: string
  align?: 'left' | 'right'
  fullWidth?: boolean
}

const Message = (props: IProps) => {
  return (
    <MessageStyled align={props.align}>
      <MessageBox
        message={props.message}
        align={props.align ? props.align : 'left'}
        fullWidth={props.fullWidth}
      />
    </MessageStyled>
  )
}

export default Message
