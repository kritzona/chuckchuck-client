import React from 'react'
import Message from '../../molecules/Message/Message'
import './Messages.scss'

const Messages = () => {
  return (
    <div className="messages">
      <Message message="Hello, Kitty" align="left"></Message>
      <Message message="Hello, Kitty" align="left"></Message>
      <Message message="Hello, Kitty" align="right"></Message>
      <Message message="Hello, Kitty" align="left"></Message>
      <Message message="Hello, Kitty" align="right"></Message>
      <Message message="Hello, Kitty" align="right"></Message>
      <Message message="Hello, Kitty" align="left"></Message>
      <Message message="Hello, Kitty" align="right"></Message>
    </div>
  )
}

export default Messages
