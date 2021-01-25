import React from 'react'
import { useHistory } from 'react-router-dom'
import ContactStyled from './ContactStyled'
import Message from '../Message/Message'
import User from '../User/User'

interface IProps {}

const Contact = (props: IProps) => {
  const history = useHistory()

  return (
    <ContactStyled onClick={() => history.push('/messenger')}>
      <User />
      <Message message="Hello, Kitty" align="left" fullWidth={true} />
    </ContactStyled>
  )
}

export default Contact
