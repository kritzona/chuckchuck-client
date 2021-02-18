import React, { useEffect, useRef, Suspense } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import PartHeader from '../../parts/PartHeader/PartHeader'
import PartMain from '../../parts/PartMain/PartMain'

import {
  WireframeMainContentStyled,
  WireframeMainHeaderStyled,
  WireframeMainStyled,
} from './WireframeMainStyled'
import Preloader from '../../components/organisms/Preloader/Preloader'

interface IProps {
  match: {}
  location: {}
  history: {}
}

const Home = React.lazy(() => import('../../views/Home/Home'))
const SignUp = React.lazy(() => import('../../views/SignUp/SignUp'))
const UIKit = React.lazy(() => import('../../views/UIKit/UIKit'))
const Contacts = React.lazy(() => import('../../views/Contacts/Contacts'))
const Messenger = React.lazy(() => import('../../views/Messenger/Messenger'))
const Settings = React.lazy(() => import('../../views/Settings/Settings'))
const MainHeader = React.lazy(
  () => import('../../components/organisms/MainHeader/MainHeader'),
)
const MessengerHeaderContainer = React.lazy(
  () => import('../../containers/MessengerHeaderContainer'),
)

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
              <Suspense fallback={<Preloader />}>
                <MainHeader />
              </Suspense>
            </Route>
            <Route path="/sign-up">
              <Suspense fallback={<Preloader />}>
                <MainHeader />
              </Suspense>
            </Route>
            <Route path="/ui-kit">
              <Suspense fallback={<Preloader />}>
                <MainHeader />
              </Suspense>
            </Route>
            <Route path="/contacts">
              <Suspense fallback={<Preloader />}>
                <MainHeader />
              </Suspense>
            </Route>
            <Route path="/settings">
              <Suspense fallback={<Preloader />}>
                <MainHeader />
              </Suspense>
            </Route>
            <Route path="/messenger/:contactId/:dialogId">
              <Suspense fallback={<Preloader />}>
                <MessengerHeaderContainer />
              </Suspense>
            </Route>
          </Switch>
        </PartHeader>
      </WireframeMainHeaderStyled>
      <WireframeMainContentStyled ref={wireframeMainContentRef}>
        <PartMain>
          <Switch>
            <Route exact path="/">
              <Suspense fallback={<Preloader />}>
                <Home />
              </Suspense>
            </Route>
            <Route path="/sign-up">
              <Suspense fallback={<Preloader />}>
                <SignUp />
              </Suspense>
            </Route>
            <Route path="/ui-kit">
              <Suspense fallback={<Preloader />}>
                <UIKit />
              </Suspense>
            </Route>
            <Route path="/contacts">
              <Suspense fallback={<Preloader />}>
                <Contacts />
              </Suspense>
            </Route>
            <Route path="/settings">
              <Suspense fallback={<Preloader />}>
                <Settings />
              </Suspense>
            </Route>
            <Route path="/messenger/:contactId/:dialogId">
              <Suspense fallback={<Preloader />}>
                <Messenger />
              </Suspense>
            </Route>
          </Switch>
        </PartMain>
      </WireframeMainContentStyled>
    </WireframeMainStyled>
  )
}

export default withRouter(WireframeMain)
