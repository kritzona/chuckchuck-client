import { IUserState } from './reducer'

interface IUserAuthAction {
  type: 'AUTH'
  payload: IUserState
}
interface IUserLogoutAction {
  type: 'LOGOUT'
}

export const userAuthAction = (user: IUserState): IUserAuthAction => {
  return {
    type: 'AUTH',
    payload: user,
  }
}
export const userLogoutAction = (): IUserLogoutAction => {
  return {
    type: 'LOGOUT',
  }
}

export type TUserAction = IUserAuthAction | IUserLogoutAction
