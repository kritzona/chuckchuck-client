import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SearchContactModal from '../components/organisms/SearchContactModal/SearchContactModal'
import { foundContactSearchAction } from '../store/found-contact/actions'
import { RootState } from '../store/store'
import { userStorage } from '../utils/user-storage'

interface IProps {}

const SearchContactContainer = (props: IProps) => {
  const { userId, userAccessToken } = userStorage()
  const foundContactItems = useSelector(
    (state: RootState) => state.foundContact.items,
  )
  const dispatch = useDispatch()

  const handleSearchInput = (value: string) => {
    dispatch(
      foundContactSearchAction(value, userId || '', userAccessToken || ''),
    )
  }

  return (
    <SearchContactModal
      foundContactItems={foundContactItems}
      onSearchInput={(value: string) => handleSearchInput(value)}
    />
  )
}

export default SearchContactContainer
