import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {
  WireframeMainContentStyled,
  WireframeMainFooterStyled,
  WireframeMainHeaderStyled,
  WireframeMainStyled,
} from './WireframeMainStyled'
import Home from '../../views/Home/Home'
import UIKit from '../../views/UIKit/UIKit'
import Contacts from '../../views/Contacts/Contacts'
import Messenger from '../../views/Messenger/Messenger'

interface IProps {}

const WireframeMain = (props: IProps) => {
  return (
    <WireframeMainStyled>
      <Router>
        <WireframeMainHeaderStyled />
        <WireframeMainContentStyled>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/ui-kit">
              <UIKit />
            </Route>
            <Route path="/contacts">
              <Contacts />
            </Route>
            <Route path="/messenger">
              <Messenger />
            </Route>
          </Switch>
        </WireframeMainContentStyled>
        <WireframeMainFooterStyled />
      </Router>
    </WireframeMainStyled>
  )
}

export default WireframeMain
