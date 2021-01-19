import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Home from './views/Home/Home'
import UIKit from './views/UIKit/UIKit'
import Messenger from './views/Messenger/Messenger'

import { lightTheme, darkTheme } from './theme'
import { GlobalStyle } from './components/GlobalStyle'

import './App.scss'

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
      <div className="app">
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <GlobalStyle></GlobalStyle>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/ui-kit">
              <UIKit></UIKit>
            </Route>
            <Route path="/messenger">
              <Messenger></Messenger>
            </Route>
          </Switch>
        </ThemeProvider>
      </div>
    </Router>
  )
}

export default App
