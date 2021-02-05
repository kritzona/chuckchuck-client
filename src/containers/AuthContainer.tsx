import React, { useEffect, useState } from 'react'
import { userFetchAccountAction } from '../store/user/actions'
import { useDispatch } from 'react-redux'
import { contactFetchItemsAction } from '../store/contact/actions'

interface IProps {
  children?: React.ReactNode
}

const AuthContainer = (props: IProps) => {
  const [init, setInit] = useState(false)
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

  return <React.Fragment>{init && props.children}</React.Fragment>
}

export default AuthContainer
