import React from 'react'
import SignInForm from '../components/organisms/SignInForm/SignInForm'
import { useDispatch } from 'react-redux'
import { userLoginAction } from '../store/user/actions'

interface IProps {}

const SignInFormContainer = (props: IProps) => {
  const dispatch = useDispatch()

  const handleSubmit = async (
    login: string,
    password: string,
    remember: boolean,
  ) => {
    dispatch(userLoginAction(login, password, remember))
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
