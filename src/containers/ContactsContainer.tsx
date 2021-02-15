import React, { useEffect, useState } from 'react'
import Contacts from '../components/organisms/Contacts/Contacts'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { IContactItem } from '../store/contact/types'

interface IProps {}

const ContactsContainer = (props: IProps) => {
  const history = useHistory()
  const contactItems = useSelector((state: RootState) => state.contact.items)

  const [init, setInit] = useState(false)

  useEffect(() => {
    if (!init) {
      setInit(true)
    }
  }, [init])
  useEffect(() => {
    console.log(contactItems)
  }, [contactItems])

  const handleClick = (item: IContactItem) => {
    history.push(`/messenger/${item.id}/${item.dialogId}`)
  }

  return (
    <React.Fragment>
      {init && (
        <Contacts
          items={contactItems}
          onClick={(item: IContactItem) => handleClick(item)}
        />
      )}
    </React.Fragment>
  )
}

export default ContactsContainer
