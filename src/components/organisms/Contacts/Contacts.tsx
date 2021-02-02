import React from 'react'
import { IContactItemWithLastMessage } from '../../../store/contact/reducer'
import { ContactsItemStyled, ContactsStyled } from './ContactsStyled'
import Contact from '../../molecules/Contact/Contact'

interface IProps {
  items: IContactItemWithLastMessage[]
}

const Contacts = (props: IProps) => {
  return (
    <ContactsStyled>
      {props.items.map((item: IContactItemWithLastMessage) => (
        <ContactsItemStyled key={item.id}>
          <Contact
            id={item.id}
            firstName={item.firstName}
            lastName={item.lastName}
            avatar={item.avatar}
            isOnline={item.isOnline}
            lastMessage={item.lastMessage}
          />
        </ContactsItemStyled>
      ))}
    </ContactsStyled>
  )
}

export default Contacts
