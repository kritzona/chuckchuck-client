import React, { useEffect, useRef } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from '../../views/Home/Home'
import UIKit from '../../views/UIKit/UIKit'
import Contacts from '../../views/Contacts/Contacts'
import Messenger from '../../views/Messenger/Messenger'
import PartHeader from '../../parts/PartHeader/PartHeader'
import MainHeader from '../../components/organisms/MainHeader/MainHeader'
import MessengerHeader from '../../components/organisms/MessengerHeader/MessengerHeader'
import PartMain from '../../parts/PartMain/PartMain'

import {
  WireframeMainContentStyled,
  WireframeMainFooterStyled,
  WireframeMainHeaderStyled,
  WireframeMainStyled,
} from './WireframeMainStyled'
import PartFooter from '../../parts/PartFooter/PartFooter'
import Footer from '../../components/organisms/Footer/Footer'

interface IProps {}

const WireframeMain = (props: IProps) => {
  const wireframeMainHeaderRef = useRef<HTMLDivElement>(null)
  const wireframeMainContentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let wireframeMainHeaderHeight = 0

    if (wireframeMainHeaderRef && wireframeMainHeaderRef.current) {
      wireframeMainHeaderHeight = wireframeMainHeaderRef.current.offsetHeight
    }

    if (wireframeMainContentRef && wireframeMainContentRef.current) {
      wireframeMainContentRef.current.style.paddingTop = `${wireframeMainHeaderHeight}px`
    }
  })

  return (
    <WireframeMainStyled>
      <Router>
        <WireframeMainHeaderStyled ref={wireframeMainHeaderRef}>
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
        <WireframeMainContentStyled ref={wireframeMainContentRef}>
          <PartMain>
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
          </PartMain>
        </WireframeMainContentStyled>
      </Router>
    </WireframeMainStyled>
  )
}

export default WireframeMain
