import { IUserState } from './reducer'

interface IUserAuthAction {
  type: 'AUTH'
  payload: IUserState
}
interface IUserLogoutAction {
  type: 'LOGOUT'
}
export interface IUserLoginAction {
  type: 'LOGIN'
  payload: { login: string; password: string; remember: boolean }
}
export interface IUserFetchAccountAction {
  type: 'FETCH_ACCOUNT'
  payload: { id: string; accessToken: string }
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
export const userLoginAction = (
  login: string,
  password: string,
  remember: boolean,
): IUserLoginAction => {
  return {
    type: 'LOGIN',
    payload: { login, password, remember },
  }
}
export const userFetchAccountAction = (
  id: string,
  accessToken: string,
): IUserFetchAccountAction => {
  return {
    type: 'FETCH_ACCOUNT',
    payload: { id, accessToken },
  }
}

export type TUserAction =
  | IUserAuthAction
  | IUserLogoutAction
  | IUserLoginAction
  | IUserFetchAccountAction
