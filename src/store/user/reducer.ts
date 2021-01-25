import { TUserAction } from './actions'
import avatarImageSource from '../../assets/images/avatar.png'

interface IUserState {
  id: number
  login: string
  firstName: string
  lastName: string
  avatar: string | null
  isAuth: boolean
}

const initialState: IUserState = {
  id: -1,
  login: 'guest',
  firstName: 'Гость',
  lastName: 'Гость',
  avatar: null,
  isAuth: false,
}
const userReducer = (state: IUserState = initialState, action: TUserAction) => {
  switch (action.type) {
    case 'AUTH':
      state = {
        id: 1,
        login: 'kritzona',
        firstName: 'Влад',
        lastName: 'Усманов',
        avatar: avatarImageSource,
        isAuth: true,
      }
      return state
    case 'LOGOUT':
      state = initialState
      return state
    default:
      return state
  }
}

export default userReducer
