import React from 'react'
import ThemeContext from '../../../contexts/ThemeContext'
import InputToggle from '../InputToggle/InputToggle'
import { ToggleThemeMoonStyled, ToggleThemeStyled } from './ToggleThemeStyled'

interface IProps {}

const ToggleTheme = (props: IProps) => {
  return (
    <ToggleThemeStyled>
      <ToggleThemeMoonStyled />
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <InputToggle
            value={''}
            checked={theme === 'dark'}
            onClick={() => toggleTheme()}
          />
        )}
      </ThemeContext.Consumer>
    </ToggleThemeStyled>
  )
}

export default ToggleTheme
