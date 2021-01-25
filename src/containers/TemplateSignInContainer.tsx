import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import TemplateSignIn from '../templates/TemplateSignIn/TemplateSignIn'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

interface IProps {}

const TemplateSignInContainer = (props: IProps) => {
  const history = useHistory()
  const user = useSelector((state: RootState) => state.user)

  useEffect(() => {
    if (user.isAuth) {
      history.push('/contacts')
    }
  }, [user, history])

  return <React.Fragment>{!user.isAuth && <TemplateSignIn />}</React.Fragment>
}

export default TemplateSignInContainer
