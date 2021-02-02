import { TUserAction } from './actions'
import avatarImageSource from '../../assets/images/avatar.png'

interface IUserState {
  id: string | number
  login: string
  firstName: string
  lastName: string
  avatar: string | null
  accessToken: string
  isAuth: boolean
}

const initialState: IUserState = {
  id: -1,
  login: 'guest',
  firstName: 'Гость',
  lastName: 'Гость',
  avatar: null,
  accessToken: '',
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
        accessToken: '',
        isAuth: true,
      }
      return state
    case 'LOGOUT':
      localStorage.removeItem('chuckchuck:user:id')
      localStorage.removeItem('chuckchuck:user:accesstoken')
      state = initialState
      return state
    default:
      return state
  }
}

export default userReducer
