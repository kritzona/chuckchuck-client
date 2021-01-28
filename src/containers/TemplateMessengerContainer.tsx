import React, { useEffect, useState } from 'react'
import TemplateMessenger from '../templates/TemplateMessenger/TemplateMessenger'
import { useHistory, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { IContactItem } from '../store/contact/reducer'

interface IProps {}
interface IParams {
  contactId: string
}

const TemplateMessengerContainer = (props: IProps) => {
  const history = useHistory()
  const { contactId } = useParams<IParams>()

  const user = useSelector((state: RootState) => state.user)
  const contactItem = useSelector((state: RootState):
    | IContactItem
    | undefined => {
    return state.contact.items.find(
      (item: IContactItem) => item.id === parseInt(contactId),
    )
  })

  useEffect(() => {
    if (!user.isAuth || !contactItem) {
      history.push('/')
    } else {
      if (!contactItem.dialogId) {

      }
    }
  })

  return (
    <React.Fragment>
      {user.isAuth && contactItem && contactItem.dialogId && (
        <TemplateMessenger
          contactId={contactItem.id}
          dialogId={contactItem.dialogId}
        />
      )}
    </React.Fragment>
  )
}

export default TemplateMessengerContainer
