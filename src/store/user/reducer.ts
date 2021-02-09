import avatarImageSource from '../../assets/images/avatar.png'
import { EUserActionTypes, IUserState, TUserAction } from './types'
import { cleanUserStorage } from '../../utils/user-storage'

const initialState: IUserState = {
  id: -1,
  login: 'guest',
  firstName: 'Гость',
  lastName: 'Гость',
  avatar: null,
  isAuth: false,
}
const userReducer = (state = initialState, action: TUserAction) => {
  switch (action.type) {
    case EUserActionTypes.AUTH:
      const user = action.payload

      state = {
        id: user.id,
        login: user.login,
        firstName: user.firstName,
        lastName: user.lastName,
        avatar: avatarImageSource,
        isAuth: true,
      }
      return state
    case EUserActionTypes.LOGOUT:
      cleanUserStorage()
      state = initialState
      return state
    default:
      return state
  }
}

export default userReducer
