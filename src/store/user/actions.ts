import {
  EUserActionTypes,
  IUserAuthAction,
  IUserFetchAccountAction,
  IUserLoginAction,
  IUserLogoutAction,
  IUserRegisterAction,
  IUserState,
} from './types'

export const userAuthAction = (user: IUserState): IUserAuthAction => {
  return {
    type: EUserActionTypes.AUTH,
    payload: user,
  }
}
export const userLogoutAction = (): IUserLogoutAction => {
  return {
    type: EUserActionTypes.LOGOUT,
  }
}
export const userLoginAction = (
  login: string,
  password: string,
  remember: boolean,
): IUserLoginAction => {
  return {
    type: EUserActionTypes.LOGIN,
    payload: { login, password, remember },
  }
}
export const userRegisterAction = (
  login: string,
  firstName: string,
  lastName: string,
  password: string,
): IUserRegisterAction => ({
  type: EUserActionTypes.REGISTER,
  payload: {
    login,
    firstName,
    lastName,
    password,
  },
})
export const userFetchAccountAction = (
  id: string,
  accessToken: string,
): IUserFetchAccountAction => {
  return {
    type: EUserActionTypes.FETCH_ACCOUNT,
    payload: { id, accessToken },
  }
}
