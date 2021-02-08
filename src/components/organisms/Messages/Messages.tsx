import React from 'react'
import Message from '../../molecules/Message/Message'
import MessagesStyled from './MessagesStyled'
import { IMessageItem } from '../../../store/messenger/types'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'

interface IProps {
  items: IMessageItem[]
}

const Messages = (props: IProps) => {
  const user = useSelector((state: RootState) => state.user)

  return (
    <MessagesStyled>
      {props.items.map((item) => (
        <Message
          key={item.id}
          message={item.content}
          align={item.senderId === user.id ? 'right' : 'left'}
        />
      ))}
    </MessagesStyled>
  )
}

export default Messages
