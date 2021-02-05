import React from 'react'
import Messages from '../components/organisms/Messages/Messages'
import { IMessageItem } from '../store/messenger/reducer'

interface IProps {
  messageItems: IMessageItem[]
}

const MessagesContainer = (props: IProps) => {
  return <Messages items={props.messageItems} />
}

export default MessagesContainer
