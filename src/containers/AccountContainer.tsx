import React from 'react'
import Account from '../components/organisms/Account/Account'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { useHistory } from 'react-router-dom'

interface IProps {}

const AccountContainer = (props: IProps) => {
  const history = useHistory()
  const user = useSelector((state: RootState) => state.user)

  const handleOpenSettings = () => {
    history.push('/settings')
  }

  return (
    <React.Fragment>
      {user.isAuth && (
        <Account user={user} onOpenSettings={() => handleOpenSettings()} />
      )}
    </React.Fragment>
  )
}

export default AccountContainer
