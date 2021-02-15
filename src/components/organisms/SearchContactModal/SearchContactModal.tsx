import React from 'react'
import {
  SearchContactModalHeaderStyled,
  SearchContactModalContentStyled,
  SearchContactModalStyled,
  SearchContactModalUsersStyled,
  SearchContactModalUserStyled,
} from './SearchContactModalStyled'
import InputText from '../../molecules/InputText/InputText'
import User from '../../molecules/User/User'
import avatarImageSource from '../../../assets/images/avatar.png'
import { IFoundContactItem } from '../../../store/found-contact/types'

interface IProps {
  foundContactItems: IFoundContactItem[]
  onSearchInput?: (value: string) => void
  onBindContact?: (contactId: string | number) => void
}

const SearchContactModal = (props: IProps) => {
  const handleInput = (value: string) => {
    if (props.onSearchInput) props.onSearchInput(value)
  }
  const handleContactClick = (contactId: string | number) => {
    if (props.onBindContact) props.onBindContact(contactId)
  }

  return (
    <SearchContactModalStyled>
      <SearchContactModalHeaderStyled>
        <InputText
          type="text"
          placeholder="Поиск контакта"
          onInput={(value: string) => handleInput(value)}
          inFocus={true}
        />
      </SearchContactModalHeaderStyled>
      <SearchContactModalContentStyled>
        <SearchContactModalUsersStyled>
          {props.foundContactItems.map((foundContactItem) => (
            <SearchContactModalUserStyled
              key={foundContactItem.id}
              onClick={() => handleContactClick(foundContactItem.id)}
            >
              <User
                firstName={foundContactItem.firstName}
                lastName={foundContactItem.lastName}
                avatar={avatarImageSource}
                isOnline={foundContactItem.isOnline}
              ></User>
            </SearchContactModalUserStyled>
          ))}
        </SearchContactModalUsersStyled>
      </SearchContactModalContentStyled>
    </SearchContactModalStyled>
  )
}

export default SearchContactModal
