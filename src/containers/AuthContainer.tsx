import React, { useEffect, useState } from 'react'
import { userFetchAccountAction } from '../store/user/actions'
import { useDispatch, useSelector } from 'react-redux'
import {
  contactFetchItemsAction,
  contactUpdateLastVisitedAtAction,
} from '../store/contact/actions'
import { RootState } from '../store/store'
import initWebsocket from '../utils/init-websocket'
import { fetchUserStorage } from '../utils/user-storage'
import { withRouter } from 'react-router-dom'

interface IProps {
  match: {}
  location: {}
  history: {}
  children?: React.ReactNode
}

const AuthContainer = (props: IProps) => {
  const socket = initWebsocket()
  const [init, setInit] = useState(false)
  const contactItems = useSelector((state: RootState) => state.contact.items)
  const dispatch = useDispatch()

  const updateUserData = () => {
    const { userId, userAccessToken } = fetchUserStorage()

    if (userId && userAccessToken) {
      dispatch(userFetchAccountAction(userId, userAccessToken))
      dispatch(contactFetchItemsAction(userId, userAccessToken))
    }
  }
  const updateUserLastVisited = () => {
    const { userId, userAccessToken } = fetchUserStorage()

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
  }

  if (!init) {
    updateUserData()
    updateUserLastVisited()

    setInit(true)
  }

  return <React.Fragment>{init && props.children}</React.Fragment>
}

export default withRouter(AuthContainer)
