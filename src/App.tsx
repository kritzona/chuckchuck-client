import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ThemeContext from './contexts/ThemeContext'
import { ThemeProvider } from 'styled-components'

import themes from './themes/themes'
import { GlobalStyle } from './themes/GlobalStyle/GlobalStyle'
import AppStyled from './AppStyled'

import { rootToggleThemeAction } from './store/root/actions'
import { RootState } from './store/store'
import WireframeMain from './wireframes/WireframeMain/WireframeMain'
import userAPI from './api/UserAPI'
import { userAuthAction } from './store/user/actions'
import avatarImageSource from './assets/images/avatar.png'

interface IProps {}

const App = (props: IProps) => {
  const [init, setInit] = useState(false)
  const theme = useSelector((state: RootState) => state.root.theme)
  const dispatch = useDispatch()

  useEffect(() => {
    updateVH()
    window.addEventListener('resize', updateVH)

    return () => {
      window.removeEventListener('resize', updateVH)
    }
  }, [])
  useEffect(() => {
    if (!init) {
      userAPI.fetchSelfItem().then((item) => {
        if (item) {
          dispatch(
            userAuthAction({
              id: item.id,
              login: item.login,
              firstName: item.firstName,
              lastName: item.lastName,
              avatar: avatarImageSource,
            }),
          )
        }

        setInit(true)
      })
    }
  }, [init])

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
          toggleTheme: () => dispatch(rootToggleThemeAction()),
        }}
      >
        <ThemeProvider
          theme={theme === 'light' ? themes.LightTheme : themes.DarkTheme}
        >
          <GlobalStyle />
          {init && <WireframeMain />}
        </ThemeProvider>
      </ThemeContext.Provider>
    </AppStyled>
  )
}

export default App
