import React, { useCallback, useContext, useEffect, useState } from 'react'
import { userFetchAccountAction } from '../store/user/actions'
import { useDispatch, useSelector } from 'react-redux'
import {
  contactFetchItemsAction,
  contactUpdateLastMessageAction,
  contactUpdateLastVisitedAtAction,
} from '../store/contact/actions'
import { RootState } from '../store/store'
import { userStorage } from '../utils/user-storage'
import { withRouter } from 'react-router-dom'
import SocketContext from '../contexts/SocketContext'
import AuthContext from '../contexts/AuthContext'
import { IDialogAPIMessageItem } from '../api/DialogAPI'

interface IProps {
  match: {}
  location: {}
  history: {}
  children?: React.ReactNode
}

const AuthContainer = (props: IProps) => {
  const socket = useContext(SocketContext)
  const { userId, userAccessToken } = userStorage()

  const [init, setInit] = useState(false)

  const user = useSelector((state: RootState) => state.user)
  const contactItems = useSelector((state: RootState) => state.contact.items)
  const dispatch = useDispatch()

  const updateUserData = useCallback(() => {
    if (userId && userAccessToken) {
      dispatch(userFetchAccountAction(userId, userAccessToken))
    }
  }, [dispatch, userId, userAccessToken])
  const updateContacts = useCallback(() => {
    if (userId && userAccessToken) {
      dispatch(contactFetchItemsAction(userId, userAccessToken))
    }
  }, [dispatch, userId, userAccessToken])
  const subscribeContactsOnUpdate = useCallback(() => {
    if (userId && userAccessToken) {
      contactItems.forEach((item) => {
        socket.off(`updated-user:user-${item.id}`)
        socket.off(`updated-last-message:user-${item.id}`)
        socket.on(
          `updated-user:user-${item.id}`,
          (payload: { lastVisitedAt: number }) => {
            dispatch(
              contactUpdateLastVisitedAtAction(
                item.id,
                new Date(payload.lastVisitedAt),
              ),
            )
          },
        )
        socket.on(
          `updated-last-message:user-${item.id}`,
          (payload: { lastMessage: IDialogAPIMessageItem }) => {
            dispatch(
              contactUpdateLastMessageAction(item.id, {
                id: payload.lastMessage.id,
                senderId: payload.lastMessage.senderId,
                recipientId: payload.lastMessage.recipientId,
                content: payload.lastMessage.content,
                departureDate: new Date(payload.lastMessage.createdAt),
              }),
            )
          },
        )
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contactItems, socket, dispatch])

  if (!init) {
    updateUserData()
    updateContacts()
    subscribeContactsOnUpdate()

    setInit(true)
  }

  useEffect(() => {
    updateUserData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.location])
  useEffect(() => {
    subscribeContactsOnUpdate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contactItems])
  useEffect(() => {
    if (user.isAuth) {
      updateContacts()

      socket.off(`updated-contacts:user-${userId}`)
      socket.on(`updated-contacts:user-${userId}`, () => updateContacts())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.isAuth])

  return (
    <React.Fragment>
      <AuthContext.Provider
        value={{
          refreshContacts: () => {
            updateContacts()
          },
        }}
      >
        {init && props.children}
      </AuthContext.Provider>
    </React.Fragment>
  )
}

export default withRouter(AuthContainer)
