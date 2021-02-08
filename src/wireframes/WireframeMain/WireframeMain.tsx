import React, { useEffect, useRef } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import Home from '../../views/Home/Home'
import UIKit from '../../views/UIKit/UIKit'
import Contacts from '../../views/Contacts/Contacts'
import Messenger from '../../views/Messenger/Messenger'
import PartHeader from '../../parts/PartHeader/PartHeader'
import MainHeader from '../../components/organisms/MainHeader/MainHeader'
import PartMain from '../../parts/PartMain/PartMain'

import {
  WireframeMainContentStyled,
  WireframeMainHeaderStyled,
  WireframeMainStyled,
} from './WireframeMainStyled'
import MessengerHeaderContainer from '../../containers/MessengerHeaderContainer'

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
            <Route path="/messenger/:contactId/:dialogId">
              <MessengerHeaderContainer />
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
            <Route path="/messenger/:contactId/:dialogId">
              <Messenger />
            </Route>
          </Switch>
        </PartMain>
      </WireframeMainContentStyled>
    </WireframeMainStyled>
  )
}

export default withRouter(WireframeMain)
