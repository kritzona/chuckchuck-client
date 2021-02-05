export enum ERootActionTypes {
  TOGGLE_THEME = 'root/TOGGLE_THEME',
}

export interface IRootState {
  theme: string
}

export interface IRootToggleThemeAction {
  type: ERootActionTypes.TOGGLE_THEME
}

export type IRootAction = IRootToggleThemeAction
