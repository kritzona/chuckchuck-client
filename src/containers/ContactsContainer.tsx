import React from 'react'
import Contacts from '../components/organisms/Contacts/Contacts'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import {
  IContactItem,
  IContactItemWithLastMessage,
} from '../store/contact/reducer'
import { IDialogItem } from '../store/messenger/reducer'

interface IProps {}

const ContactsContainer = (props: IProps) => {
  const contactItems = useSelector(
    (state: RootState): IContactItemWithLastMessage[] => {
      const _contactItems: IContactItemWithLastMessage[] = []

      state.contact.items.map((contactItem: IContactItem) => {
        let _contactItem: IContactItemWithLastMessage = {
          ...contactItem,
          lastMessage: null,
        }

        if (contactItem.dialogId) {
          state.messenger.dialog.items.map((dialogItem: IDialogItem) => {
            if (
              dialogItem.id === contactItem.dialogId &&
              dialogItem.message.items.length
            ) {
              let lastMessage =
                dialogItem.message.items[dialogItem.message.items.length - 1]
              _contactItem.lastMessage = lastMessage
            }

            return null
          })
        }

        _contactItems.push(_contactItem)

        return null
      })

      return _contactItems
    },
  )

  return <Contacts items={contactItems} />
}

export default ContactsContainer
