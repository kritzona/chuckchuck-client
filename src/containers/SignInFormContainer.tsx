import React from 'react'
import SignInForm from '../components/organisms/SignInForm/SignInForm'
import { useDispatch } from 'react-redux'
import { userFetchSelf } from '../store/user/actions'
import userAPI from '../api/UserAPI'

interface IProps {}

const SignInFormContainer = (props: IProps) => {
  const dispatch = useDispatch()

  const handleSubmit = async (
    login: string,
    password: string,
    remember: boolean,
  ) => {
    const auth = await userAPI.login(login, password, remember)

    if (auth) {
      const userId = localStorage.getItem('chuckchuck:user:id')
      const userAccessToken = localStorage.getItem(
        'chuckchuck:user:access-token',
      )

      if (userId && userAccessToken) {
        dispatch(userFetchSelf(userId, userAccessToken))
      }
    } else {
      alert('Неверный логин / пароль')
    }
  }

  return (
    <SignInForm
      onSubmit={(login: string, password: string, remember: boolean) =>
        handleSubmit(login, password, remember)
      }
    />
  )
}

export default SignInFormContainer
