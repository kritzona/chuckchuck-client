import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ThemeContext from './contexts/ThemeContext'
import { ThemeProvider } from 'styled-components'

import Home from './views/Home/Home'
import UIKit from './views/UIKit/UIKit'
import Messenger from './views/Messenger/Messenger'

import themes from './themes/themes'
import { GlobalStyle } from './themes/GlobalStyle/GlobalStyle'
import AppStyled from './AppStyled'

import { rootToggleThemeAction } from './store/root/actions'
import { RootState } from './store/store'

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
    <Router>
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme: () => dispatch(rootToggleThemeAction()),
        }}
      >
        <ThemeProvider
          theme={theme === 'light' ? themes.LightTheme : themes.DarkTheme}
        >
          <AppStyled>
            <GlobalStyle />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/ui-kit">
                <UIKit />
              </Route>
              <Route path="/messenger">
                <Messenger />
              </Route>
            </Switch>
          </AppStyled>
        </ThemeProvider>
      </ThemeContext.Provider>
    </Router>
  )
}

export default App
