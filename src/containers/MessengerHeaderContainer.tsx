import React from 'react'
import MessengerHeader from '../components/organisms/MessengerHeader/MessengerHeader'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { IContactItem } from '../store/contact/types'

interface IProps {}
interface IParams {
  contactId: string
  dialogId: string
}

const MessengerHeaderContainer = (props: IProps) => {
  const { contactId, dialogId } = useParams<IParams>()
  const contactItem = useSelector((state: RootState):
    | IContactItem
    | undefined => {
    return state.contact.items.find(
      (item: IContactItem) => item.id === contactId,
    )
  })

  return (
    <React.Fragment>
      {contactItem && (
        <MessengerHeader
          contactItem={{
            firstName: contactItem.firstName || 'Гость',
            lastName: contactItem.lastName || 'Гость',
            avatar: contactItem.avatar || null,
            isOnline: contactItem.isOnline || false,
          }}
        />
      )}
    </React.Fragment>
  )
}

export default MessengerHeaderContainer
