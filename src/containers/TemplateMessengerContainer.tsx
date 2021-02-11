import React, { useContext, useEffect, useState } from 'react'
import TemplateMessenger from '../templates/TemplateMessenger/TemplateMessenger'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { IContactItem } from '../store/contact/types'
import {
  messageAddItemAction,
  messengerFetchMessagesAction,
  messengerInitAction,
} from '../store/messenger/actions'
import { userStorage } from '../utils/user-storage'
import SocketContext from '../contexts/SocketContext'
import { IDialogAPIMessageItem } from '../api/DialogAPI'

interface IProps {}
interface IParams {
  contactId: string
  dialogId: string
}

const TemplateMessengerContainer = (props: IProps) => {
  const socket = useContext(SocketContext)
  const { userId, userAccessToken } = userStorage()

  const [init, setInit] = useState(false)
  const { contactId, dialogId } = useParams<IParams>()
  const dispatch = useDispatch()

  const messageItems = useSelector(
    (state: RootState) => state.messenger.message.items,
  )
  const contactItem = useSelector((state: RootState):
    | IContactItem
    | undefined => {
    return state.contact.items.find(
      (item: IContactItem) => item.id === contactId,
    )
  })

  useEffect(() => {
    if (!init) {
      if (userId && userAccessToken) {
        dispatch(messengerInitAction(dialogId, contactId))
        dispatch(
          messengerFetchMessagesAction(dialogId, userId, userAccessToken),
        )

        socket.on(
          `sended-message:dialog-${dialogId}`,
          (payload: { message: IDialogAPIMessageItem }) => {
            if (payload.message.senderId !== userId) {
              dispatch(
                messageAddItemAction({
                  id: payload.message.id,
                  senderId: payload.message.senderId,
                  recipientId: payload.message.recipientId,
                  content: payload.message.content,
                  departureDate: new Date(payload.message.createdAt),
                }),
              )
            }
          },
        )

        setInit(true)
      }
    }
  }, [init, dialogId, contactId, dispatch, userAccessToken, userId, socket])

  return (
    <React.Fragment>
      {contactItem && contactItem.dialogId && init && (
        <TemplateMessenger
          dialogId={dialogId}
          contactItem={contactItem}
          messageItems={messageItems}
        />
      )}
    </React.Fragment>
  )
}

export default TemplateMessengerContainer
