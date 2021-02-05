import React from 'react'
import { IContactItem } from '../../../store/contact/reducer'
import { ContactsItemStyled, ContactsStyled } from './ContactsStyled'
import Contact from '../../molecules/Contact/Contact'

interface IProps {
  items: IContactItem[]
  onClick?: (item: IContactItem) => void
}

const Contacts = (props: IProps) => {
  const handleClick = (item: IContactItem) => {
    if (props.onClick) {
      props.onClick(item)
    }
  }

  return (
    <ContactsStyled>
      {props.items.map((item: IContactItem) => (
        <ContactsItemStyled key={item.id}>
          <Contact
            id={item.id}
            firstName={item.firstName}
            lastName={item.lastName}
            avatar={item.avatar}
            isOnline={item.isOnline}
            lastMessage={null}
            onClick={() => handleClick(item)}
          />
        </ContactsItemStyled>
      ))}
    </ContactsStyled>
  )
}

export default Contacts
