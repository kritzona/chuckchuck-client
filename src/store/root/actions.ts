import {
  ERootActionTypes,
  IRootDisablePreloaderAction,
  IRootEnablePreloaderAction,
  IRootSetDateNowAction,
  IRootToggleThemeAction,
} from './types'

export const rootToggleThemeAction = (): IRootToggleThemeAction => ({
  type: ERootActionTypes.TOGGLE_THEME,
})
export const rootEnablePreloaderAction = (): IRootEnablePreloaderAction => ({
  type: ERootActionTypes.ENABLE_PRELOADER,
})
export const rootDisablePreloaderAction = (): IRootDisablePreloaderAction => ({
  type: ERootActionTypes.DISABLE_PRELOADER,
})
export const rootSetDateNowAction = (): IRootSetDateNowAction => ({
  type: ERootActionTypes.SET_DATE_NOW,
})
