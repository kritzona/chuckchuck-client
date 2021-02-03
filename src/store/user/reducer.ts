import { TUserAction } from './actions'
import avatarImageSource from '../../assets/images/avatar.png'

export interface IUserState {
  id: string | number
  login: string
  firstName: string
  lastName: string
  avatar: string | null
  isAuth?: boolean
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
    case 'LOGOUT':
      localStorage.removeItem('chuckchuck:user:id')
      localStorage.removeItem('chuckchuck:user:access-token')
      sessionStorage.removeItem('chuckchuck:user:id')
      sessionStorage.removeItem('chuckchuck:user:access-token')
      state = initialState
      return state
    default:
      return state
  }
}

export default userReducer
