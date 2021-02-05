import { ERootActionTypes, IRootToggleThemeAction } from './types'

export const rootToggleThemeAction = (): IRootToggleThemeAction => ({
  type: ERootActionTypes.TOGGLE_THEME,
})
