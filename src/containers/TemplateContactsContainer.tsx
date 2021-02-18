import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import TemplateContacts from '../templates/TemplateContacts/TemplateContacts'

interface IProps {}

const TemplateContactsContainer = (props: IProps) => {
  const user = useSelector((state: RootState) => state.user)

  return <React.Fragment>{user.isAuth && <TemplateContacts />}</React.Fragment>
}

export default TemplateContactsContainer
