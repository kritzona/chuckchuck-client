import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ThemeContext from './contexts/ThemeContext'
import { ThemeProvider } from 'styled-components'

import themes from './themes/themes'
import { GlobalStyle } from './themes/GlobalStyle/GlobalStyle'
import AppStyled from './AppStyled'

import {
  rootSetDateNowAction,
  rootToggleThemeAction,
} from './store/root/actions'
import { RootState } from './store/store'
import WireframeMain from './wireframes/WireframeMain/WireframeMain'
import AuthContainer from './containers/AuthContainer'
import NotificationsContainer from './containers/NotificationsContainer'
import Preloader from './components/organisms/Preloader/Preloader'

interface IProps {}

const App = (props: IProps) => {
  const theme = useSelector((state: RootState) => state.root.theme)
  const enabledPreloader = useSelector(
    (state: RootState) => state.root.preloader.enabled,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    updateVH()
    window.addEventListener('resize', updateVH)

    const setDateNowInterval = setInterval(() => {
      dispatch(rootSetDateNowAction())
    }, 1000)

    return () => {
      window.removeEventListener('resize', updateVH)
      clearInterval(setDateNowInterval)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          {enabledPreloader && <Preloader />}
          <NotificationsContainer />
        </ThemeProvider>
      </ThemeContext.Provider>
    </AppStyled>
  )
}

export default App
