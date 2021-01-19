import React from 'react'
import Text from '../Text/Text'
import Time from '../Time/Time'
import './MessageBox.scss'

interface IProps {
  message: string
  align?: 'left' | 'right'
}

const MessageBox = (props: IProps) => {
  const messageBoxClassNames = ['message-box']
  switch (props.align) {
    case 'left':
      messageBoxClassNames.push('message-box--left')
      break
    case 'right':
      messageBoxClassNames.push('message-box--right')
      break
    default:
      messageBoxClassNames.push('message-box--left')
      break
  }

  return (
    <div className={messageBoxClassNames.join(' ')}>
      <Text type="text-small-bold">{props.message}</Text>
      <Time></Time>
    </div>
  )
}

export default MessageBox
