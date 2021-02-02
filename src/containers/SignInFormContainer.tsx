import React from 'react'
import SignInForm from '../components/organisms/SignInForm/SignInForm'
import { useDispatch } from 'react-redux'
import { userAuthAction } from '../store/user/actions'
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
      await userAPI.fetchSelfItem().then((item) => {
        dispatch(userAuthAction())
      })
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
