export enum ERootActionTypes {
  TOGGLE_THEME = 'root/TOGGLE_THEME',
  ENABLE_PRELOADER = 'root/ENABLE_PRELOADER',
  DISABLE_PRELOADER = 'root/DISABLE_PRELOADER',
}

export interface IRootState {
  theme: string
  preloader: {
    enabled: boolean
  }
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

export type TRootAction =
  | IRootToggleThemeAction
  | IRootEnablePreloaderAction
  | IRootDisablePreloaderAction
