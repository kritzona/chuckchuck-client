import React from 'react'
import { ContactAlertStyled, ContactStyled } from './ContactStyled'
import Message from '../Message/Message'
import User from '../User/User'
import { IMessageItem } from '../../../store/messenger/reducer'
import Text from '../../atoms/Text/Text'

interface IProps {
  id: string | number
  firstName: string
  lastName: string
  avatar: string | null
  isOnline: boolean
  lastMessage: IMessageItem | null
  onClick?: () => void
}

const Contact = (props: IProps) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick()
    }
  }

  return (
    <ContactStyled onClick={() => handleClick()}>
      <User
        firstName={props.firstName}
        lastName={props.lastName}
        avatar={props.avatar}
        isOnline={props.isOnline}
      />
      {props.lastMessage && (
        <Message
          message={props.lastMessage.content}
          align="left"
          fullWidth={true}
        />
      )}
      {props.lastMessage === null && (
        <ContactAlertStyled>
          <Text type="text-small-bold">Пока нет сообщений</Text>
        </ContactAlertStyled>
      )}
    </ContactStyled>
  )
}

export default Contact
