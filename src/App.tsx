import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ThemeContext from './contexts/ThemeContext'
import { ThemeProvider } from 'styled-components'

import themes from './themes/themes'
import { GlobalStyle } from './themes/GlobalStyle/GlobalStyle'
import AppStyled from './AppStyled'

import { rootToggleThemeAction } from './store/root/actions'
import { RootState } from './store/store'
import WireframeMain from './wireframes/WireframeMain/WireframeMain'
import AuthContainer from './containers/AuthContainer'
import NotificationsContainer from './containers/NotificationsContainer'

interface IProps {}

const App = (props: IProps) => {
  const theme = useSelector((state: RootState) => state.root.theme)
  const dispatch = useDispatch()

  useEffect(() => {
    updateVH()
    window.addEventListener('resize', updateVH)

    return () => {
      window.removeEventListener('resize', updateVH)
    }
  }, [])

  const updateVH = () => {
    document.documentElement.style.setProperty(
      '--vh',
      `${window.innerHeight / 100}px`,
    )
  }

  return (
    <AppStyled>
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme: () => {
            dispatch(rootToggleThemeAction())
          },
        }}
      >
        <ThemeProvider
          theme={theme === 'light' ? themes.LightTheme : themes.DarkTheme}
        >
          <GlobalStyle />
          <AuthContainer>
            <WireframeMain />
          </AuthContainer>
          <NotificationsContainer />
        </ThemeProvider>
      </ThemeContext.Provider>
    </AppStyled>
  )
}

export default App
