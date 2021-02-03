import { IUserState } from './reducer'

interface IUserAuthAction {
  type: 'AUTH'
  payload: IUserState
}
interface IUserLogoutAction {
  type: 'LOGOUT'
}
export interface IUserFetchSelfAction {
  type: 'FETCH_SELF'
  payload: {
    userId: string
    userAccessToken: string
  }
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
export const userFetchSelf = (
  userId: string,
  userAccessToken: string,
): IUserFetchSelfAction => {
  return {
    type: 'FETCH_SELF',
    payload: {
      userId,
      userAccessToken,
    },
  }
}

export type TUserAction =
  | IUserAuthAction
  | IUserLogoutAction
  | IUserFetchSelfAction
