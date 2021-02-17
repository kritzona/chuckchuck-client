import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SearchContactModal from '../components/organisms/SearchContactModal/SearchContactModal'
import {
  foundContactBindAction,
  foundContactSearchAction,
} from '../store/found-contact/actions'
import { RootState } from '../store/store'
import { userStorage } from '../utils/user-storage'

interface IProps {
  onClose?: () => void
}

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
  const handleBindContact = (contactId: string | number) => {
    dispatch(
      foundContactBindAction(contactId, userId || '', userAccessToken || ''),
    )

    if (props.onClose) props.onClose()
  }

  return (
    <SearchContactModal
      foundContactItems={foundContactItems}
      onSearchInput={(...attrs) => handleSearchInput(...attrs)}
      onBindContact={(...attrs) => handleBindContact(...attrs)}
    />
  )
}

export default SearchContactContainer
