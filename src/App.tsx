import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Home from './views/Home/Home'
import UIKit from './views/UIKit/UIKit'
import Messenger from './views/Messenger/Messenger'

import themes from './themes/themes'
import { GlobalStyle } from './themes/GlobalStyle/GlobalStyle'
import AppStyled from './AppStyled'

interface IProps {}

const App = (props: IProps) => {
  const [theme, setTheme] = useState('light')

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
  const toggleTheme = () => {
    switch (theme) {
      case 'light':
        setTheme('dark')
        break
      case 'dark':
        setTheme('light')
        break
      default:
        setTheme('light')
        break
    }
  }

  return (
    <Router>
      <AppStyled>
        <ThemeProvider
          theme={theme === 'light' ? themes.LightTheme : themes.DarkTheme}
        >
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
        </ThemeProvider>
      </AppStyled>
    </Router>
  )
}

export default App
