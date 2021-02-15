import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { userStorage } from '../utils/user-storage'
import TemplateSignUp from '../templates/TemplateSignUp/TemplateSignUp'

interface IProps {}

const TemplateSignUpContainer = (props: IProps) => {
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
      {(!userId || !userAccessToken) && !user.isAuth && <TemplateSignUp />}
    </React.Fragment>
  )
}

export default TemplateSignUpContainer
