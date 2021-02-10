import React, { useEffect, useState } from 'react'
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
import initWebsocket from '../utils/init-websocket'
import { userStorage } from '../utils/user-storage'
import { IMessageItem } from '../store/messenger/types'

interface IProps {}
interface IParams {
  contactId: string
  dialogId: string
}

const TemplateMessengerContainer = (props: IProps) => {
  const socket = initWebsocket()
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
          (payload: { message: IMessageItem }) => {
            if (payload.message.senderId !== userId) {
              dispatch(messageAddItemAction(payload.message))
            }
          },
        )

        setInit(true)
      }
    }
  }, [init, dialogId, contactId, dispatch, socket, userAccessToken, userId])

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
