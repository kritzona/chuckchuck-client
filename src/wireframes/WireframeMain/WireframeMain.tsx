import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from '../../views/Home/Home'
import UIKit from '../../views/UIKit/UIKit'
import Contacts from '../../views/Contacts/Contacts'
import Messenger from '../../views/Messenger/Messenger'
import PartHeader from '../../parts/PartHeader/PartHeader'
import MainHeader from '../../components/organisms/MainHeader/MainHeader'
import PartContent from '../../parts/PartContent/PartContent'

import {
  WireframeMainContentStyled,
  WireframeMainFooterStyled,
  WireframeMainHeaderStyled,
  WireframeMainStyled,
} from './WireframeMainStyled'
import MessengerHeader from '../../components/organisms/MessengerHeader/MessengerHeader'

interface IProps {}

const WireframeMain = (props: IProps) => {
  return (
    <WireframeMainStyled>
      <Router>
        <WireframeMainHeaderStyled>
          <PartHeader>
            <Switch>
              <Route exact path="/">
                <MainHeader />
              </Route>
              <Route path="/ui-kit">
                <MainHeader />
              </Route>
              <Route path="/contacts">
                <MainHeader />
              </Route>
              <Route path="/messenger">
                <MessengerHeader />
              </Route>
            </Switch>
          </PartHeader>
        </WireframeMainHeaderStyled>
        <WireframeMainContentStyled>
          <PartContent>
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
          </PartContent>
        </WireframeMainContentStyled>
        <WireframeMainFooterStyled />
      </Router>
    </WireframeMainStyled>
  )
}

export default WireframeMain
