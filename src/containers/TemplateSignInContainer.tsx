import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import TemplateSignIn from '../templates/TemplateSignIn/TemplateSignIn'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { userStorage } from '../utils/user-storage'

interface IProps {}

const TemplateSignInContainer = (props: IProps) => {
  const { userId, userAccessToken } = userStorage()
  const history = useHistory()
  const user = useSelector((state: RootState) => state.user)

  useEffect(() => {
    if (user.isAuth) {
      history.push('/contacts')
    }
  }, [user, history])

  return (
    <React.Fragment>
      {(!userId || !userAccessToken) && !user.isAuth && <TemplateSignIn />}
    </React.Fragment>
  )
}

export default TemplateSignInContainer
