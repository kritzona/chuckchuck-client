import React, { useEffect, useState } from 'react'
import TemplateMessenger from '../templates/TemplateMessenger/TemplateMessenger'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { IContactItem } from '../store/contact/types'
import {
  messengerFetchMessagesAction,
  messengerInitAction,
} from '../store/messenger/actions'
import initWebsocket from '../utils/init-websocket'
import { fetchUserStorage } from '../utils/user-storage'

interface IProps {}
interface IParams {
  contactId: string
  dialogId: string
}

const TemplateMessengerContainer = (props: IProps) => {
  const socket = initWebsocket()

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
      const { userId, userAccessToken } = fetchUserStorage()

      if (userId && userAccessToken) {
        dispatch(messengerInitAction(dialogId, contactId))
        dispatch(
          messengerFetchMessagesAction(dialogId, userId, userAccessToken),
        )

        socket.on(
          `sended-message:dialog-${dialogId}`,
          (payload: { senderId: string }) => {
            if (payload.senderId !== userId) {
              dispatch(
                messengerFetchMessagesAction(dialogId, userId, userAccessToken),
              )
            }
          },
        )

        setInit(true)
      }
    }
  }, [init, dialogId, contactId, dispatch, socket])

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
