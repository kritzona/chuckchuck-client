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

interface IProps {}

const SearchContactModal = (props: IProps) => {
  return (
    <SearchContactModalStyled>
      <SearchContactModalHeaderStyled>
        <InputText type="text" placeholder="Поиск контакта" />
      </SearchContactModalHeaderStyled>
      <SearchContactModalContentStyled>
        <SearchContactModalUsersStyled>
          <SearchContactModalUserStyled>
            <User
              firstName="Имя"
              lastName="Фамилия"
              avatar={avatarImageSource}
              isOnline={false}
            ></User>
          </SearchContactModalUserStyled>
          <SearchContactModalUserStyled>
            <User
              firstName="Имя"
              lastName="Фамилия"
              avatar={avatarImageSource}
              isOnline={false}
            ></User>
          </SearchContactModalUserStyled>
          <SearchContactModalUserStyled>
            <User
              firstName="Имя"
              lastName="Фамилия"
              avatar={avatarImageSource}
              isOnline={false}
            ></User>
          </SearchContactModalUserStyled>
          <SearchContactModalUserStyled>
            <User
              firstName="Имя"
              lastName="Фамилия"
              avatar={avatarImageSource}
              isOnline={false}
            ></User>
          </SearchContactModalUserStyled>
          <SearchContactModalUserStyled>
            <User
              firstName="Имя"
              lastName="Фамилия"
              avatar={avatarImageSource}
              isOnline={false}
            ></User>
          </SearchContactModalUserStyled>
        </SearchContactModalUsersStyled>
      </SearchContactModalContentStyled>
    </SearchContactModalStyled>
  )
}

export default SearchContactModal
