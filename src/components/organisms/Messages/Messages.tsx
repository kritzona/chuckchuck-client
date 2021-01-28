import React from 'react'
import Message from '../../molecules/Message/Message'
import MessagesStyled from './MessagesStyled'
import { IMessageItem } from '../../../store/messenger/reducer'

interface IProps {
  items: IMessageItem[]
}

const Messages = (props: IProps) => {
  return (
    <MessagesStyled>
      {props.items.map((item) => (
        <Message message={item.content} align="left" />
      ))}
    </MessagesStyled>
  )
}

export default Messages
