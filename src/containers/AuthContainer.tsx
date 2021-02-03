import React, { useEffect, useState } from 'react'
import userAPI from '../api/UserAPI'
import { userAuthAction } from '../store/user/actions'
import avatarImageSource from '../assets/images/avatar.png'
import { useDispatch } from 'react-redux'

interface IProps {
  children?: React.ReactNode
}

const AuthContainer = (props: IProps) => {
  const [init, setInit] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!init) {
      userAPI.fetchSelfItem().then((item) => {
        if (item) {
          dispatch(
            userAuthAction({
              id: item.id,
              login: item.login,
              firstName: item.firstName,
              lastName: item.lastName,
              avatar: avatarImageSource,
            }),
          )
        }

        setInit(true)
      })
    }
  }, [init, dispatch])

  return <React.Fragment>{init && props.children}</React.Fragment>
}

export default AuthContainer
