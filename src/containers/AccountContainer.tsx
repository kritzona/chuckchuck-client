import React from 'react'
import Account from '../components/organisms/Account/Account'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

interface IProps {}

const AccountContainer = (props: IProps) => {
  const user = useSelector((state: RootState) => state.user)

  return (
    <React.Fragment>{user.isAuth && <Account user={user} />}</React.Fragment>
  )
}

export default AccountContainer
