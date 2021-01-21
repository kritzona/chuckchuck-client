import React from 'react'
import Message from '../../molecules/Message/Message'
import MessagesStyled from './MessagesStyled'

const Messages = () => {
  return (
    <MessagesStyled>
      <Message message="Hello, Kitty" align="left" />
      <Message message="Hello, Kitty" align="left" />
      <Message message="Hello, Kitty" align="right" />
      <Message message="Hello, Kitty" align="left" />
      <Message message="Hello, Kitty" align="right" />
      <Message message="Hello, Kitty" align="right" />
      <Message message="Hello, Kitty" align="left" />
      <Message message="Hello, Kitty" align="right" />
    </MessagesStyled>
  )
}

export default Messages
