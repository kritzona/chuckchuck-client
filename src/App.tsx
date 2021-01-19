import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './views/Home/Home'
import UIKit from './views/UIKit/UIKit'
import Messenger from './views/Messenger/Messenger'
import './App.scss'

interface IProps {}

const App = (props: IProps) => {
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
      <div className="app">
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
      </div>
    </Router>
  )
}

export default App
