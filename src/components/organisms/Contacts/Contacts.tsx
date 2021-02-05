import React from 'react'
import { IContactItem } from '../../../store/contact/reducer'
import { ContactsItemStyled, ContactsStyled } from './ContactsStyled'
import Contact from '../../molecules/Contact/Contact'

interface IProps {
  items: IContactItem[]
  onClick?: (id: string | number) => void
}

const Contacts = (props: IProps) => {
  const handleClick = (id: string | number) => {
    if (props.onClick) {
      props.onClick(id)
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
            onClick={() => handleClick(item.id)}
          />
        </ContactsItemStyled>
      ))}
    </ContactsStyled>
  )
}

export default Contacts
