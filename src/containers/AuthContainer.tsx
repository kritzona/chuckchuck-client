import React, { useEffect, useState } from 'react'
import { userFetchAccountAction } from '../store/user/actions'
import { useDispatch, useSelector } from 'react-redux'
import { contactFetchItemsAction } from '../store/contact/actions'
import { RootState } from '../store/store'
import initWebsocket from '../utils/init-websocket'

interface IProps {
  children?: React.ReactNode
}

const AuthContainer = (props: IProps) => {
  const socket = initWebsocket()
  const [init, setInit] = useState(false)
  const contactItems = useSelector((state: RootState) => state.contact.items)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!init) {
      const userId =
        localStorage.getItem('chuckchuck:user:id') ||
        sessionStorage.getItem('chuckchuck:user:id')
      const userAccessToken =
        localStorage.getItem('chuckchuck:user:access-token') ||
        sessionStorage.getItem('chuckchuck:user:access-token')

      if (userId && userAccessToken) {
        dispatch(userFetchAccountAction(userId, userAccessToken))
        dispatch(contactFetchItemsAction(userId, userAccessToken))
      }

      setInit(true)
    }
  }, [init, dispatch])
  useEffect(() => {
    const userId =
      localStorage.getItem('chuckchuck:user:id') ||
      sessionStorage.getItem('chuckchuck:user:id')
    const userAccessToken =
      localStorage.getItem('chuckchuck:user:access-token') ||
      sessionStorage.getItem('chuckchuck:user:access-token')

    if (userId && userAccessToken) {
      contactItems.forEach((item) => {
        socket.off(`updated-user:user-${item.id}`)
        socket.on(`updated-user:user-${item.id}`, () => {
          dispatch(contactFetchItemsAction(userId, userAccessToken))
        })
      })
    }
  }, [contactItems])

  return <React.Fragment>{init && props.children}</React.Fragment>
}

export default AuthContainer
