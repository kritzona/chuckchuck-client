import React from 'react'
import SignUpForm from '../components/organisms/SignUpForm/SignUpForm'
import { useHistory } from 'react-router-dom'

interface IProps {}

const SignUpFormContainer = (props: IProps) => {
  const history = useHistory()

  const handleSubmit = (
    login: string,
    firstName: string,
    lastName: string,
    password: string,
  ) => console.log(login, firstName, lastName, password)
  const handleSignInClick = () => history.push('/')

  return (
    <SignUpForm
      onSubmit={(...attrs) => handleSubmit(...attrs)}
      onSignInClick={() => handleSignInClick()}
    ></SignUpForm>
  )
}

export default SignUpFormContainer
