export enum ERootActionTypes {
  TOGGLE_THEME = 'root/TOGGLE_THEME',
  ENABLE_PRELOADER = 'root/ENABLE_PRELOADER',
  DISABLE_PRELOADER = 'root/DISABLE_PRELOADER',
  SET_DATE_NOW = 'root/SET_DATE_NOW',
}

export interface IRootState {
  theme: string
  preloader: {
    enabled: boolean
  }
  dateNow: Date
}

export interface IRootToggleThemeAction {
  type: ERootActionTypes.TOGGLE_THEME
}
export interface IRootEnablePreloaderAction {
  type: ERootActionTypes.ENABLE_PRELOADER
}
export interface IRootDisablePreloaderAction {
  type: ERootActionTypes.DISABLE_PRELOADER
}
export interface IRootSetDateNowAction {
  type: ERootActionTypes.SET_DATE_NOW
}

export type TRootAction =
  | IRootToggleThemeAction
  | IRootEnablePreloaderAction
  | IRootDisablePreloaderAction
  | IRootSetDateNowAction
