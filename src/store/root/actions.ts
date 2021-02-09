import {
  ERootActionTypes,
  IRootDisablePreloaderAction,
  IRootEnablePreloaderAction,
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
