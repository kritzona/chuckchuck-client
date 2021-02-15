import React from 'react'
import SignUpForm from '../components/organisms/SignUpForm/SignUpForm'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userRegisterAction } from '../store/user/actions'

interface IProps {}

const SignUpFormContainer = (props: IProps) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const handleSubmit = (
    login: string,
    firstName: string,
    lastName: string,
    password: string,
  ) => {
    dispatch(userRegisterAction(login, firstName, lastName, password))
  }
  const handleSignInClick = () => history.push('/')

  return (
    <SignUpForm
      onSubmit={(...attrs) => handleSubmit(...attrs)}
      onSignInClick={() => handleSignInClick()}
    ></SignUpForm>
  )
}

export default SignUpFormContainer
