interface IRootToggleThemeAction {
  type: 'TOGGLE_THEME'
}

export const rootToggleThemeAction = (): IRootToggleThemeAction => ({
  type: 'TOGGLE_THEME',
})

export type IRootAction = IRootToggleThemeAction
