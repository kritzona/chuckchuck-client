import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './views/Home/Home'
import UIKit from './views/UIKit/UIKit'
import Messenger from './views/Messenger/Messenger'
import './App.scss'

interface IProps {}

const App = (props: IProps) => {
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
