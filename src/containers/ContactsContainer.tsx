import React, { useEffect, useState } from 'react'
import Contacts from '../components/organisms/Contacts/Contacts'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { contactFetchItemsAction } from '../store/contact/actions'
import { IContactItem } from '../store/contact/reducer'

interface IProps {}

const ContactsContainer = (props: IProps) => {
  const history = useHistory()
  const contactItems = useSelector((state: RootState) => state.contact.items)
  const dispatch = useDispatch()
  const [init, setInit] = useState(false)

  useEffect(() => {
    if (!init) {
      const userId =
        localStorage.getItem('chuckchuck:user:id') ||
        sessionStorage.getItem('chuckchuck:user:id')
      const userAccessToken =
        localStorage.getItem('chuckchuck:user:access-token') ||
        sessionStorage.getItem('chuckchuck:user:access-token')

      if (userId && userAccessToken) {
        dispatch(contactFetchItemsAction(userId, userAccessToken))
      }

      setInit(true)
    }
  }, [init, dispatch])

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
