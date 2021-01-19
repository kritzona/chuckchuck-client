import React from 'react'
import MessageBox from '../../atoms/MessageBox/MessageBox'
import Time from '../../molecules/Time/Time'
import './Message.scss'

interface IProps {
  message: string
  align?: 'left' | 'right'
}

const Message = (props: IProps) => {
  const messageClassNames = ['message']
  switch (props.align) {
    case 'left':
      messageClassNames.push('message--left')
      break
    case 'right':
      messageClassNames.push('message--right')
      break
    default:
      messageClassNames.push('message--left')
      break
  }

  return (
    <div className={messageClassNames.join(' ')}>
      <MessageBox
        message={props.message}
        align={props.align ? props.align : 'left'}
      ></MessageBox>
      <Time></Time>
    </div>
  )
}

export default Message
