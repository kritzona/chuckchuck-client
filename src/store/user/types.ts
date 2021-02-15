export enum EUserActionTypes {
  AUTH = 'user/AUTH',
  LOGIN = 'user/LOGIN',
  REGISTER = 'user/REGISTER',
  LOGOUT = 'user/LOGOUT',
  FETCH_ACCOUNT = 'user/FETCH_ACCOUNT',
}

export interface IUserState {
  id: string | number
  login: string
  firstName: string
  lastName: string
  avatar: string | null
  isAuth?: boolean
}

export interface IUserAuthAction {
  type: EUserActionTypes.AUTH
  payload: IUserState
}
export interface IUserLoginAction {
  type: EUserActionTypes.LOGIN
  payload: { login: string; password: string; remember: boolean }
}
export interface IUserRegisterAction {
  type: EUserActionTypes.REGISTER
  payload: {
    login: string
    firstName: string
    lastName: string
    password: string
  }
}
export interface IUserLogoutAction {
  type: EUserActionTypes.LOGOUT
}
export interface IUserFetchAccountAction {
  type: EUserActionTypes.FETCH_ACCOUNT
  payload: { id: string; accessToken: string }
}

export type TUserAction =
  | IUserAuthAction
  | IUserLogoutAction
  | IUserLoginAction
  | IUserRegisterAction
  | IUserFetchAccountAction
