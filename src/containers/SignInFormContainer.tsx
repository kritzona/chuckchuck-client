import React from 'react'
import SignInForm from '../components/organisms/SignInForm/SignInForm'
import { useDispatch } from 'react-redux'
import { userAuthAction } from '../store/user/actions'
import userAPI from '../api/UserAPI'
import avatarImageSource from '../assets/images/avatar.png'

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
      await userAPI.fetchSelfItem().then((item) => {
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
      })
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
