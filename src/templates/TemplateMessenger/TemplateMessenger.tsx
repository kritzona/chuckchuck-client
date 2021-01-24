import React, { useState, useRef, useEffect } from 'react'
import Messages from '../../components/organisms/Messages/Messages'
import MessengerHeader from '../../components/organisms/MessengerHeader/MessengerHeader'
import SendBox from '../../components/organisms/SendBox/SendBox'
import {
  TemplateMessengerBackgroundStyled,
  TemplateMessengerHeaderStyled,
  TemplateMessengerMessagesStyled,
  TemplateMessengerMessagesWrapperStyled,
  TemplateMessengerSendboxStyled,
  TemplateMessengerStyled,
} from './TemplateMessengerStyled'
import ToggleTheme from '../../components/organisms/ToggleTheme/ToggleTheme'
import Header from '../../components/organisms/Header/Header'

interface IProps {}

const TemplateMessenger = (props: IProps) => {
  const [loaded, setLoaded] = useState(false)

  const templateMessengerHeaderRef = useRef<HTMLDivElement>(null)
  const templateMessengerMessagesRef = useRef<HTMLDivElement>(null)
  const templateMessengerMessagesWrapperRef = useRef<HTMLDivElement>(null)
  const templateMessengerMessagesEndRef = useRef<HTMLDivElement>(null)
  const templateMessengerSendboxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let templateMessengerHeaderHeight = 0
    let templateMessengerSendboxHeight = 0

    if (templateMessengerHeaderRef && templateMessengerHeaderRef.current) {
      templateMessengerHeaderHeight =
        templateMessengerHeaderRef.current.clientHeight
    }
    if (templateMessengerSendboxRef && templateMessengerSendboxRef.current) {
      templateMessengerSendboxHeight =
        templateMessengerSendboxRef.current.clientHeight
    }

    if (templateMessengerMessagesRef && templateMessengerMessagesRef.current) {
      templateMessengerMessagesRef.current.style.height = `calc(100% - ${templateMessengerHeaderHeight}px - ${templateMessengerSendboxHeight}px)`
      templateMessengerMessagesRef.current.style.maxHeight = `calc(100% - ${templateMessengerHeaderHeight}px - ${templateMessengerSendboxHeight}px)`

      if (!loaded) {
        setTimeout(() => {
          if (
            templateMessengerMessagesEndRef &&
            templateMessengerMessagesEndRef.current
          ) {
            templateMessengerMessagesEndRef.current.scrollIntoView({
              behavior: 'smooth',
            })
          }
        }, 10)
      }
    }

    if (!loaded) setLoaded(true)
  }, [loaded, setLoaded])

  return (
    <TemplateMessengerStyled>
      <TemplateMessengerBackgroundStyled />
      <TemplateMessengerHeaderStyled ref={templateMessengerHeaderRef}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Header
                leftChildren={<MessengerHeader />}
                rightChildren={<ToggleTheme />}
              />
            </div>
          </div>
        </div>
      </TemplateMessengerHeaderStyled>
      <TemplateMessengerMessagesStyled ref={templateMessengerMessagesRef}>
        <TemplateMessengerMessagesWrapperStyled
          ref={templateMessengerMessagesWrapperRef}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Messages />
                <div ref={templateMessengerMessagesEndRef} />
              </div>
            </div>
          </div>
        </TemplateMessengerMessagesWrapperStyled>
      </TemplateMessengerMessagesStyled>
      <TemplateMessengerSendboxStyled ref={templateMessengerSendboxRef}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SendBox />
            </div>
          </div>
        </div>
      </TemplateMessengerSendboxStyled>
    </TemplateMessengerStyled>
  )
}

export default TemplateMessenger
