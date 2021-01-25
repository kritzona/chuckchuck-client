import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import TemplateContacts from '../templates/TemplateContacts/TemplateContacts'

interface IProps {}

const TemplateContactsContainer = (props: IProps) => {
  const history = useHistory()
  const user = useSelector((state: RootState) => state.user)

  useEffect(() => {
    if (!user.isAuth) {
      history.push('/')
    }
  }, [user, history])

  return <React.Fragment>{user.isAuth && <TemplateContacts />}</React.Fragment>
}

export default TemplateContactsContainer
