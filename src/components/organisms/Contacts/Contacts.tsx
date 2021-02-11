import React from 'react'
import { IContactItem } from '../../../store/contact/types'
import { ContactsItemStyled, ContactsStyled } from './ContactsStyled'
import Contact from '../../molecules/Contact/Contact'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'

interface IProps {
  items: IContactItem[]
  onClick?: (item: IContactItem) => void
}

const Contacts = (props: IProps) => {
  const dateNow = useSelector((state: RootState) =>
    state.root.dateNow.getTime(),
  )

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
            isOnline={dateNow - item.lastVisitedAt.getTime() <= 30000}
            lastMessage={null}
            onClick={() => handleClick(item)}
          />
        </ContactsItemStyled>
      ))}
    </ContactsStyled>
  )
}

export default Contacts
