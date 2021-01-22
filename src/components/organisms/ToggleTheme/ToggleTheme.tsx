import React from 'react'
import ThemeContext from '../../../contexts/ThemeContext'
import InputToggle from '../../molecules/InputToggle/InputToggle'

interface IProps {}

const ToggleTheme = (props: IProps) => {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <InputToggle
          value={''}
          checked={theme === 'dark'}
          onClick={() => toggleTheme()}
        />
      )}
    </ThemeContext.Consumer>
  )
}

export default ToggleTheme
