interface IUserAuthAction {
  type: 'AUTH'
}
interface IUserLogoutAction {
  type: 'LOGOUT'
}

export const userAuthAction = (): IUserAuthAction => {
  return {
    type: 'AUTH',
  }
}
export const userLogoutAction = (): IUserLogoutAction => {
  return {
    type: 'LOGOUT',
  }
}

export type TUserAction = IUserAuthAction | IUserLogoutAction
