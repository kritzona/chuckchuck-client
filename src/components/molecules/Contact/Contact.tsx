import React from 'react'
import { useHistory } from 'react-router-dom'
import ContactStyled from './ContactStyled'
import Message from '../Message/Message'
import User from '../User/User'
import { IMessageItem } from '../../../store/messenger/reducer'

interface IProps {
  id: number
  firstName: string
  lastName: string
  avatar: string | null
  isOnline: boolean
  lastMessage: IMessageItem | null
}

const Contact = (props: IProps) => {
  const history = useHistory()

  return (
    <ContactStyled onClick={() => history.push(`/messenger/${props.id}`)}>
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
    </ContactStyled>
  )
}

export default Contact
