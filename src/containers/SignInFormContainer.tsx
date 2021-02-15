import React from 'react'
import SignInForm from '../components/organisms/SignInForm/SignInForm'
import { useDispatch } from 'react-redux'
import { userLoginAction } from '../store/user/actions'
import { useHistory } from 'react-router-dom'

interface IProps {}

const SignInFormContainer = (props: IProps) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const handleSubmit = async (
    login: string,
    password: string,
    remember: boolean,
  ) => dispatch(userLoginAction(login, password, remember))
  const handleSignUpClick = () => history.push('/sign-up')

  return (
    <SignInForm
      onSubmit={(login: string, password: string, remember: boolean) =>
        handleSubmit(login, password, remember)
      }
      onSignUpClick={() => handleSignUpClick()}
    />
  )
}

export default SignInFormContainer
