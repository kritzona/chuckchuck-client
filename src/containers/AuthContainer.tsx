import React, { useCallback, useContext, useEffect, useState } from 'react'
import { userFetchAccountAction } from '../store/user/actions'
import { useDispatch, useSelector } from 'react-redux'
import {
  contactFetchItemsAction,
  contactUpdateLastVisitedAtAction,
} from '../store/contact/actions'
import { RootState } from '../store/store'
import { userStorage } from '../utils/user-storage'
import { withRouter } from 'react-router-dom'
import SocketContext from '../contexts/SocketContext'
import AuthContext from '../contexts/AuthContext'

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
