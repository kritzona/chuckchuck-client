import React from 'react'
import Messages from '../components/organisms/Messages/Messages'

interface IProps {
  dialogId: number
}

const MessagesContainer = (props: IProps) => {
  return <Messages />
}

export default MessagesContainer
