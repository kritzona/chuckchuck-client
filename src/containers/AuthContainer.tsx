import React, { useEffect, useState } from 'react'
import userAPI from '../api/UserAPI'
import { userAuthAction, userFetchSelf } from '../store/user/actions'
import avatarImageSource from '../assets/images/avatar.png'
import { useDispatch } from 'react-redux'
import authSaga from '../sagas/authSaga'

interface IProps {
  children?: React.ReactNode
}

const AuthContainer = (props: IProps) => {
  const [init, setInit] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!init) {
      const userId = localStorage.getItem('chuckchuck:user:id')
      const userAccessToken = localStorage.getItem(
        'chuckchuck:user:access-token',
      )

      if (userId && userAccessToken) {
        dispatch(userFetchSelf(userId, userAccessToken))
      }

      setInit(true)
    }
  }, [init, dispatch])

  return <React.Fragment>{init && props.children}</React.Fragment>
}

export default AuthContainer
